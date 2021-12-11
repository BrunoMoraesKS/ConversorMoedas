import React from "react";
import * as S from "./styles";
import Title from "../Title";

const Header = () => {
  return (
    <S.Container data-testid="headerContainer">
      <Title size={1.1} content="ConversorMoedas!" />
    </S.Container>
  );
};

export default Header;
