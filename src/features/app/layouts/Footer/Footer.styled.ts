import { LucideHeart } from "lucide-react";
import styled from "styled-components";

import {
  flexCenteredColumn,
  flexCenteredRow,
  paddingX,
  paddingY,
} from "@/styles/helpers";

export const Footer = styled.footer`
  ${flexCenteredColumn};
  ${paddingY("xl")};
  ${paddingX("7xl")};

  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

export const Title = styled.div`
  ${flexCenteredRow};
  gap: ${({ theme }) => theme.gap.xs};
`;

export const HeartIcon = styled(LucideHeart)`
  width: 14px;
  height: 14px;
  color: ${({ theme }) => theme.colors.error};
  fill: ${({ theme }) => theme.colors.error};
`;
