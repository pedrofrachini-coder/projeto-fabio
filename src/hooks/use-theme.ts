import { useCallback, useEffect, useState } from "react";

export type Theme = "light" | "dark";

const STORAGE_KEY = "phf-theme";

/** Lê o tema inicial: ?theme= na URL > preferência salva > sistema > claro */
function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "light";

  // Permite abrir o site já em um tema específico: ?theme=dark
  const fromUrl = new URLSearchParams(window.location.search).get("theme");
  if (fromUrl === "dark" || fromUrl === "light") return fromUrl;

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "light" || stored === "dark") return stored;

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

/** Gerencia o tema claro/escuro aplicando a classe `dark` no <html>. */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    root.style.colorScheme = theme;
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  }, []);

  return { theme, toggleTheme };
}
