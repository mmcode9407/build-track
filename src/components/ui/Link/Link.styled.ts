import { Link as RLink } from "@tanstack/react-router";
import type { DefaultTheme } from "styled-components";
import styled, { css } from "styled-components";

import { paddingY } from "@/styles/helpers";

type LinkProps = {
  $color?: keyof DefaultTheme["colors"];
  $small?: boolean;
  $withIcon?: boolean;
};

export const Link = styled(RLink)<LinkProps>`
  ${paddingY("sm")};
  color: ${({ $color, theme }) =>
    $color ? theme.colors[$color] : theme.colors.mutedForeground};
  font-size: ${({ $small, theme }) => $small && theme.fontSize.xs};
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-color: transparent;
  transition: border-color 0.3s ease-in-out;

  &:hover {
    border-color: ${({ $color, theme }) =>
      $color ? theme.colors[$color] : theme.colors.mutedForeground};
  }

  ${({ $withIcon }) =>
    $withIcon &&
    css`
      display: inline-flex;
      align-items: center;
      gap: ${({ theme }) => theme.gap.sm};
      margin: 0 auto;

      & > svg {
        width: 16px;
        height: 16px;
      }
    `}
`;
