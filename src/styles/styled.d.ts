import "styled-components";

import type { DarkColorsType, LightColorsType } from "@/styles/themeConfig";

import type { baseTheme } from "./theme";

type DynamicColors = LightColorsType | DarkColorsType;

type ThemeType = typeof baseTheme & {
  colors: DynamicColors;
};

declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends ThemeType {}
}
