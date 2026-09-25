"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowUpRight,
  Command,
  CornerDownLeft,
  FileText,
  Mail,
  Eye,
  Search,
} from "lucide-react";
import { navLinks, site } from "@/data/site";
import { GithubIcon, LinkedinIcon } from "./ui/BrandIcons";
import { cn } from "@/lib/utils";
import { openResume } from "@/lib/resume";

type Item = {
  id: string;
  label: string;
  hint: string;
  icon: React.ComponentType<{ className?: string }>;
  run: () => void;
  group: "Navigate" | "Links";
};

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [index, setIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
    setIndex(0);
  }, []);

  const items = useMemo<Item[]>(() => {
    const nav: Item[] = navLinks.map((l) => ({
      id: `nav-${l.href}`,
      label: l.label,
      hint: "Jump to section",
      icon: Search,
      group: "Navigate",
      run: () => {
        document.querySelector(l.href)?.scrollIntoView({ behavior: "smooth" });
        close();
      },
    }));

    const links: Item[] = [
      {
        id: "email",
        label: "Email Shivam",
        hint: site.email,
        icon: Mail,
        group: "Links",
        run: () => {
          window.location.href = `mailto:${site.email}`;
          close();
        },
      },
      {
        id: "github",
        label: "GitHub",
        hint: "See the code",
        icon: GithubIcon,
        group: "Links",
        run: () => {
          window.open(site.socials.github, "_blank", "noreferrer");
          close();
        },
      },
      {
        id: "linkedin",
        label: "LinkedIn",
        hint: "Connect",
        icon: LinkedinIcon,
        group: "Links",
        run: () => {
          window.open(site.socials.linkedin, "_blank", "noreferrer");
          close();
        },
      },
      {
        id: "resume-preview",
        label: "Review résumé",
        hint: "Read it without leaving",
        icon: Eye,
        group: "Links",
        run: () => {
          close();
          openResume();
        },
      },
      {
        id: "resume",
        label: "Download résumé",
        hint: "PDF",
        icon: FileText,
        group: "Links",
        run: () => {
          window.open(site.resumeHref, "_blank", "noreferrer");
          close();
        },
      },
    ];

    return [...nav, ...links];
  }, [close]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter(
      (i) => i.label.toLowerCase().includes(q) || i.hint.toLowerCase().includes(q),
    );
  }, [items, query]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
        return;
      }
      if (!open) return;
      if (e.key === "Escape") {
        e.preventDefault();
        close();
      }
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setIndex((i) => (i + 1) % Math.max(filtered.length, 1));
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setIndex((i) => (i - 1 + Math.max(filtered.length, 1)) % Math.max(filtered.length, 1));
      }
      if (e.key === "Enter") {
        e.preventDefault();
        filtered[index]?.run();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, filtered, index, close]);

  useEffect(() => {
    if (open) {
      const id = window.setTimeout(() => inputRef.current?.focus(), 30);
      document.body.style.overflow = "hidden";
      return () => {
        window.clearTimeout(id);
        document.body.style.overflow = "";
      };
    }
  }, [open]);

  let lastGroup = "";

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open command palette"
        className="hidden items-center gap-2 rounded-full border border-line bg-white/[0.03] px-3 py-1.5 text-xs text-muted transition-colors hover:border-line-strong hover:text-white md:inline-flex"
      >
        <Search className="size-3.5" />
        <span>Search</span>
        <kbd className="ml-1 flex items-center gap-0.5 rounded border border-line px-1.5 py-0.5 font-mono text-[10px] text-muted-2">
          <Command className="size-2.5" />K
        </kbd>
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-100 flex items-start justify-center px-4 pt-[14vh]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
          >
            <div
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={close}
              aria-hidden
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Command palette"
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="glass relative w-full max-w-lg overflow-hidden rounded-2xl border border-line-strong shadow-2xl shadow-black/60"
            >
              <div className="flex items-center gap-3 border-b border-line px-4">
                <Search className="size-4 shrink-0 text-muted-2" />
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setIndex(0);
                  }}
                  placeholder="Jump to a section, or open a link…"
                  className="w-full bg-transparent py-4 text-sm text-white outline-none placeholder:text-muted-3"
                />
                <kbd className="rounded border border-line px-1.5 py-0.5 font-mono text-[10px] text-muted-2">
                  ESC
                </kbd>
              </div>

              <div ref={listRef} className="max-h-80 overflow-y-auto p-2">
                {filtered.length === 0 ? (
                  <p className="px-3 py-8 text-center text-sm text-muted-3">No results.</p>
                ) : (
                  filtered.map((item, i) => {
                    const showGroup = item.group !== lastGroup;
                    lastGroup = item.group;
                    const Icon = item.icon;
                    return (
                      <div key={item.id}>
                        {showGroup ? (
                          <p className="px-3 pb-1 pt-3 font-mono text-[10px] uppercase tracking-widest text-muted-3">
                            {item.group}
                          </p>
                        ) : null}
                        <button
                          type="button"
                          onMouseEnter={() => setIndex(i)}
                          onClick={item.run}
                          className={cn(
                            "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left transition-colors",
                            i === index ? "bg-white/[0.07] text-white" : "text-muted",
                          )}
                        >
                          <Icon className="size-4 shrink-0" />
                          <span className="text-sm font-medium">{item.label}</span>
                          <span className="ml-auto truncate pl-3 text-xs text-muted-3">
                            {item.hint}
                          </span>
                          {i === index ? (
                            <CornerDownLeft className="size-3.5 shrink-0 text-muted-2" />
                          ) : (
                            <ArrowUpRight className="size-3.5 shrink-0 opacity-0" />
                          )}
                        </button>
                      </div>
                    );
                  })
                )}
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
