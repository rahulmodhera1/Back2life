# Logo assets

Drop the official logo files here:

- `back2life-ink.png` — the Back2Life Ink gothic-script logo (ideally white on
  transparent). Then set `INK_LOGO_SRC = "/logos/back2life-ink.png"` in
  `/data/site.ts` and the site will use it everywhere in place of the
  blackletter placeholder wordmark.
- `back2life-studios.png` — the Studios globe wordmark, kept as a
  fallback/reference. The site reproduces this mark in code (Anton wordmark +
  the SVG wireframe globe in `/components/Globe.tsx`), so this file is not
  rendered directly.
