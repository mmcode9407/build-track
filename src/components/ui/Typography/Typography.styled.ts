import type { CSSProperties } from "react";
import type { Colors, Typography } from "styled-components";
import styled, { css } from "styled-components";

type VariantStyle = {
  tag: keyof React.JSX.IntrinsicElements;
  size: keyof Typography["fontSize"];
  weight: keyof Typography["fontWeight"];
  lineHeight: keyof Typography["lineHeight"];
  textTransform?: CSSProperties["textTransform"];
};

export type TypographyVariants =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "subtitle-1"
  | "subtitle-2"
  | "body-1"
  | "body-2"
  | "caption"
  | "caption-bold"
  | "overline";

type StyledTypographyProps = {
  $variant: TypographyVariants;
  $color?: keyof Colors;
  $align?: CSSProperties["textAlign"];
};

export const typographyStyles: Record<TypographyVariants, VariantStyle> = {
  h1: { tag: "h1", size: "4xl", weight: "bold", lineHeight: "tight" },
  h2: { tag: "h2", size: "3xl", weight: "bold", lineHeight: "tight" },
  h3: { tag: "h3", size: "2xl", weight: "bold", lineHeight: "normal" },
  h4: { tag: "h4", size: "xl", weight: "bold", lineHeight: "normal" },
  h5: { tag: "h5", size: "lg", weight: "bold", lineHeight: "normal" },
  h6: { tag: "h6", size: "lg", weight: "bold", lineHeight: "tight" },
  "subtitle-1": { tag: "p", size: "base", weight: "semibold", lineHeight: "normal" },
  "subtitle-2": { tag: "p", size: "sm", weight: "semibold", lineHeight: "normal" },
  "body-1": { tag: "p", size: "base", weight: "normal", lineHeight: "normal" },
  "body-2": { tag: "p", size: "sm", weight: "normal", lineHeight: "normal" },
  caption: { tag: "span", size: "xs", weight: "normal", lineHeight: "normal" },
  "caption-bold": { tag: "span", size: "xs", weight: "bold", lineHeight: "normal" },
  overline: {
    tag: "span",
    size: "xs",
    weight: "bold",
    lineHeight: "normal",
    textTransform: "uppercase",
  },
};

const getTypographyStyles = (styles: typeof typographyStyles, $variant: TypographyVariants) => {
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
  color: ${({ theme, $color }) => ($color ? theme.colors[$color] : theme.colors.primary)};
  text-align: ${({ $align }) => $align && $align};
`;
