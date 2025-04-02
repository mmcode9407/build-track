import type { CSSProperties } from "react";
import type { DefaultTheme } from "styled-components";
import styled, { css } from "styled-components";

type VariantStyle = {
  size: keyof DefaultTheme["fontSize"];
  weight: keyof DefaultTheme["fontWeight"];
  lineHeight: keyof DefaultTheme["lineHeight"];
  textTransform?: CSSProperties["textTransform"];
};

export type TypographyVariants =
  | "title-lg"
  | "title-md"
  | "title-sm"
  | "subtitle-lg"
  | "subtitle-sm"
  | "body-lg"
  | "body-sm"
  | "caption"
  | "caption-bold"
  | "overline";

type StyledTypographyProps = {
  $variant: TypographyVariants;
  $color?: keyof DefaultTheme["colors"];
  $align?: CSSProperties["textAlign"];
};

export const typographyStyles: Record<TypographyVariants, VariantStyle> = {
  "title-lg": { size: "3xl", weight: "bold", lineHeight: "tight" },
  "title-md": { size: "2xl", weight: "bold", lineHeight: "tight" },
  "title-sm": { size: "xl", weight: "bold", lineHeight: "normal" },
  "subtitle-lg": {
    size: "base",
    weight: "semibold",
    lineHeight: "normal",
  },
  "subtitle-sm": {
    size: "sm",
    weight: "semibold",
    lineHeight: "normal",
  },
  "body-lg": { size: "base", weight: "normal", lineHeight: "normal" },
  "body-sm": { size: "sm", weight: "normal", lineHeight: "normal" },
  caption: { size: "xs", weight: "normal", lineHeight: "normal" },
  "caption-bold": {
    size: "xs",
    weight: "bold",
    lineHeight: "normal",
  },
  overline: {
    size: "xs",
    weight: "bold",
    lineHeight: "normal",
    textTransform: "uppercase",
  },
};

const getTypographyStyles = (
  styles: typeof typographyStyles,
  $variant: TypographyVariants,
) => {
  const { size, weight, lineHeight, textTransform } = styles[$variant];

  return css`
    font-size: ${({ theme }) => theme.fontSize[size]};
    font-weight: ${({ theme }) => theme.fontWeight[weight]};
    line-height: ${({ theme }) => theme.lineHeight[lineHeight]};
    text-transform: ${textTransform || "none"};
  `;
};

export const StyledTypography = styled.p<StyledTypographyProps>`
  ${({ $variant }) => getTypographyStyles(typographyStyles, $variant)};
  color: ${({ theme, $color }) =>
    $color ? theme.colors[$color] : theme.colors.primary};
  ${({ $align }) =>
    $align &&
    css`
      text-align: ${$align};
    `}
`;

