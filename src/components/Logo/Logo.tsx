import { Link } from "@tanstack/react-router";

import { LogoIcon } from "@/assets/icons/LogoIcon";

import * as S from "./Logo.styled";

const Logo = () => {
  return (
    <S.LogoWrapper>
      <Link to="/">
        <LogoIcon />
      </Link>
    </S.LogoWrapper>
  );
};

export { Logo };
