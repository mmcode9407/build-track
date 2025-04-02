import { Logo } from "@/components/Logo/Logo";
import { ThemeSwitcher } from "@/components/Theme/ThemeSwitcher";
import { UserMenu } from "@/components/UserMenu/UserMenu";

import * as S from "./Header.styled";

const Header = () => {
  return (
    <S.Header>
      <Logo />

      <S.ActionsContainer>
        <ThemeSwitcher />

        <UserMenu />
      </S.ActionsContainer>
    </S.Header>
  );
};

export { Header };
