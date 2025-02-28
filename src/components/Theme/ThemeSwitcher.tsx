import { VisuallyHidden } from "@ariakit/react";

import { useTheme } from "./ThemeProvider";
import * as S from "./ThemeSwitcher.styled";

export const ThemeSwitcher = () => {
  const { themeMode, toggleTheme } = useTheme();

  return (
    <S.Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      aria-label={
        themeMode === "dark" ? "Switch to light mode" : "Switch to dark mode"
      }
      data-state={themeMode}>
      <S.SunIcon />

      <S.MoonIcon />

      <VisuallyHidden>Switch theme</VisuallyHidden>
    </S.Button>
  );
};
