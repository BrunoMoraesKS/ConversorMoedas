import React from "react";
import * as S from "./styles";

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  required?: boolean;
}

const Input = ({ label, required, ...props }: IInputProps) => {
  return (
    <S.Container>
      <S.Label>
        {label} {required && <S.LabelSpan>*</S.LabelSpan>}
      </S.Label>
      <S.Input {...props} />
    </S.Container>
  );
};

export default Input;
