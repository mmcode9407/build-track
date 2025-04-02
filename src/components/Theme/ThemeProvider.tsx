import React, { createContext, useContext, useEffect, useState } from "react";
import { ThemeProvider as BaseThemeProvider } from "styled-components";

import { baseTheme } from "@/styles/theme";
import { darkColorsConfig, lightColorsConfig } from "@/styles/themeConfig";

export enum ThemeMode {
  LIGHT = "light",
  DARK = "dark",
}

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
      return storedTheme === ThemeMode.DARK ? ThemeMode.DARK : ThemeMode.LIGHT;
    }

    const systemPreference = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    return systemPreference ? ThemeMode.DARK : ThemeMode.LIGHT;
  }

  return ThemeMode.LIGHT;
};

export const ThemeProvider = ({ children }: themeProviderProps) => {
  const [themeMode, setThemeMode] = useState<ThemeMode>(getPreferredTheme);

  const toggleTheme = () => {
    const newTheme =
      themeMode === ThemeMode.DARK ? ThemeMode.LIGHT : ThemeMode.DARK;

    setThemeMode(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    const themeQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e: MediaQueryListEvent) => {
      const newTheme = e.matches ? ThemeMode.DARK : ThemeMode.LIGHT;

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
    colors:
      themeMode === ThemeMode.LIGHT ? lightColorsConfig : darkColorsConfig,
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
