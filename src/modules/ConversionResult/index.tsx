import React from "react";
import Input from "../../components/Input";
import SeparatorLine from "../../components/SeparatorLine";
import Title from "../../components/Title";
import { IConverterData } from "../../interfaces/converter";
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

    return `${day}/${month}/${year} ${hours}:${
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
              <Input
                key={data[item].code}
                label={data[item].name.replace(/^[^/]*[/]/, "")}
                disabled
                type="number"
                value={convertedValue.toFixed(2)}
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
