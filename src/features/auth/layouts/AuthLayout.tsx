import { Outlet } from "@tanstack/react-router";

import { ThemeSwitcher } from "@/components/Theme/ThemeSwitcher";

import * as S from "./AuthLayout.styled";

const AuthLayout = () => {
  return (
    <S.MainContainer>
      <S.SwitcherContainer>
        <ThemeSwitcher />
      </S.SwitcherContainer>

      <S.Container>
        <Outlet />
      </S.Container>
    </S.MainContainer>
  );
};

export { AuthLayout };
