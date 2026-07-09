import Image from "next/image";
import { STUDIOS_LOGO_SRC, STUDIOS_LOGO_SIZE } from "@/data/site";

type StudiosWordmarkProps = {
  /** Tailwind width classes controlling rendered size. */
  widthClassName?: string;
  className?: string;
  priority?: boolean;
  /** Hero treatment: soft shadow + faint halo so the mark lifts off the photo. */
  glow?: boolean;
};

const GLOW =
  "drop-shadow(0 6px 28px rgba(0,0,0,0.65)) drop-shadow(0 0 42px rgba(255,255,255,0.22))";

/** The official Back2Life Studios wordmark (extracted white-on-transparent). */
export function StudiosWordmark({
  widthClassName = "w-64 md:w-80",
  className = "",
  priority = false,
  glow = false,
}: StudiosWordmarkProps) {
  return (
    <Image
      src={STUDIOS_LOGO_SRC}
      alt="Back2Life"
      width={STUDIOS_LOGO_SIZE.width}
      height={STUDIOS_LOGO_SIZE.height}
      priority={priority}
      className={`h-auto ${widthClassName} ${className}`}
      style={{ filter: glow ? GLOW : "none" }}
    />
  );
}
