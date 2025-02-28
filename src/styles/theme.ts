import {
  borderConfig,
  breakpointConfig,
  colorConfig,
  fontSizeConfig,
  spacingConfig,
  zIndexConfig,
} from "@/styles/themeConfig";

export const theme = {
  fontSize: fontSizeConfig,
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
  colors: colorConfig,
  opacity: {
    hover: 0.9,
    secondaryHover: 0.8,
    none: 0,
  },
  padding: spacingConfig,
  margin: spacingConfig,
  gap: spacingConfig,
  breakpoints: breakpointConfig,
  borders: borderConfig,
  zIndex: zIndexConfig,
} as const;
