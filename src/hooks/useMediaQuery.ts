"use client";

import { useCallback, useSyncExternalStore } from "react";

/**
 * Hydration-safe media query subscription.
 * useSyncExternalStore is the right primitive here: the match is external
 * state, so there is no setState-in-effect and no cascading render.
 * The server snapshot is always `false`, so effects-off output matches SSR.
 */
export function useMediaQuery(query: string): boolean {
  const subscribe = useCallback(
    (onChange: () => void) => {
      const mq = window.matchMedia(query);
      mq.addEventListener("change", onChange);
      return () => mq.removeEventListener("change", onChange);
    },
    [query],
  );

  const getSnapshot = useCallback(() => window.matchMedia(query).matches, [query]);
  const getServerSnapshot = useCallback(() => false, []);

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
