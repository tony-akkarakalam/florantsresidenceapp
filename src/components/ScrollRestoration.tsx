"use client";

import { useLayoutEffect } from "react";

export function ScrollRestoration() {
  useLayoutEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // Only handle initial load without hash.
    // Avoid forcing scroll-top on mobile back/forward/unload.
    if (!window.location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
  }, []);

  return null;
}

