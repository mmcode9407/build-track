import React, { createContext, useContext, useEffect, useState } from "react";
import { ThemeProvider as BaseThemeProvider } from "styled-components";

import { baseTheme } from "@/styles/theme";
import { darkColorsConfig, lightColorsConfig } from "@/styles/themeConfig";

type ThemeMode = "light" | "dark";

type ThemeContextProps = {
  themeMode: ThemeMode;
  toggleTheme: () => void;
};

type themeProviderProps = {
  children: React.ReactNode;
};

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

const getPreferredTheme = (): ThemeMode => {
  if (typeof window !== "undefined") {
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme) {
      return storedTheme === "dark" ? "dark" : "light";
    }

    const systemPreference = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    return systemPreference ? "dark" : "light";
  }

  return "light";
};

export const ThemeProvider = ({ children }: themeProviderProps) => {
  const [themeMode, setThemeMode] = useState<ThemeMode>(getPreferredTheme);

  const toggleTheme = () => {
    const newTheme = themeMode === "dark" ? "light" : "dark";

    setThemeMode(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    const themeQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e: MediaQueryListEvent) => {
      const newTheme = e.matches ? "dark" : "light";

      setThemeMode(newTheme);
      localStorage.setItem("theme", newTheme);
    };

    themeQuery.addEventListener("change", handleChange);

    return () => {
      themeQuery.removeEventListener("change", handleChange);
    };
  }, []);

  const theme = {
    ...baseTheme,
    colors: themeMode === "light" ? lightColorsConfig : darkColorsConfig,
  };

  return (
    <ThemeContext.Provider value={{ themeMode, toggleTheme }}>
      <BaseThemeProvider theme={theme}>{children}</BaseThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProviderWrapper");
  }

  return context;
};
