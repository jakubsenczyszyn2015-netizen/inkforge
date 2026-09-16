/* InkForge room server
 *
 * A Durable Object per room code. Everyone in a room holds one WebSocket to it
 * and the object forwards each message to the others. Because every browser
 * dials *out* to this server, there is no NAT traversal, no STUN and no TURN:
 * if a person can load the website, they can join the room.
 *
 * The server keeps nothing. Messages are relayed and forgotten; the artwork
 * lives only in the browsers of the people drawing it.
 */

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === '/health') {
      return json({ ok: true, service: 'inkforge-rooms' });
    }

    /* /room/<code> — upgrade to a WebSocket in that room */
    const m = url.pathname.match(/^\/room\/([A-Za-z0-9_-]{1,64})$/);
    if (!m) return json({ error: 'not found' }, 404);

    if (request.headers.get('Upgrade') !== 'websocket') {
      return json({ error: 'expected a websocket upgrade' }, 426);
    }

    const id = env.ROOMS.idFromName(m[1]);
    return env.ROOMS.get(id).fetch(request);
  }
};

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json', 'access-control-allow-origin': '*' }
  });
}

export class Room {
  constructor(state) {
    this.state = state;
    this.sockets = new Set();
  }

  async fetch(request) {
    const pair = new WebSocketPair();
    const [client, server] = Object.values(pair);
    this.accept(server);
    return new Response(null, { status: 101, webSocket: client });
  }

  accept(ws) {
    ws.accept();
    this.sockets.add(ws);

    /* tell the newcomer how many others are already here, so a guest can
       distinguish "nobody is hosting this" from "the host has not replied yet" */
    try {
      ws.send(JSON.stringify({ t: '_room', others: this.sockets.size - 1 }));
    } catch (err) { /* the socket died before we could greet it */ }

    ws.addEventListener('message', ev => {
      /* relay verbatim: the server does not read or interpret the payload */
      for (const other of this.sockets) {
        if (other === ws) continue;
        try { other.send(ev.data); } catch (err) { this.sockets.delete(other); }
      }
    });

    const drop = () => {
      this.sockets.delete(ws);
      for (const other of this.sockets) {
        try { other.send(JSON.stringify({ t: '_left', others: this.sockets.size })); } catch (err) {}
      }
    };
    ws.addEventListener('close', drop);
    ws.addEventListener('error', drop);
  }
}
