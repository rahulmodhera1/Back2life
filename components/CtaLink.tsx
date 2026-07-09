import type { ReactNode } from "react";

type CtaLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline";
  external?: boolean;
  className?: string;
};

/** Shared CTA: monochrome, pressable, with a hard hover swap for contrast. */
export function CtaLink({
  href,
  children,
  variant = "solid",
  external = false,
  className = "",
}: CtaLinkProps) {
  const base =
    "pressable inline-flex min-h-12 items-center justify-center gap-2 px-8 py-3 text-sm font-bold uppercase tracking-[0.2em] transition-colors duration-200";
  const styles =
    variant === "solid"
      ? "bg-white text-black hover:bg-black hover:text-white hover:outline hover:outline-1 hover:outline-white"
      : "border border-white/40 text-white hover:border-white hover:bg-white hover:text-black";

  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`${base} ${styles} ${className}`}
    >
      {children}
    </a>
  );
}
