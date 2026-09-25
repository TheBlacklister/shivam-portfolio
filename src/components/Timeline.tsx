"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { GraduationCap, Briefcase, Rocket, Sparkles } from "lucide-react";
import { timeline, type TimelineItem } from "@/data/timeline";
import { Section } from "./ui/Section";
import { CompanyLogo } from "./ui/CompanyLogo";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const icons: Record<TimelineItem["kind"], React.ComponentType<{ className?: string }>> = {
  education: GraduationCap,
  role: Briefcase,
  build: Rocket,
  future: Sparkles,
};

export function Timeline() {
  const ref = useRef<HTMLOListElement>(null);
  const reduced = usePrefersReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.8", "end 0.6"] });
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <Section
      id="timeline"
      eyebrow="Timeline"
      title={
        <>
          From circuits to <span className="text-gradient-accent">shipped products</span>.
        </>
      }
    >
      <ol ref={ref} className="relative ml-6 space-y-12 pl-12 sm:ml-8">
        <div aria-hidden className="absolute bottom-2 left-[13px] top-2 w-px bg-line">
          <motion.div
            style={reduced ? { height: "100%" } : { height }}
            className="w-full bg-gradient-to-b from-amber-400 via-rose-400 to-yellow-300"
          />
        </div>

        {timeline.map((t, i) => {
          const Icon = icons[t.kind];
          const isFuture = t.kind === "future";
          return (
            <motion.li
              key={t.title}
              initial={reduced ? undefined : { opacity: 0, x: -16 }}
              whileInView={reduced ? undefined : { opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-70px" }}
              transition={{ duration: 0.6, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
              className="group relative"
            >
              {t.logoKey ? (
                <span className="absolute -left-[61px] top-0 rounded-2xl bg-bg p-1">
                  <CompanyLogo company={t.logoKey} size="sm" />
                </span>
              ) : (
                <span
                  className={[
                    "absolute -left-[49px] top-0 grid size-7 place-items-center rounded-full border transition-all duration-500",
                    isFuture
                      ? "border-amber-400/50 bg-amber-400/10 text-amber-200"
                      : "border-line bg-bg text-muted-2 group-hover:border-line-strong group-hover:text-white",
                  ].join(" ")}
                >
                  <Icon className="size-3.5" />
                </span>
              )}

              <p className="font-mono text-xs text-muted-3">{t.year}</p>
              <h3 className="mt-1.5 font-display text-lg font-semibold text-white">{t.title}</h3>
              <p className="mt-0.5 text-sm text-amber-400/80">{t.org}</p>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-2">{t.body}</p>
            </motion.li>
          );
        })}
      </ol>
    </Section>
  );
}
