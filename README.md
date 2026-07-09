# Back2Life

One brand, two crafts: **Back2Life Studios** (barbershop) and **Back2Life Ink**
(tattoo studio). A strictly monochrome Next.js site with a split-screen
"choose your path" landing page.

## Stack

- Next.js (App Router) + TypeScript + Tailwind CSS v4
- framer-motion for animation, lucide-react for icons
- Self-hosted fonts via `next/font` (Anton, Archivo, Pirata One)
- No CMS, no database — deployable to Vercel with zero config

## Routes

| Route     | Page                                           |
| --------- | ---------------------------------------------- |
| `/`       | Landing splitter — choose Barbershop or Tattoo |
| `/barber` | Back2Life Studios (barbershop)                 |
| `/ink`    | Back2Life Ink (tattoo studio)                  |

## Editing content

All copy, prices, hours, and links live in typed data files — no component
changes needed:

- `/data/site.ts` — `BOOKING_URL`, `CONSULT_URL`, address, hours, Instagram
  links, and `INK_LOGO_SRC`
- `/data/barber.ts` — services, team, gallery image list
- `/data/ink.ts` — artists, process steps, FAQs, portfolio image list

## Swapping in real assets

- **Photos**: drop grayscale images into `/public/gallery/barber/`,
  `/public/gallery/ink/`, and `/public/photos/` (heroes + landing split
  shots), keeping the filenames or updating the data files. Any non-B&W image
  is grayscaled by CSS automatically.
- **Ink logo**: put the gothic-script logo in `/public/logos/` and set
  `INK_LOGO_SRC` in `/data/site.ts` (see `/public/logos/README.md`).
- **Instagram**: galleries are local by design (no fragile API tokens). The
  grid components consume a typed image array, so a live feed can be dropped
  in later without a rewrite.

## Development

```bash
npm install
npm run dev    # http://localhost:3000
npm run build  # production build
npm run lint
```
