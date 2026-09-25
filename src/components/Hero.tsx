"use client";

import { motion } from "motion/react";
import { ArrowDown, ArrowUpRight, Download, Eye, MapPin } from "lucide-react";
import { site } from "@/data/site";
import { metrics } from "@/data/skills";
import { HeroBackground } from "./HeroBackground";
import { GithubIcon, LinkedinIcon } from "./ui/BrandIcons";
import { Counter } from "./ui/Counter";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { openResume } from "@/lib/resume";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] as const } },
};

export function Hero() {
  const reduced = usePrefersReducedMotion();

  return (
    <section id="top" className="relative flex min-h-[100svh] items-center overflow-hidden pt-28">
      <HeroBackground />

      <div className="relative mx-auto w-full max-w-6xl px-6">
        <motion.div
          variants={container}
          initial={reduced ? undefined : "hidden"}
          animate={reduced ? undefined : "show"}
          className="max-w-4xl"
        >
          <motion.div variants={item} className="mb-8 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.04] px-3 py-1.5 text-xs text-zinc-300">
              <span className="relative flex size-1.5">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                <span className="relative inline-flex size-1.5 rounded-full bg-emerald-400" />
              </span>
              Open to AI product &amp; founding-engineer roles
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-muted-2">
              <MapPin className="size-3" />
              {site.location}
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="text-[clamp(3.25rem,10vw,8rem)] font-semibold leading-[0.92] tracking-[-0.045em]"
          >
            <span className="block text-gradient">Shivam</span>
            <span className="block text-gradient">Gupta</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 font-display text-[clamp(1.35rem,3.2vw,2.25rem)] font-semibold leading-tight tracking-[-0.02em]"
          >
            <span className="text-gradient-accent">AI Product Engineer</span>
            <span className="text-muted-3"> · </span>
            <span className="text-zinc-300">Full-Stack Developer</span>
          </motion.p>

          <motion.p
            variants={item}
            className="mt-7 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl"
          >
            {site.heroSub}
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_40px_-8px_rgba(255,255,255,0.4)]"
            >
              View projects
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <span className="inline-flex items-stretch overflow-hidden rounded-full border border-line bg-white/[0.03] transition-all duration-300 hover:border-line-strong">
              <button
                type="button"
                onClick={openResume}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/[0.07]"
              >
                <Eye className="size-4" />
                Review résumé
              </button>
              <a
                href={site.resumeHref}
                download
                aria-label="Download résumé"
                title="Download résumé"
                className="grid place-items-center border-l border-line px-4 text-muted transition-colors hover:bg-white/[0.07] hover:text-white"
              >
                <Download className="size-4" />
              </a>
            </span>
            <div className="flex items-center gap-1 pl-1">
              <a
                href={site.socials.github}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="GitHub"
                className="grid size-11 place-items-center rounded-full border border-line text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-line-strong hover:text-white"
              >
                <GithubIcon className="size-4" />
              </a>
              <a
                href={site.socials.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn"
                className="grid size-11 place-items-center rounded-full border border-line text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-line-strong hover:text-white"
              >
                <LinkedinIcon className="size-4" />
              </a>
            </div>
          </motion.div>

          <motion.dl
            variants={item}
            className="mt-20 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-4"
          >
            {metrics.map((m) => (
              <div key={m.label} className="bg-bg/90 px-5 py-6">
                <dt className="sr-only">{m.label}</dt>
                <dd>
                  <span className="font-display text-3xl font-semibold text-gradient-accent">
                    <Counter to={m.value} suffix={m.suffix} />
                  </span>
                  <p className="mt-2 text-xs leading-snug text-muted-2">{m.label}</p>
                </dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 text-muted-3 transition-colors hover:text-white lg:block"
      >
        <motion.span
          animate={reduced ? undefined : { y: [0, 7, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="block"
        >
          <ArrowDown className="size-4" />
        </motion.span>
      </motion.a>
    </section>
  );
}
