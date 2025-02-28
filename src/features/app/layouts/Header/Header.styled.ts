import styled from "styled-components";

import { paddingX, paddingY } from "@/styles/helpers";

export const Header = styled.header`
  ${paddingY("xl")}
  ${paddingX("7xl")}

  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.gap.xl};
`;
