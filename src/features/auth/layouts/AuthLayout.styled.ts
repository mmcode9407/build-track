import styled from "styled-components";

import {
  flexCenteredColumn,
  flexCenteredRow,
  paddingX,
  paddingY,
} from "@/styles/helpers";

export const MainContainer = styled.main`
  ${flexCenteredRow};
  ${paddingX("2xl")}
  ${paddingY("4xl")}

  position: relative;
  margin: 0 auto;
  height: 100vh;
`;

export const Container = styled.div`
  ${flexCenteredColumn};

  gap: ${({ theme }) => theme.gap["3xl"]};
`;

export const SwitcherContainer = styled.div`
  position: absolute;
  top: 24px;
  right: 24px;
`;
