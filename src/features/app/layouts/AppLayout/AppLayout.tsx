import { Outlet } from "@tanstack/react-router";

import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import * as S from "./AppLayout.styled";

const AppLayout = () => {
  return (
    <S.Container>
      <Header />

      <S.MainContainer>
        <Outlet />
      </S.MainContainer>

      <Footer />
    </S.Container>
  );
};

export { AppLayout };
