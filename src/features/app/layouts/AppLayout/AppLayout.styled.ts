import styled from "styled-components";

import { flexCenteredColumn } from "@/styles/helpers";

export const Container = styled.div`
  ${flexCenteredColumn}

  gap: ${({ theme }) => theme.gap["7xl"]};
  max-width: 1120px;
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
`;

export const MainContainer = styled.main`
  flex-grow: 1;
  width: 100%;
`;
