import "styled-components";

declare module "styled-components" {
  interface Typography {
    fontSize: {
      xs: string;
      sm: string;
      base: string;
      lg: string;
      xl: string;
      "2xl": string;
      "3xl": string;
      "4xl": string;
    };
    fontWeight: {
      normal: string;
      semibold: string;
      bold: string;
    };
    lineHeight: {
      none: string;
      tight: string;
      normal: string;
      relaxed: string;
    };
  }

  interface Colors {
    background: string;
    foreground: string;
    primary: string;
    primaryForeground: string;
    secondary: string;
    secondaryForeground: string;
    border: string;
    input: string;
    muted: string;
    mutedForeground: string;
    accent: string;
    accentForeground: string;
    popover: string;
    popoverForeground: string;
    card: string;
    cardForeground: string;
    ring: string;
    info: string;
    warning: string;
    error: string;
    success: string;
  }

  interface Spacing {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    "2xl": string;
    "3xl": string;
    "4xl": string;
    "5xl": string;
    "6xl": string;
    "7xl": string;
  }

  interface Layout {
    breakpoints: {
      mobile: string;
      tablet: string;
      laptop: string;
      desktop: string;
    };
    borders: {
      "rounded-sm": string;
      rounded: string;
      "rounded-md": string;
      "rounded-lg": string;
      "rounded-xl": string;
      "rounded-2xl": string;
      "rounded-3xl": string;
      "rounded-full": string;
    };
    zIndex: {
      background: number;
      default: number;
      dropdown: number;
      modal: number;
      popover: number;
      tooltip: number;
    };
    opacity: {
      hover: number;
      secondaryHover: number;
      none: number;
    };
  }

  export interface DefaultTheme extends Typography {
    colors: Colors;
    padding: Spacing;
    margin: Spacing;
    gap: Spacing;
    breakpoints: Layout["breakpoints"];
    borders: Layout["borders"];
    zIndex: Layout["zIndex"];
    opacity: Layout["opacity"];
  }
}
