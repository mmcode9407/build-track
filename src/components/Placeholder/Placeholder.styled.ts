import styled from "styled-components";

import { flexCenteredColumn } from "@/styles/helpers";

export const Container = styled.div`
  ${flexCenteredColumn};
  flex: 1;
  align-self: center;
  column-gap: ${({ theme }) => theme.gap.md};
  color: ${({ theme }) => theme.colors.primary};

  & > svg {
    width: 64px;
    height: 64px;
  }
`;
