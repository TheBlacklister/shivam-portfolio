"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Download, ExternalLink, X } from "lucide-react";
import { site } from "@/data/site";
import { RESUME_OPEN_EVENT } from "@/lib/resume";

export function ResumeViewer() {
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const onOpen = () => setOpen(true);
    window.addEventListener(RESUME_OPEN_EVENT, onOpen);
    return () => window.removeEventListener(RESUME_OPEN_EVENT, onOpen);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-100 flex flex-col p-4 sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={close} aria-hidden />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Résumé preview"
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="glass relative mx-auto flex h-full w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-line-strong shadow-2xl shadow-black/60"
          >
            <header className="flex shrink-0 items-center justify-between gap-3 border-b border-line px-5 py-3.5">
              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-white">{site.name} — Résumé</p>
                <p className="truncate text-xs text-muted-3">
                  Scan the QR at the bottom to come back here
                </p>
              </div>

              <div className="flex shrink-0 items-center gap-2">
                <a
                  href={site.resumeHref}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="hidden items-center gap-1.5 rounded-full border border-line px-3.5 py-2 text-xs text-muted transition-colors hover:border-line-strong hover:text-white sm:inline-flex"
                >
                  <ExternalLink className="size-3.5" />
                  New tab
                </a>
                <a
                  href={site.resumeHref}
                  download
                  className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-2 text-xs font-medium text-black transition-transform duration-300 hover:-translate-y-0.5"
                >
                  <Download className="size-3.5" />
                  Download
                </a>
                <button
                  type="button"
                  onClick={close}
                  aria-label="Close résumé preview"
                  className="grid size-8 place-items-center rounded-full border border-line text-muted-2 transition-colors hover:border-line-strong hover:text-white"
                >
                  <X className="size-4" />
                </button>
              </div>
            </header>

            <div className="min-h-0 flex-1 bg-zinc-900">
              {/* <object> falls back to its children wherever inline PDF viewing
                  is unsupported — notably iOS Safari. */}
              <object
                data={`${site.resumeHref}#view=FitH&toolbar=0&navpanes=0`}
                type="application/pdf"
                className="size-full"
                aria-label={`${site.name} résumé`}
              >
                <div className="flex h-full flex-col items-center justify-center gap-4 p-8 text-center">
                  <p className="text-sm text-muted">
                    Your browser can&apos;t display PDFs inline.
                  </p>
                  <a
                    href={site.resumeHref}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black"
                  >
                    <ExternalLink className="size-4" />
                    Open the résumé
                  </a>
                </div>
              </object>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
