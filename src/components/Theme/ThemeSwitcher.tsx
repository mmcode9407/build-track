﻿import { VisuallyHidden } from "@ariakit/react";

import { ThemeMode, useTheme } from "./ThemeProvider";
import * as S from "./ThemeSwitcher.styled";

export const ThemeSwitcher = () => {
  const { themeMode, toggleTheme } = useTheme();

  const buttonAriaLabel =
    themeMode === ThemeMode.DARK
      ? "Switch to light mode"
      : "Switch to dark mode";

  return (
    <S.Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      aria-label={buttonAriaLabel}
      data-theme={themeMode}>
      <S.SunIcon />

      <S.MoonIcon />

      <VisuallyHidden>Switch theme</VisuallyHidden>
    </S.Button>
  );
};
