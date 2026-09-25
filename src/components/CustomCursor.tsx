"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { useIsPointerFine } from "@/hooks/useIsPointerFine";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export function CustomCursor() {
  const fine = useIsPointerFine();
  const reduced = usePrefersReducedMotion();
  const [active, setActive] = useState(false);
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 380, damping: 30, mass: 0.35 });
  const sy = useSpring(y, { stiffness: 380, damping: 30, mass: 0.35 });

  useEffect(() => {
    if (!fine || reduced) return;

    function onMove(e: MouseEvent) {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
      const t = e.target as HTMLElement | null;
      setActive(Boolean(t?.closest("a, button, [data-cursor='hover']")));
    }
    function onLeave() {
      setVisible(false);
    }

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, [fine, reduced, x, y]);

  if (!fine || reduced) return null;

  return (
    <>
      <motion.div
        aria-hidden
        style={{ x: sx, y: sy }}
        animate={{ scale: active ? 2.4 : 1, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-none fixed left-0 top-0 z-100 -ml-1 -mt-1 hidden size-2 rounded-full bg-white mix-blend-difference md:block"
      />
      <motion.div
        aria-hidden
        style={{ x, y }}
        animate={{ scale: active ? 1.5 : 1, opacity: visible ? (active ? 0.5 : 0.25) : 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-none fixed left-0 top-0 z-100 -ml-5 -mt-5 hidden size-10 rounded-full border border-white/70 md:block"
      />
    </>
  );
}
