import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import styled from "styled-components";

import {
  flexCenteredColumn,
  flexCenteredRow,
  paddingX,
  paddingY,
} from "@/styles/helpers";
import { isAuthenticated } from "@/utils/isAuthenticated";

export const Route = createFileRoute("/_auth")({
  beforeLoad: async () => {
    const authenticated = await isAuthenticated();

    if (authenticated) {
      throw redirect({
        to: "/",
      });
    }
  },
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
