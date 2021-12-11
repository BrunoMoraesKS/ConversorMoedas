import React, { useEffect } from "react";

import * as S from "./styles";
import SeparatorLine from "../../components/SeparatorLine";
import Title from "../../components/Title";
import Input from "../../components/Input";
import { IConverterData } from "../../interfaces/converter";

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

    return day + "/" + month + "/" + year + " " + hours + ":" + minutes;
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
          const numberValue = value.replace(".", "").replace(",", ".");
          const convertedValue = numberBid * Number(numberValue);

          return (
            <>
              <Input
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
