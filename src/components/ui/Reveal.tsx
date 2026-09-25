import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Scroll reveal via CSS scroll-timelines — no client JS, no hydration wait.
 *
 * This used to be a motion `whileInView` component, which server-rendered its
 * children at opacity:0 and only revealed them once React had hydrated and an
 * IntersectionObserver had fired. On a throttled phone that left below-the-fold
 * content blank for ~2.7s after it was already in the DOM.
 *
 * Now content is visible by default and the animation is layered on only where
 * `animation-timeline: view()` is supported.
 */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  /** Legacy seconds value from the motion API — mapped to a stagger step. */
  delay?: number;
  className?: string;
}) {
  const step = Math.min(4, Math.max(0, Math.round(delay / 0.07)));
  return (
    <div className={cn("reveal", step > 0 && `reveal-${step}`, className)}>{children}</div>
  );
}
