"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import { InkWordmark } from "@/components/InkWordmark";
import { StudiosWordmark } from "@/components/StudiosWordmark";

type Side = "barber" | "ink";
type Phase = "in" | "out";

type TransitionContextValue = {
  /** Navigate between verticals behind a branded sweep overlay. */
  navigate: (href: string, side: Side) => void;
};

const TransitionContext = createContext<TransitionContextValue | null>(null);

export function useVerticalTransition() {
  return useContext(TransitionContext);
}

const SWEEP = { duration: 0.55, ease: [0.32, 0.72, 0, 1] as const };

/**
 * Branded transition between the two verticals: a near-black panel with a
 * gold leading edge sweeps across in the direction of travel (Ink lives
 * right of Studios, matching the landing door), carrying the destination's
 * logo, then sweeps on out over the new page. Reduced-motion users get an
 * instant route change.
 */
export function TransitionProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const [overlay, setOverlay] = useState<{ side: Side; phase: Phase } | null>(null);
  const pendingHref = useRef<string | null>(null);

  const navigate = useCallback(
    (href: string, side: Side) => {
      if (pathname.startsWith(`/${side}`)) return; // already there
      if (reduceMotion || overlay) {
        router.push(href);
        return;
      }
      pendingHref.current = href;
      setOverlay({ side, phase: "in" });
    },
    [pathname, reduceMotion, overlay, router],
  );

  // Once the route has actually changed, sweep the panel off.
  useEffect(() => {
    if (overlay?.phase === "in" && pendingHref.current && pathname === pendingHref.current) {
      pendingHref.current = null;
      setOverlay({ side: overlay.side, phase: "out" });
    }
  }, [pathname, overlay]);

  const onSweepComplete = () => {
    if (!overlay) return;
    if (overlay.phase === "in") {
      if (pendingHref.current) {
        router.push(pendingHref.current);
        // Fallback: never strand the overlay if the route change stalls.
        window.setTimeout(() => {
          setOverlay((current) =>
            current?.phase === "in" ? { side: current.side, phase: "out" } : current,
          );
        }, 1500);
      } else {
        setOverlay({ side: overlay.side, phase: "out" });
      }
    } else {
      setOverlay(null);
    }
  };

  // Travelling to Ink reads as moving right; to Studios as moving left.
  const enterFrom = overlay?.side === "ink" ? "100%" : "-100%";
  const exitTo = overlay?.side === "ink" ? "-100%" : "100%";

  return (
    <TransitionContext.Provider value={{ navigate }}>
      {children}
      {overlay && (
        <motion.div
          aria-hidden="true"
          className="fixed inset-0 z-[90] flex items-center justify-center bg-near-black"
          initial={{ x: enterFrom }}
          animate={{ x: overlay.phase === "in" ? "0%" : exitTo }}
          transition={SWEEP}
          onAnimationComplete={onSweepComplete}
          style={{
            borderLeft: overlay.side === "ink" ? "1px solid var(--gold-dim)" : undefined,
            borderRight: overlay.side === "barber" ? "1px solid var(--gold-dim)" : undefined,
          }}
        >
          <motion.div
            className="flex flex-col items-center gap-5"
            initial={{ opacity: 0, transform: "scale(0.96)" }}
            animate={{ opacity: overlay.phase === "in" ? 1 : 0, transform: "scale(1)" }}
            transition={{ duration: 0.35, delay: overlay.phase === "in" ? 0.25 : 0, ease: "easeOut" }}
          >
            {overlay.side === "ink" ? (
              <InkWordmark widthClassName="w-56 md:w-72" />
            ) : (
              <StudiosWordmark widthClassName="w-64 md:w-80" />
            )}
            <span className="flex items-center gap-4 text-[10px] font-semibold uppercase tracking-[0.5em] text-gold">
              <span className="h-px w-8 bg-gold-dim" />
              {overlay.side === "ink" ? "Tattoo Studio" : "Barbershop"}
              <span className="h-px w-8 bg-gold-dim" />
            </span>
          </motion.div>
        </motion.div>
      )}
    </TransitionContext.Provider>
  );
}
