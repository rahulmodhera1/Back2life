import Image from "next/image";
import { STUDIOS_LOGO_SRC, STUDIOS_LOGO_SIZE } from "@/data/site";

type StudiosWordmarkProps = {
  /** Tailwind width classes controlling rendered size. */
  widthClassName?: string;
  className?: string;
  priority?: boolean;
};

/** The official Back2Life Studios wordmark (extracted white-on-transparent). */
export function StudiosWordmark({
  widthClassName = "w-64 md:w-80",
  className = "",
  priority = false,
}: StudiosWordmarkProps) {
  return (
    <Image
      src={STUDIOS_LOGO_SRC}
      alt="Back2Life"
      width={STUDIOS_LOGO_SIZE.width}
      height={STUDIOS_LOGO_SIZE.height}
      priority={priority}
      className={`h-auto ${widthClassName} ${className}`}
      style={{ filter: "none" }}
    />
  );
}
