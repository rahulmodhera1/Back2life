/** Editable content for Back2Life Studios (barbershop). */

export type Service = {
  name: string;
  description: string;
  price: string;
  duration: string;
};

export const SERVICES: Service[] = [
  {
    name: "Haircut",
    description: "Consultation, precision cut, and style to finish.",
    price: "£30",
    duration: "45 min",
  },
  {
    name: "Skin Fade",
    description: "Razor-sharp fade blended to zero, detailed edges.",
    price: "£35",
    duration: "60 min",
  },
  {
    name: "Beard Trim",
    description: "Shape, line-up, and condition. Kept clean.",
    price: "£15",
    duration: "20 min",
  },
  {
    name: "Hot Towel Shave",
    description: "Traditional straight-razor shave with hot towels.",
    price: "£28",
    duration: "40 min",
  },
  {
    name: "Kids Cut",
    description: "Under 12s. Patient, sharp, and quick.",
    price: "£20",
    duration: "30 min",
  },
];

export type TeamMember = {
  name: string;
  role: string;
  specialty: string;
  /** Portrait in /public/photos/ — swap for a real headshot. */
  image: string;
};

export const TEAM: TeamMember[] = [
  {
    name: "Marcus",
    role: "Master Barber",
    specialty: "Skin fades & freestyle designs",
    image: "/photos/barber-marcus.jpg",
  },
  {
    name: "Dre",
    role: "Barber",
    specialty: "Classic cuts & hot towel shaves",
    image: "/photos/barber-dre.jpg",
  },
  {
    name: "Leo",
    role: "Barber",
    specialty: "Beard sculpting & line-ups",
    image: "/photos/barber-leo.jpg",
  },
];

export type Review = { quote: string; author: string };

/** Placeholder testimonials — swap for real Google reviews. */
export const REVIEWS: Review[] = [
  {
    quote:
      "Cleanest fade I've had in years. The place feels premium without being pretentious — you sit down and just switch off.",
    author: "Jordan M.",
  },
  {
    quote:
      "Booked with Marcus on a recommendation and never looked back. Every detail is sharp, every time.",
    author: "Ade O.",
  },
  {
    quote:
      "The hot towel shave is worth the trip alone. Walked out feeling brand new — back to life, honestly.",
    author: "Chris T.",
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
