import React from "react";
import Input from "../../components/Input";
import SeparatorLine from "../../components/SeparatorLine";
import Title from "../../components/Title";
import { IConverterData } from "../../interfaces/converter";
import NumberFormat from "react-number-format";
import * as S from "./styles";

interface IConversionResultProps {
  data: IConverterData;
  value: string;
}

const ConversionResult = ({ data, value }: IConversionResultProps) => {
  const getActualDate = () => {
    const date = new Date();
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    return `${day}/${month}/${year} ${hours < 10 ? "0" + hours : hours}:${
      minutes < 10 ? "0" + minutes : minutes
    }`;
  };

  return (
    <S.Container>
      <Title
        size={1}
        variant="h3"
        content="Resultado da Conversão - Cotação do dia"
      />

      <S.Form>
        <Input label="Data da Consulta" value={getActualDate()} disabled />

        {Object.keys(data).map((item) => {
          const numberBid = Number(data[item].bid);
          const numberValue = value.replaceAll(".", "").replace(",", ".");
          const convertedValue = numberBid * Number(numberValue);

          return (
            <>
              <NumberFormat
                key={data[item].code}
                decimalSeparator=","
                thousandSeparator="."
                decimalScale={2}
                fixedDecimalScale
                customInput={Input}
                label={data[item].name.replace(/^[^/]*[/]/, "")}
                value={convertedValue}
                disabled
              />
            </>
          );
        })}
      </S.Form>

      <SeparatorLine />
    </S.Container>
  );
};

export default ConversionResult;
