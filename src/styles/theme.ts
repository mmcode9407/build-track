﻿export const spacing = {
  xs: "2px",
  sm: "4px",
  md: "8px",
  lg: "12px",
  xl: "16px",
  "2xl": "20px",
  "3xl": "24px",
  "4xl": "28px",
  "5xl": "32px",
  "6xl": "36px",
  "7xl": "40px",
} as const;

export const theme = {
  fontSize: {
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    lg: "1.25rem",
    xl: "1.5rem",
    "2xl": "2rem",
    "3xl": "3rem",
    "4xl": "4rem",
  },
  fontWeight: {
    normal: "400",
    semibold: "600",
    bold: "700",
  },
  lineHeight: {
    none: "1",
    tight: "1.25",
    normal: "1.5",
    relaxed: "1.75",
  },
  colors: {
    background: "#FFFFFF",
    foreground: "#18181B",
    primary: "#18181B",
    primaryForeground: "#FAFAFA",
    secondary: "#F4F4F5",
    secondaryForeground: "#18181B",
    border: "#E4E4E7",
    input: "#E4E4E7",
    muted: "#F4F4F5",
    mutedForeground: "#71717A",
    accent: "#F4F4F5",
    accentForeground: "#18181B",
    popover: "#FFFFFF",
    popoverForeground: "#18181B",
    card: "#FFFFFF",
    cardForeground: "#18181B",
    ring: "#D4D4D8",
    info: "#60A5FA",
    warning: "#FBBF24",
    error: "#F87171",
    success: "#34D399",
  },
  opacity: {
    hover: 0.9,
    secondaryHover: 0.8,
    none: 0,
  },
  padding: {
    ...spacing,
  },
  margin: {
    ...spacing,
  },
  gap: {
    ...spacing,
  },
  breakpoints: {
    mobile: "640px",
    tablet: "768px",
    laptop: "1024px",
    desktop: "1280px",
  },
  borders: {
    "rounded-sm": "2px",
    rounded: "4px",
    "rounded-md": "6px",
    "rounded-lg": "8px",
    "rounded-xl": "12px",
    "rounded-2xl": "16px",
    "rounded-3xl": "24px",
    "rounded-full": "9999px",
  },
  zIndex: {
    background: -1,
    default: 1,
    dropdown: 10,
    modal: 100,
    popover: 200,
    tooltip: 1000,
  },
} as const;
