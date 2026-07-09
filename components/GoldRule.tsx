"use client";

import { motion, useReducedMotion } from "framer-motion";

type GoldRuleProps = {
  className?: string;
  delay?: number;
  /** Where the line grows from. */
  origin?: "left" | "center";
};

/** A gold hairline that draws itself in when scrolled into view. */
export function GoldRule({ className = "", delay = 0, origin = "left" }: GoldRuleProps) {
  const reduceMotion = useReducedMotion();
  const originClass = origin === "center" ? "origin-center" : "origin-left";

  if (reduceMotion) {
    return <span aria-hidden="true" className={`block h-px bg-gold ${className}`} />;
  }

  return (
    <motion.span
      aria-hidden="true"
      className={`block h-px bg-gold ${originClass} ${className}`}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.9, delay, ease: [0.23, 1, 0.32, 1] }}
    />
  );
}
