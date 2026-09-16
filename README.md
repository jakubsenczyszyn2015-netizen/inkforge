# INKFORGE 2.1 — Comic Studio

A complete comic, manga, webtoon and graphic-novel studio in a single HTML file.
Open `inkforge.html` in any modern browser — no install, no build step, no account.

## What changed in 2.0

1.x drew straight into one flat bitmap per page, so a "300 DPI export" was really a
screen-resolution image scaled up, and a speech bubble stopped being editable the moment
you placed it.

2.0 replaces that with a **vector object model**. Panels, balloons, lettering, SFX, tones,
fills and every brush stroke are live objects stored as geometry. The same renderer draws
the screen, the page thumbnails and the export — only the scale changes. That single
decision is what makes HD export genuinely HD, and it is why everything on the page stays
editable forever.

## Drawing together

Hit **COLLAB**, type the name people should see you as, and open a room with a name and — if you
want one — a password. Share the room code and everyone works on the same book at once:

- **Live cursors.** Everyone's pointer appears on everyone's screen, named and colour-coded. The
  chips in the corner say who is here and which page they are on; click one to jump to them.
- **Everything syncs** — pages, layers, panels, lettering, strokes, images, even undo.
- **Text chat** (press `C`) and **peer-to-peer voice chat**, each on its own toggle, with mute.
- **No server holds your art.** Rooms are WebRTC peer-to-peer; the public PeerJS broker only
  introduces the browsers to each other. Tabs on the same computer sync with no internet at all.
- The password stops people wandering in by accident — it is not encryption, so don't treat a
  room as private for anything sensitive.

## Layers

A page starts with **Layer 1**, and every stroke, panel, balloon and image you make goes on the
active layer and *stays there* — the status bar always says which one that is.

- Add, rename (double-click), reorder by dragging, duplicate, merge down and delete layers.
- **Folders** for grouping — there are none until you make one; drop layers into them by dragging.
- Per layer: show/hide, lock, opacity, and a 🖨 toggle that keeps a layer out of exports — for
  roughs, reference photos and guides.
- Expand a layer to pick individual objects out of it, or move the current selection onto it.

## Highlights

**Speech bubbles** — 16 types (speech, rounded, box, thought, cloud, shout, scream, burst,
whisper, wobble, radio, telepathy, double, caption, banner, icicle). Tails are *spliced into
the balloon outline*, so fill and ink form one continuous shape with no seam cutting across
the balloon. Curved, straight, puffed, dashed and zigzag tails; as many tails per balloon as
you have speakers, each draggable on the page. Lettering auto-fits inside the shape, or the
balloon reflows around the lettering.

**Panels** — 103 layout presets across comic, manga, webtoon and novel, plus a random
generator that recursively splits the page. Panel styles: square, rounded, heavy ink, double
line, rough ink, torn edge, flashback cloud, jagged, circle, drop shadow, borderless.
Optional tilt, bleed-off-page panels, auto-dropped balloons, captions, SFX and page numbers.

**Drawing** — pen (pressure taper), pencil, brush, marker (multiply), calligraphic nib,
stabiliser, vector flood fill with screentone modes, eyedropper. Strokes are vectors, so
they stay crisp at 600 DPI. The eraser cuts back to paper rather than painting white.

**Lettering & FX** — text boxes with outline, arc, tracking and leading control; SFX word art
with layered outlines, arch, jitter and lean; speed lines, focus lines, impact bursts,
halftone, screentone, tone gradients, rain, sparkles, ink splatter, perspective grids.

**Images** — importing drops the picture straight onto the page, selected and ready to drag or
copy, and files it in the asset library at the same time. Drag an image onto a panel to fill it.
Comic halftone and ink/line-art conversion, clipping into panel shapes, colour adjustment.
**Animated GIFs play in the editor** — InkForge decodes the frames itself rather than relying on
the browser — and are held on their current frame while an export is written, then resume.

**Editing** — select and transform with handles and rotation, multi-select, marquee,
snapping with live guides, align and distribute, z-order, layers panel, full undo/redo,
copy/paste across pages, autosave recovery.

## Print shop kit

Page → Print Shop Kit builds the files a printer actually asks for:

- **Title and copyright pages** in four styles, added as real editable pages.
- **Trim-size presets** for Amazon KDP, IngramSpark, Lulu and Mixam, each setting the page size
  and the right bleed in one click.
- **Cover wrap generator** — give it your page count and paper stock and it works out the spine
  width, then builds a single back-cover / spine / front-cover page at the exact wrap size, with
  barcode and safe-area guides on a layer that never reaches the export.

## Import

- **PDF at up to 600 DPI** — replace the project, append after your pages, or drop onto the
  current page; optionally lock imported pages for tracing. Password-protected PDFs are handled.
- **Images** — into the asset library or straight in as pages.
- **Fonts** — any `.ttf` / `.otf` / `.woff` / `.woff2`, stored in the project file.
- **Projects** — `.inkforge` files, or drag any of the above onto the window.

## Export

- **PDF** at 72–600 DPI, exact trim size, with bleed, crop marks, grayscale conversion,
  page ranges and PNG or JPEG page images. Upload straight to Lulu, Blurb, IngramSpark,
  Amazon KDP or a local print shop.
- **PNG / JPG pages**, a **ZIP** of the whole book, or one tall **webtoon strip**.
- **`.inkforge` project files** — every object and asset, fully editable when reopened.
- Print directly, or save the app itself as a standalone HTML file.

## Notes

Everything runs locally in the browser; nothing is uploaded anywhere. PDF export, PDF import,
ZIP export and online collaboration rooms pull jsPDF, PDF.js, JSZip and PeerJS from a CDN the
first time you use them, so those need an internet connection — the rest of the app, PNG export
and same-machine collaboration included, works fully offline. Zoom is capped at 800%.

Press `?` in the app for the full keyboard shortcut list.
