"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

/** Layered ambient background: grid, drifting gradient orbs, pointer parallax. */
export function HeroBackground() {
  const reduced = usePrefersReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const sx = useSpring(mx, { stiffness: 60, damping: 22 });
  const sy = useSpring(my, { stiffness: 60, damping: 22 });

  const gridX = useTransform(sx, [0, 1], [18, -18]);
  const gridY = useTransform(sy, [0, 1], [12, -12]);
  const orbX = useTransform(sx, [0, 1], [-45, 45]);
  const orbY = useTransform(sy, [0, 1], [-35, 35]);

  useEffect(() => {
    if (reduced) return;
    function onMove(e: MouseEvent) {
      mx.set(e.clientX / window.innerWidth);
      my.set(e.clientY / window.innerHeight);
    }
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my, reduced]);

  return (
    <div ref={ref} aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        style={reduced ? undefined : { x: gridX, y: gridY }}
        className="grid-bg absolute -inset-24 opacity-70"
      />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_0%,transparent_5%,#0b0908_75%)]" />

      <motion.div
        style={reduced ? undefined : { x: orbX, y: orbY }}
        animate={reduced ? undefined : { scale: [1, 1.12, 1], opacity: [0.5, 0.75, 0.5] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-40 left-1/4 size-[36rem] rounded-full bg-amber-500/24 blur-[130px]"
      />
      <motion.div
        style={reduced ? undefined : { x: orbY, y: orbX }}
        animate={reduced ? undefined : { scale: [1.08, 1, 1.08], opacity: [0.45, 0.68, 0.45] }}
        transition={{ duration: 17, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute -right-24 top-16 size-[30rem] rounded-full bg-rose-500/20 blur-[130px]"
      />
      <motion.div
        animate={reduced ? undefined : { scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute bottom-0 left-8 size-[26rem] rounded-full bg-yellow-400/16 blur-[130px]"
      />

      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-bg to-transparent" />
    </div>
  );
}
