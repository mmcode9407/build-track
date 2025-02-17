import { css } from "styled-components";

import type { theme } from "./theme";

const flexCenteredRow = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const flexCentredColumn = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const paddingX = (size: keyof typeof theme.padding) => css`
  padding-left: ${({ theme }) => theme.padding[size]};
  padding-right: ${({ theme }) => theme.padding[size]};
`;

const paddingY = (size: keyof typeof theme.padding) => css`
  padding-top: ${({ theme }) => theme.padding[size]};
  padding-bottom: ${({ theme }) => theme.padding[size]};
`;

const marginX = (size: keyof typeof theme.margin) => css`
  margin-left: ${({ theme }) => theme.margin[size]};
  margin-right: ${({ theme }) => theme.margin[size]};
`;

const marginY = (size: keyof typeof theme.margin) => css`
  margin-top: ${({ theme }) => theme.margin[size]};
  margin-bottom: ${({ theme }) => theme.margin[size]};
`;

export { flexCenteredRow, flexCentredColumn, marginX, marginY, paddingX, paddingY };
