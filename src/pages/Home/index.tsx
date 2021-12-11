import React, { useState } from "react";
import axios from "axios";
import * as S from "./styles";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import LoadingScreen from "../../components/LoadingScreen";
import SeparatorLine from "../../components/SeparatorLine";
import Title from "../../components/Title";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Select from "../../components/Select";

const Home = () => {
  const [loading, setLoading] = useState(false);

  const valuesData = [
    {
      id: "BRL",
      name: "Real",
    },
    {
      id: "USD",
      name: "Dólar Americano",
    },
    {
      id: "EUR",
      name: "Euro",
    },
  ];

  return (
    <S.Container>
      <SeparatorLine />

      <Title size={2.1} variant="h2" content="Bem vindo ao ConversorMoedas!" />

      <S.WelcomeText>
        O aplicativo ConversorMoedas! permite que você converta valores em real,
        dólar e euro.
        <br />
        Aproveite! =D
      </S.WelcomeText>

      <SeparatorLine />

      <Title
        size={1}
        variant="h3"
        content="Informe o valor e a moeda para conversão"
      />

      <S.Form>
        <Input label="Valor" onChange={() => {}} />

        <Select label="Moeda" data={valuesData} onChange={() => {}} />

        <S.ButtonContainer>
          <Button variant="primary" onClick={() => {}}>
            Converter
          </Button>
        </S.ButtonContainer>
      </S.Form>

      <SeparatorLine />
    </S.Container>
  );
};

export default Home;
