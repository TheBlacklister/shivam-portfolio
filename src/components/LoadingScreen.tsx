"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export function LoadingScreen() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const id = window.setTimeout(() => setDone(true), 900);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <AnimatePresence>
      {!done ? (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-100 grid place-items-center bg-bg"
        >
          <div className="flex flex-col items-center gap-5">
            <motion.span
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="grid size-12 place-items-center rounded-xl bg-gradient-to-br from-amber-400 via-rose-400 to-yellow-300 font-display text-sm font-bold text-white"
            >
              SG
            </motion.span>
            <div className="h-px w-28 overflow-hidden bg-line">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                className="h-full w-full bg-gradient-to-r from-amber-400 to-yellow-300"
              />
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
