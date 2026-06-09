"use client";

import { createContext, useContext, useEffect, useMemo, useSyncExternalStore } from "react";

type Theme = "light" | "dark";

type ThemeContextValue = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);
const listeners = new Set<() => void>();

function reflectTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
  listeners.forEach((listener) => listener());
}

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "light";

  const stored = window.localStorage.getItem("florants-theme");
  if (stored === "dark" || stored === "light") return stored;

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function getThemeSnapshot(): Theme {
  if (typeof document === "undefined") return "light";
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

function subscribeToTheme(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function applyTheme(theme: Theme) {
  reflectTheme(theme);
  window.localStorage.setItem("florants-theme", theme);
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useSyncExternalStore<Theme>(subscribeToTheme, getThemeSnapshot, () => "light");

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const syncStoredTheme = () => {
      const stored = window.localStorage.getItem("florants-theme");
      reflectTheme(stored === "dark" || stored === "light" ? stored : mediaQuery.matches ? "dark" : "light");
    };

    const syncSystemTheme = () => {
      const stored = window.localStorage.getItem("florants-theme");
      if (stored === "dark" || stored === "light") return;
      reflectTheme(mediaQuery.matches ? "dark" : "light");
    };

    window.addEventListener("storage", syncStoredTheme);
    mediaQuery.addEventListener("change", syncSystemTheme);

    return () => {
      window.removeEventListener("storage", syncStoredTheme);
      mediaQuery.removeEventListener("change", syncSystemTheme);
    };
  }, []);

  const value = useMemo<ThemeContextValue>(
    () => ({
      theme,
      toggleTheme: () => {
        applyTheme(theme === "dark" ? "light" : "dark");
      }
    }),
    [theme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const value = useContext(ThemeContext);
  if (!value) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }

  return value;
}
