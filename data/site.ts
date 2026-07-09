/**
 * Site-wide editable constants.
 * Swap these placeholders for the real links/details — nothing else needs to change.
 */

/** Booking link for Back2Life Studios (barbershop) — the live Booksy page. */
export const BOOKING_URL =
  "https://booksy.com/en-ca/24120_back2life_barbershop_910856_concord";

/** Edwin's own Booksy profile at the shop. */
export const EDWIN_BOOKSY_URL =
  "https://booksy.com/en-ca/17846_edwin-the-barber-back2life_barbershop_910856_concord";

/** Consultation link for Back2Life Ink (tattoo). */
export const CONSULT_URL = "https://example.com/book-a-consultation"; // TODO: real consult URL

export const INSTAGRAM_STUDIOS = "https://www.instagram.com/back2lifestudios/";
export const INSTAGRAM_INK = "https://www.instagram.com/back2lifeink/";

/** Shop address (from the Booksy listing). */
export const ADDRESS = {
  line1: "10 Buttermill Ave",
  line2: "Concord (Vaughan), ON L4K 3X4",
  /** "Get Directions" target. */
  mapsUrl:
    "https://maps.google.com/?q=Back2Life+Barbershop+10+Buttermill+Ave+Concord+ON+L4K+3X4",
};

export type OpeningHours = { day: string; hours: string };

/**
 * PLACEHOLDER hours — Booksy blocks automated reads of the full schedule, so
 * confirm these against the live listing and edit here.
 */
export const HOURS: OpeningHours[] = [
  { day: "Monday", hours: "10:00 – 19:00" },
  { day: "Tuesday", hours: "10:00 – 19:00" },
  { day: "Wednesday", hours: "10:00 – 19:00" },
  { day: "Thursday", hours: "10:00 – 20:00" },
  { day: "Friday", hours: "09:00 – 20:00" },
  { day: "Saturday", hours: "09:00 – 18:00" },
  { day: "Sunday", hours: "Closed" },
];

/**
 * Official logo assets (white on transparent, extracted from the supplied
 * files in /public/logos/). Set INK_LOGO_SRC to null to fall back to the
 * blackletter placeholder wordmark.
 */
export const INK_LOGO_SRC: string | null = "/logos/back2life-ink.png";
export const INK_LOGO_SIZE = { width: 977, height: 420 };

export const STUDIOS_LOGO_SRC = "/logos/back2life-studios.png";
export const STUDIOS_LOGO_SIZE = { width: 1752, height: 558 };
