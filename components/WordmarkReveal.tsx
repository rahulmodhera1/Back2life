"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type WordmarkRevealProps = {
  children: ReactNode;
  className?: string;
  /**
   * "wipe": the mark is unveiled left-to-right like a razor pass (Studios).
   * "focus": the mark settles out of a blur, like ink soaking in (Ink).
   */
  variant?: "wipe" | "focus";
  delay?: number;
};

/** Cinematic one-time entrance for the hero logos. Static when motion is reduced. */
export function WordmarkReveal({
  children,
  className,
  variant = "wipe",
  delay = 0,
}: WordmarkRevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const variants =
    variant === "wipe"
      ? {
          initial: { clipPath: "inset(0 100% 0 0)", opacity: 0.4 },
          animate: { clipPath: "inset(0 0% 0 0)", opacity: 1 },
        }
      : {
          initial: { opacity: 0, filter: "blur(14px)", transform: "scale(1.06)" },
          animate: { opacity: 1, filter: "blur(0px)", transform: "scale(1)" },
        };

  return (
    <motion.div
      className={className}
      initial={variants.initial}
      animate={variants.animate}
      transition={{ duration: 1.1, delay, ease: [0.23, 1, 0.32, 1] }}
    >
      {children}
    </motion.div>
  );
}
