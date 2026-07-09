/** Editable content for Back2Life Ink (tattoo studio). */

import type { GalleryImage } from "./barber";

export type Artist = {
  name: string;
  specialty: string;
  href: string;
};

export const ARTISTS: Artist[] = [
  { name: "Sofia", specialty: "Fine line & script", href: "https://www.instagram.com/back2lifeink/" },
  { name: "Rey", specialty: "Black & grey realism", href: "https://www.instagram.com/back2lifeink/" },
  { name: "Kane", specialty: "Traditional & bold blackwork", href: "https://www.instagram.com/back2lifeink/" },
];

export type ProcessStep = { title: string; copy: string };

export const PROCESS: ProcessStep[] = [
  {
    title: "Consultation",
    copy: "Bring the idea — references, placement, size. We talk it through and quote honestly.",
  },
  {
    title: "Design",
    copy: "Your artist drafts the piece and refines it with you until it's exactly right.",
  },
  {
    title: "Session",
    copy: "Sterile setup, steady hands, breaks when you need them. No rushing good work.",
  },
  {
    title: "Aftercare",
    copy: "Full healing guidance and a free touch-up check once it's settled.",
  },
];

export type Faq = { question: string; answer: string };

export const FAQS: Faq[] = [
  {
    question: "How is pricing worked out?",
    answer:
      "Pricing depends on size, detail, and placement. Small pieces start from a shop minimum of £60; larger work is quoted at consultation, either per piece or per session.",
  },
  {
    question: "Do I need to pay a deposit?",
    answer:
      "Yes — a deposit secures your appointment and comes off the final price. Deposits are non-refundable but can be transferred once with at least 48 hours' notice.",
  },
  {
    question: "How do I look after a new tattoo?",
    answer:
      "Keep it clean and moisturised, avoid soaking and direct sun for two weeks, and don't pick at it while it heals. You'll leave with written aftercare instructions.",
  },
  {
    question: "Do you tattoo under-18s?",
    answer:
      "No. We tattoo over-18s only, with valid photo ID — no exceptions, even with parental consent.",
  },
];

const PORTFOLIO_SIZES: Array<[number, number]> = [
  [900, 1200], [900, 900], [900, 1350], [900, 1100], [900, 900], [900, 1250],
  [900, 1000], [900, 1400], [900, 900], [900, 1200], [900, 1050], [900, 1300],
];

/**
 * Portfolio images. Drop real photos into /public/gallery/ink/ and list them
 * here — the grid/lightbox only consume this shape, so a live feed could
 * replace this array without a rewrite.
 */
export const INK_PORTFOLIO: GalleryImage[] = PORTFOLIO_SIZES.map(([width, height], i) => ({
  src: `/gallery/ink/tattoo-${String(i + 1).padStart(2, "0")}.jpg`,
  alt: `Back2Life Ink — tattoo work ${i + 1}`,
  width,
  height,
}));
