"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { navLinks, site } from "@/data/site";
import { CommandPalette } from "./CommandPalette";
import { cn } from "@/lib/utils";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter((el): el is Element => Boolean(el));

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5] },
    );

    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-90 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
        scrolled ? "py-3" : "py-5",
      )}
    >
      <div className="mx-auto max-w-6xl px-6">
        <nav
          className={cn(
            "flex items-center justify-between rounded-full border px-4 py-2 transition-all duration-500",
            scrolled
              ? "glass border-line shadow-lg shadow-black/40"
              : "border-transparent bg-transparent",
          )}
        >
          <Link
            href="#top"
            className="flex items-center gap-2.5 pl-1 text-sm font-semibold tracking-tight"
          >
            <span className="grid size-7 place-items-center rounded-lg bg-gradient-to-br from-amber-400 via-rose-400 to-yellow-300 font-display text-[11px] font-bold text-white">
              SG
            </span>
            <span className="hidden text-base sm:inline">{site.name}</span>
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  "relative rounded-full px-3 py-1.5 text-sm transition-colors duration-300",
                  active === l.href ? "text-white" : "text-muted hover:text-white",
                )}
              >
                {active === l.href ? (
                  <motion.span
                    layoutId="nav-active"
                    aria-hidden
                    className="absolute inset-0 rounded-full bg-white/[0.07]"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                ) : null}
                <span className="relative">{l.label}</span>
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <CommandPalette />
            <a
              href={`mailto:${site.email}`}
              className="hidden rounded-full bg-white px-4 py-1.5 text-sm font-medium text-black transition-transform duration-300 hover:-translate-y-0.5 sm:inline-block"
            >
              Get in touch
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="grid size-9 place-items-center rounded-full border border-line text-white md:hidden"
            >
              {open ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mx-6 mt-2 md:hidden"
          >
            <div className="glass flex flex-col gap-1 rounded-2xl border border-line p-3">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm text-zinc-300 transition-colors hover:bg-white/[0.06] hover:text-white"
                >
                  {l.label}
                </Link>
              ))}
              <a
                href={`mailto:${site.email}`}
                className="mt-1 rounded-xl bg-white px-4 py-3 text-center text-sm font-medium text-black"
              >
                Get in touch
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
