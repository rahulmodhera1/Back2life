"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Stagger offset in seconds, for cascading siblings. */
  delay?: number;
  /** Element to render, so list items stay valid HTML. */
  as?: "div" | "li";
};

/**
 * Scroll-triggered reveal. Content is fully visible by default for
 * reduced-motion users and non-JS renderers; motion only enhances.
 */
export function Reveal({ children, className, delay = 0, as = "div" }: RevealProps) {
  const reduceMotion = useReducedMotion();
  const Tag = as;
  const MotionTag = as === "li" ? motion.li : motion.div;

  if (reduceMotion) {
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, transform: "translateY(24px)" }}
      whileInView={{ opacity: 1, transform: "translateY(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.23, 1, 0.32, 1] }}
    >
      {children}
    </MotionTag>
  );
}
