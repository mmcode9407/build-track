import {
  borders,
  breakpoints,
  colors,
  fontSize,
  spacing,
  zIndex,
} from "@/styles/themeConfig";

export const theme = {
  fontSize: {
    ...fontSize,
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
    ...colors,
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
    ...breakpoints,
  },
  borders: {
    ...borders,
  },
  zIndex: {
    ...zIndex,
  },
} as const;
