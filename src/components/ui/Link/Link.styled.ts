import { Link as RLink } from "@tanstack/react-router";
import type { Colors } from "styled-components";
import styled from "styled-components";

export const Link = styled(RLink)<{ $color?: keyof Colors; $small?: boolean }>`
  color: ${({ $color, theme }) =>
    $color ? theme.colors[$color] : theme.colors.mutedForeground};
  font-size: ${({ $small, theme }) => $small && theme.fontSize.xs};
  text-decoration: underline;
  text-decoration-color: transparent;
  transition: text-decoration 0.3s ease-in-out;

  &:hover {
    text-decoration-color: ${({ $color, theme }) =>
      $color ? theme.colors[$color] : theme.colors.mutedForeground};
  }
`;
