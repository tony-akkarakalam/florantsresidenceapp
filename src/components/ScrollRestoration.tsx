"use client";

import { useEffect } from "react";

export function ScrollRestoration() {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    window.scrollTo({ top: 0, left: 0, behavior: "instant" });

    const resetScroll = () => {
      window.scrollTo(0, 0);
    };

    window.addEventListener("beforeunload", resetScroll);

    return () => {
      window.removeEventListener("beforeunload", resetScroll);
    };
  }, []);

  return null;
}
