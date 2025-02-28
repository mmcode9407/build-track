import { css } from "styled-components";

import type { spacing } from "@/styles/theme";

type Size = keyof typeof spacing;

const flexCenteredRow = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const flexCenteredColumn = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const paddingX = (size: Size) => css`
  padding-left: ${({ theme }) => theme.padding[size]};
  padding-right: ${({ theme }) => theme.padding[size]};
`;

const paddingY = (size: Size) => css`
  padding-top: ${({ theme }) => theme.padding[size]};
  padding-bottom: ${({ theme }) => theme.padding[size]};
`;

const marginX = (size: Size) => css`
  margin-left: ${({ theme }) => theme.margin[size]};
  margin-right: ${({ theme }) => theme.margin[size]};
`;

const marginY = (size: Size) => css`
  margin-top: ${({ theme }) => theme.margin[size]};
  margin-bottom: ${({ theme }) => theme.margin[size]};
`;

export {
  flexCenteredColumn,
  flexCenteredRow,
  marginX,
  marginY,
  paddingX,
  paddingY,
};
