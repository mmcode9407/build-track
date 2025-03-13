import type { RuleSet } from "styled-components";
import styled, { css } from "styled-components";

import { flexCenteredRow, paddingX, paddingY } from "@/styles/helpers";

import type { StatusType } from "./constants";

type ContainerProps = {
  $status: StatusType;
};

const statusColor: Record<StatusType, RuleSet<object>> = {
  PENDING: css`
    background-color: ${({ theme }) => `${theme.colors.warning}80`};
    color: ${({ theme }) => theme.colors.warning};
  `,
  IN_PROGRESS: css`
    background-color: ${({ theme }) => `${theme.colors.info}80`};
    color: ${({ theme }) => theme.colors.info};
  `,
  COMPLETED: css`
    background-color: ${({ theme }) => `${theme.colors.success}80`};
    color: ${({ theme }) => theme.colors.success};
  `,
};

export const Container = styled.div<ContainerProps>`
  ${flexCenteredRow};
  ${paddingX("md")};
  ${paddingY("md")};
  gap: ${({ theme }) => theme.gap.sm};
  border-radius: ${({ theme }) => theme.borders["rounded-full"]};
  ${({ $status }) => statusColor[$status]};
`;

export const StatusLabel = styled.p`
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
`;

export const IconBox = styled.span`
  display: block;
  width: 14px;
  height: 14px;

  & > svg {
    width: 100%;
    height: 100%;
  }
`;
