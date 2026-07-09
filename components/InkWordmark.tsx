import Image from "next/image";
import { INK_LOGO_SRC } from "@/data/site";

type InkWordmarkProps = {
  className?: string;
  /** Tailwind text-size classes for the placeholder script. */
  sizeClassName?: string;
};

/**
 * The Back2Life Ink wordmark. Renders the supplied gothic-script logo image
 * once INK_LOGO_SRC is set in /data/site.ts; until then, a restrained
 * blackletter placeholder that follows the logo's layout (script over "INK"
 * flanked by hairline rule marks).
 */
export function InkWordmark({ className = "", sizeClassName = "text-5xl md:text-7xl" }: InkWordmarkProps) {
  if (INK_LOGO_SRC) {
    return (
      <Image
        src={INK_LOGO_SRC}
        alt="Back2Life Ink"
        width={480}
        height={240}
        className={`h-auto w-64 md:w-80 ${className}`}
        style={{ filter: "none" }}
        priority
      />
    );
  }

  return (
    <span className={`flex flex-col items-center ${className}`}>
      <span className={`blackletter ${sizeClassName} leading-none`}>Back2Life</span>
      <span className="ink-rule mt-3 text-sm font-medium uppercase tracking-[0.5em] text-white">
        Ink
      </span>
    </span>
  );
}
