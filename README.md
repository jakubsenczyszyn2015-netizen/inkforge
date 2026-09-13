# INKFORGE 2.0 — Comic Studio

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

**Images** — asset library, drag an image straight onto a panel to fill it, comic halftone
and ink/line-art conversion, clipping into panel shapes, brightness/contrast/saturation.

**Editing** — select and transform with handles and rotation, multi-select, marquee,
snapping with live guides, align and distribute, z-order, layers panel, full undo/redo,
copy/paste across pages, autosave recovery.

## Import

- **PDF at up to 600 DPI** — replace the project, append after your pages, or drop onto the
  current page; optionally lock imported pages for tracing.
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

Everything runs locally in the browser; nothing is uploaded anywhere. PDF export, PDF import
and ZIP export pull jsPDF, PDF.js and JSZip from a CDN the first time you use them, so those
three need an internet connection once — the rest of the app, PNG export included, works
fully offline.

Press `?` in the app for the full keyboard shortcut list.
