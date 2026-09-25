"use client";

import { useCallback, useEffect, useRef } from "react";
import { motion, useMotionValue, useScroll, useTransform } from "motion/react";
import { workflow } from "@/data/workflow";
import { Section } from "./ui/Section";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

/** Accent ramp for the connector: amber → rose → gold. */
const RAMP = [
  [251, 146, 60],
  [244, 114, 182],
  [250, 204, 21],
] as const;

function rampColor(t: number): string {
  const clamped = Math.min(Math.max(t, 0), 1);
  const span = clamped * (RAMP.length - 1);
  const i = Math.min(Math.floor(span), RAMP.length - 2);
  const f = span - i;
  const [r, g, b] = RAMP[i].map((c, k) => Math.round(c + (RAMP[i + 1][k] - c) * f));
  return `rgb(${r} ${g} ${b})`;
}

/** Step block width and tile size, in px — the rail endpoints are derived from these. */
const STEP_W = 236;
const TILE = 64;

export function Workflow() {
  const reduced = usePrefersReducedMotion();
  const total = workflow.length;

  // Same treatment as the Timeline rail: a static track with a gradient fill
  // driven by scroll. But this rail is horizontal and wider than the viewport,
  // so vertical progress alone would stall the colour mid-track while the
  // reader scrolls sideways toward step 09. The fill follows whichever axis is
  // further along, and never retreats once drawn.
  const ref = useRef<HTMLDivElement>(null);
  const scroller = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.75"] });
  const hProgress = useMotionValue(0);
  const reached = useRef(0);

  const syncH = useCallback(() => {
    const el = scroller.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    hProgress.set(max > 0 ? el.scrollLeft / max : 1);
  }, [hProgress]);

  useEffect(() => {
    syncH();
    window.addEventListener("resize", syncH);
    return () => window.removeEventListener("resize", syncH);
  }, [syncH]);

  const width = useTransform([scrollYProgress, hProgress], ([v, h]: number[]) => {
    reached.current = Math.max(reached.current, v, h);
    return `${Math.min(reached.current, 1) * 100}%`;
  });

  // One unbroken line from the centre of tile 01 to the centre of tile 09.
  const railInset = { left: TILE / 2, right: STEP_W - TILE / 2 };

  return (
    <Section
      id="process"
      eyebrow="How I build"
      title={
        <>
          The loop that turns an idea into{" "}
          <span className="text-gradient-accent">something live</span>.
        </>
      }
      lead="AI compresses steps 05 through 07. It doesn't replace 01 through 04 — and that's the part most people skip."
    >
      <div ref={ref} className="relative">
        {/* edge fades signal that the track scrolls */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-20 w-10 bg-gradient-to-r from-bg to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-20 w-16 bg-gradient-to-l from-bg to-transparent"
        />

        <div
          ref={scroller}
          onScroll={syncH}
          className="-mx-6 overflow-x-auto px-6 pb-4 [scrollbar-width:thin]"
        >
          <ol
            className="relative flex snap-x snap-mandatory"
            style={{ width: STEP_W * total }}
          >
            {/* THE RAIL — one element spanning every step, so 01 → 09 is a single
                unbroken line with nothing interrupting it. Sits at the vertical
                centre of the number tiles; titles live below them, so the line
                never crosses text. Static track + scroll-driven fill, matching
                the Timeline rail. */}
            <span
              aria-hidden
              className="pointer-events-none absolute z-0 h-px bg-line"
              style={{ top: TILE / 2, left: railInset.left, right: railInset.right }}
            >
              <motion.span
                style={reduced ? { width: "100%" } : { width }}
                className="block h-full bg-gradient-to-r from-amber-400 via-rose-400 to-yellow-300"
              />
            </span>

            {workflow.map((w, i) => {
              const tone = rampColor(i / (total - 1));
              return (
                <li
                  key={w.step}
                  className="reveal relative z-10 snap-start pr-10"
                  style={{ width: STEP_W }}
                >
                  {/* number tile — opaque, so the rail passes cleanly behind it */}
                  <span
                    className="relative grid place-items-center rounded-2xl border bg-card font-mono text-sm text-muted transition-colors duration-500"
                    style={{
                      width: TILE,
                      height: TILE,
                      borderColor: `color-mix(in oklab, ${tone} 34%, transparent)`,
                    }}
                  >
                    {w.step}
                    <span
                      aria-hidden
                      className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500"
                      style={{ boxShadow: `0 0 26px -6px ${tone}` }}
                    />
                  </span>

                  <h3 className="mt-6 font-display text-lg font-semibold text-white">{w.title}</h3>
                  <p className="mt-2.5 pr-2 text-sm leading-relaxed text-muted-2">{w.body}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </Section>
  );
}
