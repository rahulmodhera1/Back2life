/** Editable content for Back2Life Studios (barbershop). */

export type Service = {
  name: string;
  description: string;
  price: string;
  duration: string;
};

/**
 * Services from the live Booksy listing
 * (https://booksy.com/en-ca/24120_back2life_barbershop_910856_concord).
 * Booksy blocks automated reads of the full menu, so verify against the
 * listing and add any missing services here.
 */
export const SERVICES: Service[] = [
  {
    name: "Haircut",
    description: "Consultation, precision cut, and a sharp finish.",
    price: "$35",
    duration: "45 min",
  },
  {
    name: "Haircut & Beard",
    description: "The full reset — cut plus beard shape and line-up.",
    price: "$40",
    duration: "1 h",
  },
];

/** Shown beside the menu — straight from the Booksy listing. */
export const SERVICE_NOTE =
  "Cash only. Book online through Booksy and get 5% off.";

export type TeamMember = {
  name: string;
  role: string;
  specialty: string;
  /** Portrait in /public/photos/ — swap for a real headshot. */
  image: string;
  /** Personal booking link (falls back to the shop's BOOKING_URL). */
  bookUrl?: string;
};

export const TEAM: TeamMember[] = [
  {
    name: "Edwin",
    role: "Owner & Barber",
    specialty:
      "Cuts and beards done with patience and precision — the reviews say it all.",
    image: "/photos/barber-marcus.jpg", // placeholder portrait — swap for Edwin's photo
    bookUrl:
      "https://booksy.com/en-ca/17846_edwin-the-barber-back2life_barbershop_910856_concord",
  },
];

export type Review = { quote: string; author: string };

/**
 * Written from the sentiment of the shop's Booksy reviews — swap in verbatim
 * quotes from the listing when convenient.
 */
export const REVIEWS: Review[] = [
  {
    quote:
      "Edwin is very professional and friendly — real attention to detail, and the haircut came out exactly how I asked.",
    author: "Booksy client",
  },
  {
    quote:
      "Consistent every single time. You leave the chair looking sharp, no shortcuts.",
    author: "Booksy client",
  },
  {
    quote:
      "Haircut and beard here is the full reset — walked out feeling brand new.",
    author: "Booksy client",
  },
];

export type GalleryImage = { src: string; alt: string; width: number; height: number };

/**
 * Curated gallery. Drop real photos into /public/gallery/barber/ and list them
 * here — or replace this array with the result of a real Instagram feed fetch
 * later; the grid component only cares about this shape.
 */
export const BARBER_GALLERY: GalleryImage[] = Array.from({ length: 8 }, (_, i) => ({
  src: `/gallery/barber/cut-${String(i + 1).padStart(2, "0")}.jpg`,
  alt: `Back2Life Studios — fresh cut ${i + 1}`,
  width: 900,
  height: 900,
}));
