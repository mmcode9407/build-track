import type { CSSProperties } from "react";
import type { RuleSet } from "styled-components";
import styled, { css } from "styled-components";

import {
  flexCenteredColumn,
  flexCenteredRow,
  paddingX,
  paddingY,
} from "@/styles/helpers";

type CardVariants = "primary";

type CardProps = {
  $variant?: CardVariants;
  $noBorder?: boolean;
  $width?: CSSProperties["width"];
};

type CardHeaderProps = {
  $vertical?: boolean;
};

type CardContentProps = {
  $width?: CSSProperties["width"];
};

type CardFooterProps = {
  $vertical?: boolean;
  $width?: CSSProperties["width"];
  $spaceBetween?: boolean;
};

const cardStyles: Record<CardVariants, RuleSet<object>> = {
  primary: css`
    border-radius: ${({ theme }) => theme.borders["rounded-lg"]};
    border: 1px solid ${({ theme }) => theme.colors.border};
    color: ${({ theme }) => theme.colors.cardForeground};
  `,
};

export const Card = styled.div<CardProps>`
  ${flexCenteredColumn};
  ${paddingX("3xl")};
  ${paddingY("3xl")};
  ${({ $variant = "primary" }) => cardStyles[$variant]}

  width: ${({ $width }) => $width || "100%"};
  gap: ${({ theme }) => theme.gap["3xl"]};
  border: ${({ $noBorder }) => $noBorder && "none"};
`;

export const CardHeader = styled.div<CardHeaderProps>`
  ${({ $vertical }) => ($vertical ? flexCenteredColumn : flexCenteredRow)}
`;

export const CardContent = styled.div<CardContentProps>`
  width: ${({ $width }) => $width || "100%"};
`;

export const CardFooter = styled.div<CardFooterProps>`
  display: flex;
  flex-direction: ${({ $vertical }) => $vertical && "column"};
  justify-content: ${({ $spaceBetween }) =>
    $spaceBetween ? "space-between" : "center"};
  width: ${({ $width }) => $width || "100%"};
`;
