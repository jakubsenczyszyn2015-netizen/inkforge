# InkForge room server

A room server makes collaboration work for **everyone**, not just people whose
networks happen to cooperate.

Without one, two browsers must reach each other directly. Many home routers,
phone networks and school or office wifi refuse to allow that, and the join
hangs on "Connecting…" forever. With a room server, every browser dials *out*
to it — which firewalls always allow — so **if someone can load the website,
they can join the room.** No STUN, no TURN, nothing to debug.

The server relays messages and forgets them. It never stores your artwork.

Deploying it is free and takes about five minutes.

---

## Deploy to Cloudflare Workers

You need a free Cloudflare account. Nothing here requires a paid plan or a card.

```sh
npm install -g wrangler     # one time
wrangler login              # opens your browser
cd server
wrangler deploy
```

That prints a URL like:

```
https://inkforge-rooms.your-name.workers.dev
```

Check it works:

```sh
curl https://inkforge-rooms.your-name.workers.dev/health
# {"ok":true,"service":"inkforge-rooms"}
```

## Point InkForge at it

1. Open InkForge and press **COLLAB**.
2. Expand **Connection**.
3. Paste the address into **Room server** (with or without `https://`).
4. Open a room as usual and share the code.

The setting is saved in your browser. **Everyone in the room must use the same
server**, so if you host the site yourself, put the address in as the default
(`NET_DEF.server` in `index.html`) and nobody has to type anything.

## Verifying

In the collab panel, **Diagnosis** should read:

```
Broker: room server connected
Route:  via room server
```

`Route: via room server` means the whole NAT problem is gone.

## Costs

Cloudflare's free tier covers 100,000 requests a day. One room join is one
request; messages after that ride the open WebSocket and are not billed as
requests. A few friends drawing together will not get near the limit.

## How it works

`worker.js` holds one Durable Object per room code. Everyone in a room keeps a
WebSocket open to it, and each message is forwarded to the others verbatim —
the server never parses the payload. Password checks, presence and syncing all
happen in the browsers exactly as they do peer-to-peer, so the room server is a
transport swap and nothing else.

Voice chat still connects browser-to-browser, since audio through a free-tier
server is not practical. If voice fails but drawing works, that is why — and the
relay settings under **Connection** apply to voice only in that case.
