import { Button as AriaButton } from "@ariakit/react";
import type { CSSProperties } from "react";
import type { DefaultTheme } from "styled-components";
import styled, { css } from "styled-components";

import { flexCenteredRow, paddingX, paddingY } from "../../../styles/helpers";

export type ButtonVariants =
  | "primary"
  | "secondary"
  | "outline"
  | "link"
  | "withIcon";
export type ButtonSizes = "sm" | "md" | "lg" | "icon";

const getButtonStyles = (variant: ButtonVariants, theme: DefaultTheme) => {
  switch (variant) {
    case "primary":
      return css`
        background: ${theme.colors.primary};
        color: ${theme.colors.primaryForeground};

        &:hover {
          opacity: ${theme.opacity.hover};
        }
      `;
    case "secondary":
      return css`
        background: ${theme.colors.secondary};
        color: ${theme.colors.secondaryForeground};

        &:hover {
          opacity: ${theme.opacity.hover};
        }
      `;
    case "outline":
      return css`
        background: ${theme.colors.background};
        color: ${theme.colors.primary};
        border: 1px solid ${theme.colors.input};

        &:hover {
          background-color: ${theme.colors.accent};
          color: ${theme.colors.accentForeground};
        }
      `;
    case "link":
      return css`
        background: ${theme.colors.background};
        color: ${theme.colors.primary};
        text-decoration: underline;
        text-decoration-color: transparent;

        &:hover {
          text-decoration-color: ${theme.colors.primary};
        }
      `;
    case "withIcon":
      return css`
        background: ${theme.colors.primary};
        color: ${theme.colors.primaryForeground};

        &:hover {
          opacity: ${theme.opacity.hover};
        }
      `;
    default:
      return css`
        background: ${theme.colors.primary};
        color: ${theme.colors.primaryForeground};

        &:hover {
          opacity: ${theme.opacity.hover};
        }
      `;
  }
};

const getButtonSize = (size: ButtonSizes) => {
  switch (size) {
    case "sm":
      return css`
        height: 40px;
        ${paddingX("md")};
        ${paddingY("sm")};
      `;
    case "md":
      return css`
        height: 48px;
        ${paddingX("xl")};
        ${paddingY("md")};
      `;
    case "lg":
      return css`
        height: 56px;
        ${paddingX("xl")};
        ${paddingY("lg")};
      `;
    case "icon":
      return css`
        height: 40px;
        width: 40px;
      `;
    default:
      return css`
        height: 48px;
        ${paddingX("xl")};
        ${paddingY("md")};
      `;
  }
};

type StyledButtonProps = {
  $variant: ButtonVariants;
  $size: ButtonSizes;
  $width?: CSSProperties["width"];
};

export const StyledButton = styled(AriaButton)<StyledButtonProps>`
  ${flexCenteredRow};

  ${({ theme, $variant }) => getButtonStyles($variant, theme)};
  ${({ $size }) => getButtonSize($size)};

  width: ${({ $width }) => $width};
  gap: ${({ theme }) => theme.gap.md};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  line-height: ${({ theme }) => theme.lineHeight.normal};
  border-radius: ${({ theme }) => theme.borders["rounded-md"]};
  transition:
    opacity 0.3s ease-in-out,
    text-decoration 0.3s ease-in-out,
    background-color 0.3s ease-in-out,
    color 0.3s ease-in-out;

  &:disabled {
    opacity: ${({ theme }) => theme.opacity.secondaryHover};
  }
`;
