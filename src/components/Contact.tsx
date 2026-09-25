"use client";

import { ArrowUpRight, Eye, Mail } from "lucide-react";
import { site } from "@/data/site";
import { GithubIcon, LinkedinIcon } from "./ui/BrandIcons";
import { openResume } from "@/lib/resume";
import { Reveal } from "./ui/Reveal";

const links = [
  { label: "Email", value: site.email, href: `mailto:${site.email}`, Icon: Mail, external: false },
  { label: "GitHub", value: "View the code", href: site.socials.github, Icon: GithubIcon, external: true },
  {
    label: "LinkedIn",
    value: "Let's connect",
    href: site.socials.linkedin,
    Icon: LinkedinIcon,
    external: true,
  },
  { label: "Résumé", value: "Read it here", href: site.resumeHref, Icon: Eye, external: true, preview: true },
];

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden px-6 py-32 sm:py-40">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="grid-bg absolute inset-0 opacity-40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(251,146,60,0.16),transparent_70%)]" />
        <div className="absolute inset-x-0 top-0 h-px hairline" />
      </div>

      <div className="relative mx-auto max-w-4xl text-center">
        <Reveal>
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
            Contact
          </span>
        </Reveal>

        <Reveal delay={0.06}>
          <h2 className="mt-6 text-[clamp(2.25rem,6vw,4.5rem)] font-semibold leading-[1.02] tracking-[-0.04em]">
            <span className="text-gradient">Let&apos;s build something</span>
            <br />
            <span className="text-gradient">worth shipping.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            I&apos;m looking for AI product engineering, startup engineering, or founding-engineer
            roles — and I take on selective freelance builds. If you have a product that needs to
            exist, I&apos;d like to hear about it.
          </p>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="mt-11 flex flex-wrap justify-center gap-3">
            <a
              href={`mailto:${site.email}`}
              className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_44px_-8px_rgba(255,255,255,0.45)]"
            >
              {site.email}
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-4">
            {links.map(({ label, value, href, Icon, external, preview }) => (
              <a
                key={label}
                href={href}
                target={external && !preview ? "_blank" : undefined}
                rel={external && !preview ? "noreferrer noopener" : undefined}
                onClick={
                  preview
                    ? (e) => {
                        e.preventDefault();
                        openResume();
                      }
                    : undefined
                }
                className="group bg-bg/90 px-5 py-6 text-left transition-colors duration-300 hover:bg-card"
              >
                <Icon className="size-4 text-muted-3 transition-colors group-hover:text-amber-400" />
                <p className="mt-3 font-mono text-[10px] uppercase tracking-widest text-muted-3">
                  {label}
                </p>
                <p className="mt-1 truncate text-xs text-muted transition-colors group-hover:text-white">
                  {value}
                </p>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
