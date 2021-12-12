import React from "react";
import Title from "../Title";
import * as S from "./styles";

const Header = () => {
  return (
    <S.Container data-testid="headerContainer">
      <Title size={1.1} content="ConversorMoedas!" />
    </S.Container>
  );
};

export default Header;
