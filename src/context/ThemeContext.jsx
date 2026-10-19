import { createContext, useContext, useEffect, useMemo, useState } from "react";

const ThemeContext = createContext(null);

const STORAGE_KEY = "swiftmove_theme";

/* Read the saved theme safely; fall back to the system preference */
const loadTheme = () => {
  if (typeof window === "undefined") return "light";

  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);

    if (saved === "dark" || saved === "light") return saved;

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  } catch (err) {
    return "light";
  }
};

 export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(loadTheme);

  /* Keep the <html> class and localStorage in sync */
  useEffect(() => {
    if (typeof window === "undefined") return;

    const root = window.document.documentElement;

    root.classList.toggle("dark", theme === "dark");
    root.style.colorScheme = theme;

    try {
      window.localStorage.setItem(STORAGE_KEY, theme);
    } catch (err) {
      /* Storage blocked - theme still works for this session */
    }
  }, [theme]);

  /* If the user has not chosen yet, follow the OS setting live */
  useEffect(() => {
    if (typeof window === "undefined") return;

    let media;

    try {
      media = window.matchMedia("(prefers-color-scheme: dark)");
    } catch (err) {
      return;
    }

    const onChange = (e) => {
      /* Only follow the OS when the user has no saved preference */
      try {
        if (window.localStorage.getItem(STORAGE_KEY)) return;
      } catch (err) {
        /* ignore */
      }

      setTheme(e.matches ? "dark" : "light");
    };

    media.addEventListener?.("change", onChange);

    return () => media.removeEventListener?.("change", onChange);
  }, []);

  const toggle = () => {
    setTheme((t) => (t === "dark" ? "light" : "dark"));
  };

  const isDark = theme === "dark";

  const value = useMemo(() => ({ theme, isDark, toggle }), [theme, isDark]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

 export function useTheme() {
  const ctx = useContext(ThemeContext);

  if (!ctx) {
    throw new Error("useTheme must be used inside a <ThemeProvider>");
  }

  return ctx;
}
