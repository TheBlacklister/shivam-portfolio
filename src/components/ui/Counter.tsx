"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "motion/react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduced = usePrefersReducedMotion();
  const [value, setValue] = useState(0);

  const shouldAnimate = inView && !reduced;

  useEffect(() => {
    if (!shouldAnimate) return;
    const controls = animate(0, to, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [shouldAnimate, to]);

  // Reduced motion renders the final value straight away — no state involved.
  const display = reduced ? to : value;

  return (
    <span ref={ref} className="tabular-nums">
      {display}
      {suffix}
    </span>
  );
}
