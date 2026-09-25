"use client";

import { useMediaQuery } from "./useMediaQuery";

/** True only on devices with a precise pointer — gates the custom cursor. */
export function useIsPointerFine(): boolean {
  return useMediaQuery("(pointer: fine)");
}
