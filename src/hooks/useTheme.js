import { useCallback, useEffect, useState } from "react";

function getInitialTheme() {
  if (typeof window === "undefined") {
    return false;
  }

  const savedTheme = window.localStorage.getItem("theme");
  const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;

  return savedTheme === "light" || (!savedTheme && prefersLight);
}

export function useTheme() {
  const [isLight, setIsLight] = useState(getInitialTheme);

  useEffect(() => {
    document.body.classList.toggle("light-mode", isLight);
    window.localStorage.setItem("theme", isLight ? "light" : "dark");
  }, [isLight]);

  const toggleTheme = useCallback(() => {
    setIsLight((current) => !current);
  }, []);

  return { isLight, toggleTheme };
}
