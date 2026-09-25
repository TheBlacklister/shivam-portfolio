"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { experience } from "@/data/experience";
import { Section } from "./ui/Section";
import { CompanyLogo } from "./ui/CompanyLogo";
import { cn } from "@/lib/utils";

export function Experience() {
  const [open, setOpen] = useState(0);

  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title={
        <>
          Systems engineering, enterprise, and{" "}
          <span className="text-gradient-accent">startup delivery</span>.
        </>
      }
      lead="Four very different rooms. The common thread is being the person who finds the actual cause and then writes it down."
    >
      <div className="divide-y divide-line border-y border-line">
        {experience.map((role, i) => {
          const isOpen = open === i;
          return (
            <div key={role.company}>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? -1 : i)}
                aria-expanded={isOpen}
                className="group flex w-full items-start gap-6 py-7 text-left transition-colors"
              >
                <span className="hidden w-36 shrink-0 pt-1 font-mono text-xs text-muted-3 sm:block">
                  {role.period}
                </span>

                <CompanyLogo company={role.company} />

                <span className="min-w-0 flex-1">
                  <span className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span className="font-display text-xl font-semibold text-white transition-colors group-hover:text-amber-200 sm:text-2xl">
                      {role.company}
                    </span>
                    <span className="text-sm text-muted-2">{role.title}</span>
                  </span>
                  <span className="mt-1 block font-mono text-xs text-muted-3 sm:hidden">
                    {role.period}
                  </span>
                  <span className="mt-2.5 block max-w-2xl text-sm leading-relaxed text-muted-2">
                    {role.blurb}
                  </span>
                </span>

                <span
                  className={cn(
                    "mt-1 grid size-7 shrink-0 place-items-center rounded-full border border-line text-muted-2 transition-all duration-400",
                    isOpen ? "rotate-45 border-line-strong text-white" : "group-hover:text-white",
                  )}
                  aria-hidden
                >
                  <svg viewBox="0 0 12 12" className="size-3 fill-none stroke-current stroke-[1.5]">
                    <path d="M6 1v10M1 6h10" strokeLinecap="round" />
                  </svg>
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen ? (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pb-9 sm:pl-[16.5rem]">
                      <ul className="space-y-3.5">
                        {role.points.map((pt) => (
                          <li key={pt} className="flex gap-3 text-sm leading-relaxed text-muted">
                            <span
                              aria-hidden
                              className="mt-2 size-1 shrink-0 rounded-full bg-amber-400/70"
                            />
                            <span className="max-w-3xl">{pt}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6 flex flex-wrap gap-1.5">
                        {role.tags.map((t) => (
                          <span
                            key={t}
                            className="rounded-md border border-line bg-white/[0.02] px-2 py-1 font-mono text-[10px] text-muted-2"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
