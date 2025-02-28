import { Outlet } from "@tanstack/react-router";

import { Footer } from "../Footer/Footer";
import * as S from "./AppLayout.styled";

const AppLayout = () => {
  return (
    <S.Container>
      <S.MainContainer>
        <Outlet />
      </S.MainContainer>

      <Footer />
    </S.Container>
  );
};

export { AppLayout };
