import { Button as AriaButton } from "@ariakit/react";
import type { RuleSet } from "styled-components";
import styled, { css } from "styled-components";

import { flexCenteredRow, paddingX, paddingY } from "../../../styles/helpers";

export type ButtonVariants =
  | "primary"
  | "secondary"
  | "outline"
  | "link"
  | "icon";
export type ButtonSizes = "sm" | "md" | "lg" | "icon";

const buttonStyles: Record<ButtonVariants, RuleSet<object>> = {
  primary: css`
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primaryForeground};

    &:hover {
      opacity: ${({ theme }) => theme.opacity.hover};
    }
  `,
  secondary: css`
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.secondaryForeground};

    &:hover {
      opacity: ${({ theme }) => theme.opacity.hover};
    }
  `,
  outline: css`
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.primary};
    border: 1px solid ${({ theme }) => theme.colors.input};

    &:hover {
      background-color: ${({ theme }) => theme.colors.accent};
      color: ${({ theme }) => theme.colors.accentForeground};
    }
  `,
  link: css`
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.primary};
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-color: transparent;

    &:hover {
      border-color: ${({ theme }) => theme.colors.primary};
    }
  `,
  icon: css`
    background-color: transparent;
    color: ${({ theme }) => theme.colors.mutedForeground};

    &:hover {
      opacity: ${({ theme }) => theme.opacity.secondaryHover};
    }
  `,
};

const buttonSize: Record<ButtonSizes, RuleSet<object>> = {
  sm: css`
    ${paddingX("md")};
    ${paddingY("sm")};
  `,
  md: css`
    ${paddingX("xl")};
    ${paddingY("md")};
  `,
  lg: css`
    ${paddingX("xl")};
    ${paddingY("lg")};
  `,
  icon: css`
    width: 100%;
    height: 100%;
    max-height: 40px;
    max-width: 40px;
  `,
};

type ButtonProps = {
  $variant: ButtonVariants;
  $size: ButtonSizes;
  $fullWidth: boolean;
};

export const Button = styled(AriaButton)<ButtonProps>`
  ${flexCenteredRow};

  ${({ $variant }) => buttonStyles[$variant]};
  ${({ $size }) => buttonSize[$size]};

  gap: ${({ theme }) => theme.gap.md};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  line-height: ${({ theme }) => theme.lineHeight.normal};
  border-radius: ${({ theme, $variant }) =>
    $variant !== "link" && theme.borders["rounded-md"]};
  transition:
    opacity 0.3s ease-in-out,
    background-color 0.3s ease-in-out,
    color 0.3s ease-in-out,
    border-color 0.3s ease-in-out;

  ${({ $fullWidth }) =>
    $fullWidth &&
    css`
      width: 100%;
    `}

  &:disabled {
    opacity: ${({ theme }) => theme.opacity.secondaryHover};
  }
`;
