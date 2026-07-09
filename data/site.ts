/**
 * Site-wide editable constants.
 * Swap these placeholders for the real links/details — nothing else needs to change.
 */

/** Booking link for Back2Life Studios (barbershop). */
export const BOOKING_URL = "https://example.com/book-a-cut"; // TODO: real booking URL

/** Consultation link for Back2Life Ink (tattoo). */
export const CONSULT_URL = "https://example.com/book-a-consultation"; // TODO: real consult URL

export const INSTAGRAM_STUDIOS = "https://www.instagram.com/back2lifestudios/";
export const INSTAGRAM_INK = "https://www.instagram.com/back2lifeink/";

/** Shared shop address (placeholder). */
export const ADDRESS = {
  line1: "123 High Street",
  line2: "Your City, AB1 2CD",
  /** "Get Directions" target. */
  mapsUrl: "https://maps.google.com/?q=Back2Life+Studios", // TODO: real maps link
};

export type OpeningHours = { day: string; hours: string };

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
export const INK_LOGO_SIZE = { width: 496, height: 212 };

export const STUDIOS_LOGO_SRC = "/logos/back2life-studios.png";
export const STUDIOS_LOGO_SIZE = { width: 1752, height: 558 };
