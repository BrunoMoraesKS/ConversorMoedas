import React, { useEffect, useState } from "react";
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
import { AnyObject } from "yup/lib/types";
import NumberFormat from "react-number-format";
import { IConverterData } from "../../interfaces/converter";
import ConversionResult from "../../modules/ConversionResult";

const schema = yup.object().shape({
  value: yup.string().required("Digite o Valor."),
  currency: yup.string().required("Selecione a moeda."),
});

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [showResultModule, setShowResultModule] = useState(false);
  const [resultData, setResultData] = useState({} as IConverterData);

  const {
    handleSubmit,
    control,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: AnyObject) => {
    makeConverterRequest();
  };

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

  const makeConverterRequest = async () => {
    setLoading(true);

    const selectedCurrency = getValues("currency");

    let currencies: any[] = [];

    valuesData.map((item) => {
      if (item.id !== selectedCurrency) {
        currencies.push(item.id);
      }
    });

    const response = await axios.get<IConverterData>(
      `https://economia.awesomeapi.com.br/last/${selectedCurrency}-${currencies[0]},${selectedCurrency}-${currencies[1]}
      `
    );

    const data = response.data;

    setResultData(data);

    setShowResultModule(true);

    setLoading(false);
  };

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
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <NumberFormat
              decimalSeparator=","
              thousandSeparator="."
              decimalScale={2}
              fixedDecimalScale
              customInput={Input}
              allowNegative={false}
              id="value"
              placeholder="Digite o valor..."
              label="Valor"
              required={true}
              name="value"
              onChange={onChange}
            />
          )}
          name="value"
          defaultValue=""
        />

        <S.Error>{errors.value?.message ? errors.value?.message : ""}</S.Error>

        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Select
              id="currency"
              placeholder="Selecione a moeda..."
              label="Moeda"
              required={true}
              name="currency"
              onChange={onChange}
              data={valuesData}
            />
          )}
          name="currency"
          defaultValue=""
        />

        <S.Error>
          {errors.currency?.message ? errors.currency?.message : ""}
        </S.Error>

        <S.ButtonContainer>
          <Button variant="primary" onClick={handleSubmit(onSubmit)}>
            Converter
          </Button>
        </S.ButtonContainer>
      </S.Form>

      <SeparatorLine />

      {showResultModule && (
        <ConversionResult data={resultData} value={getValues("value")} />
      )}
    </S.Container>
  );
};

export default Home;
