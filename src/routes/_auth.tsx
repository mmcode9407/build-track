import { createFileRoute, Outlet } from "@tanstack/react-router";
import styled from "styled-components";

import { flexCenteredColumn, flexCenteredRow, paddingX, paddingY } from "@/styles/helpers";

export const Route = createFileRoute("/_auth")({
  component: () => <AuthLayout />,
});

const StyledMainContainer = styled.main`
  ${flexCenteredRow};
  ${paddingX("2xl")}
  ${paddingY("4xl")}

  margin: 0 auto;
  height: 100vh;
`;

const StyledContainer = styled.div`
  ${flexCenteredColumn};

  gap: ${({ theme }) => theme.gap["3xl"]};
`;

const AuthLayout = () => {
  return (
    <StyledMainContainer>
      <StyledContainer>
        <Outlet />
      </StyledContainer>
    </StyledMainContainer>
  );
};
