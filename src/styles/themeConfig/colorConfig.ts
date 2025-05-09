export const lightColorsConfig = {
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
} as const;

export const darkColorsConfig = {
  background: "#18181B",
  foreground: "#FAFAFA",
  primary: "#FAFAFA",
  primaryForeground: "#18181B",
  secondary: "#27272A",
  secondaryForeground: "#FAFAFA",
  border: "#3F3F46",
  input: "#3F3F46",
  muted: "#27272A",
  mutedForeground: "#A1A1AA",
  accent: "#27272A",
  accentForeground: "#FAFAFA",
  popover: "#18181B",
  popoverForeground: "#FAFAFA",
  card: "#1E1E22",
  cardForeground: "#FAFAFA",
  ring: "#52525B",
  info: "#3B82F6",
  warning: "#FBBF24",
  error: "#EF4444",
  success: "#10B981",
} as const;

export type LightColorsType = typeof lightColorsConfig;
export type DarkColorsType = typeof darkColorsConfig;
