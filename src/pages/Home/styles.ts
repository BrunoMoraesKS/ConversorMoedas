import styled from "styled-components";
import { Colors } from "../../global/GlobalStyles";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WelcomeText = styled.p`
  font-size: 1.15rem;
  word-spacing: 0.1rem;
  line-height: 1.85rem;

  margin: 16px 0;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  max-width: 325px;

  margin-top: 24px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;

  margin-top: 32px;
`;

export const ButtonContainer = styled.div`
  display: flex;

  justify-content: flex-start;
  width: 100%;
  max-width: 325px;

  margin-top: 16px;
`;

export const Error = styled.span`
  color: ${Colors.tertiary};
`;
