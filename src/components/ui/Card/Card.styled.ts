import type { RuleSet } from "styled-components";
import styled, { css } from "styled-components";

type CardVariants = "primary";

type CardProps = {
  $variant?: CardVariants;
  $noBorder?: boolean;
  $maxWidth?: string;
};

type CardFooterProps = {
  $center?: boolean;
};

const cardStyles: Record<CardVariants, RuleSet<object>> = {
  primary: css`
    border-radius: ${({ theme }) => theme.borders["rounded-lg"]};
    border: 1px solid ${({ theme }) => theme.colors.border};
    color: ${({ theme }) => theme.colors.cardForeground};
  `,
};

export const Card = styled.div<CardProps>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.gap.lg};
  ${({ $variant = "primary" }) => cardStyles[$variant]}
  border: ${({ $noBorder }) => $noBorder && "none"};
  overflow: hidden;

  ${({ $maxWidth }) =>
    $maxWidth &&
    css`
      max-width: ${$maxWidth};
      width: 100%;
    `}
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.gap.sm};
  padding: ${({ theme }) => theme.padding["lg"]};
  padding-bottom: 0;
`;

export const CardContent = styled.div`
  padding: 0 ${({ theme }) => theme.padding["lg"]};
`;

export const CardFooter = styled.div<CardFooterProps>`
  display: flex;
  align-items: center;
  ${({ $center = false }) =>
    $center &&
    css`
      justify-content: center;
    `}
  width: 100%;
  padding: ${({ theme }) => theme.padding["lg"]};
  padding-top: 0;
`;
