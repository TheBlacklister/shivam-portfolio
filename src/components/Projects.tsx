"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Lock } from "lucide-react";
import { projectFilters, projects, type Project } from "@/data/projects";
import { Section } from "./ui/Section";
import { SpotlightCard } from "./ui/SpotlightCard";
import { CompanyLogo } from "./ui/CompanyLogo";
import { GithubIcon } from "./ui/BrandIcons";
import { cn } from "@/lib/utils";

function StatusDot({ status }: { status: Project["status"] }) {
  const tone =
    status === "Live" || status === "In production"
      ? "bg-emerald-400"
      : status === "Concept"
        ? "bg-amber-400"
        : "bg-zinc-500";
  return (
    <span className="inline-flex items-center gap-1.5 text-[11px] text-muted-2">
      <span className={cn("size-1.5 rounded-full", tone)} />
      {status}
    </span>
  );
}

function ProjectCard({ p, index }: { p: Project; index: number }) {
  return (
    <SpotlightCard as="article" className="flex h-full flex-col">
      {/* Visual header — replace the gradient with a real screenshot when available */}
      <div className="relative h-44 overflow-hidden border-b border-line sm:h-52">
        <div className={cn("absolute inset-0 bg-gradient-to-br", p.accent)} />
        <div className="grid-bg absolute inset-0 opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
        <span className="absolute left-6 top-6 font-display text-6xl font-semibold text-white/[0.07] sm:text-7xl">
          {String(index + 1).padStart(2, "0")}
        </span>
        {p.logoKey ? (
          <span className="absolute right-6 top-6">
            <CompanyLogo company={p.logoKey} />
          </span>
        ) : null}
        <div className="absolute bottom-5 left-6 right-6 flex items-end justify-between gap-4">
          <div>
            <h3 className="font-display text-2xl font-semibold tracking-tight text-white">
              {p.title}
            </h3>
            <p className="mt-0.5 text-sm text-muted">{p.kicker}</p>
          </div>
          <span className="shrink-0 font-mono text-xs text-muted-2">{p.year}</span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <StatusDot status={p.status} />
        <p className="mt-4 text-sm leading-relaxed text-muted">{p.summary}</p>

        <dl className="mt-6 space-y-3 border-l border-line pl-4">
          <div>
            <dt className="font-mono text-[10px] uppercase tracking-widest text-muted-3">
              Challenge
            </dt>
            <dd className="mt-1 text-xs leading-relaxed text-muted-2">{p.challenge}</dd>
          </div>
          <div>
            <dt className="font-mono text-[10px] uppercase tracking-widest text-muted-3">
              Result
            </dt>
            <dd className="mt-1 text-xs leading-relaxed text-muted-2">{p.result}</dd>
          </div>
        </dl>

        <div className="mt-6 flex flex-wrap gap-1.5">
          {p.stack.map((s) => (
            <span
              key={s}
              className="rounded-md border border-line bg-white/[0.02] px-2 py-1 font-mono text-[10px] text-muted"
            >
              {s}
            </span>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted-3">
            Built with
          </span>
          {p.aiStack.map((s) => (
            <span key={s} className="text-[11px] text-amber-400/80">
              {s}
            </span>
          ))}
        </div>

        <div className="mt-7 flex items-center gap-2 border-t border-line pt-5">
          {p.liveUrl ? (
            <a
              href={p.liveUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="group/btn inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-medium text-black transition-transform duration-300 hover:-translate-y-0.5"
            >
              Live demo
              <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-line px-4 py-2 text-xs text-muted-3">
              <Lock className="size-3" />
              {p.status === "Concept" ? "Case study on request" : "Private client work"}
            </span>
          )}
          {p.repoUrl ? (
            <a
              href={p.repoUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1.5 rounded-full border border-line px-4 py-2 text-xs text-muted transition-colors hover:border-line-strong hover:text-white"
            >
              <GithubIcon className="size-3.5" />
              Code
            </a>
          ) : null}
        </div>
      </div>
    </SpotlightCard>
  );
}

export function Projects() {
  const [filter, setFilter] = useState<(typeof projectFilters)[number]>("All");

  const shown = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.tags.includes(filter))),
    [filter],
  );

  return (
    <Section
      id="work"
      eyebrow="Selected work"
      title={
        <>
          Four things I <span className="text-gradient-accent">built and shipped</span>.
        </>
      }
      lead="Each of these I owned end-to-end — the product decision, the architecture, the code, and the server it runs on."
    >
      <div className="mb-10 flex flex-wrap gap-2">
        {projectFilters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            className={cn(
              "relative rounded-full border px-4 py-1.5 text-xs font-medium transition-colors duration-300",
              filter === f
                ? "border-transparent text-black"
                : "border-line text-muted hover:border-line-strong hover:text-white",
            )}
          >
            {filter === f ? (
              <motion.span
                layoutId="project-filter"
                aria-hidden
                className="absolute inset-0 rounded-full bg-white"
                transition={{ type: "spring", stiffness: 400, damping: 34 }}
              />
            ) : null}
            {/* Label sits above the pill: a negative z-index would paint behind body's background. */}
            <span className="relative">{f}</span>
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-5 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {shown.map((p, i) => (
            <motion.div
              key={p.slug}
              layout
              initial={{ opacity: 0, scale: 0.97, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: -8 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1], delay: i * 0.05 }}
            >
              <ProjectCard p={p} index={projects.indexOf(p)} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}
