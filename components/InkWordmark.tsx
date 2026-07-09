import Image from "next/image";
import { INK_LOGO_SIZE, INK_LOGO_SRC } from "@/data/site";

type InkWordmarkProps = {
  className?: string;
  /** Tailwind width classes for the logo image. */
  widthClassName?: string;
  /** Text-size classes for the blackletter fallback. */
  sizeClassName?: string;
  priority?: boolean;
  /** Hero treatment: soft shadow + faint halo so the mark lifts off the photo. */
  glow?: boolean;
};

const GLOW =
  "drop-shadow(0 6px 28px rgba(0,0,0,0.65)) drop-shadow(0 0 42px rgba(255,255,255,0.22))";

/**
 * The official Back2Life Ink wordmark (gothic script over "INK", extracted
 * white-on-transparent). Falls back to a blackletter placeholder if
 * INK_LOGO_SRC is unset in /data/site.ts.
 */
export function InkWordmark({
  className = "",
  widthClassName = "w-64 md:w-80",
  sizeClassName = "text-5xl md:text-7xl",
  priority = false,
  glow = false,
}: InkWordmarkProps) {
  if (INK_LOGO_SRC) {
    return (
      <Image
        src={INK_LOGO_SRC}
        alt="Back2Life Ink"
        width={INK_LOGO_SIZE.width}
        height={INK_LOGO_SIZE.height}
        priority={priority}
        className={`h-auto ${widthClassName} ${className}`}
        style={{ filter: glow ? GLOW : "none" }}
      />
    );
  }

  return (
    <span className={`flex flex-col items-center ${className}`}>
      <span className={`blackletter ${sizeClassName} leading-none`}>Back2Life</span>
      <span className="ink-rule mt-3 text-sm font-medium uppercase tracking-[0.5em] text-gold">
        Ink
      </span>
    </span>
  );
}
