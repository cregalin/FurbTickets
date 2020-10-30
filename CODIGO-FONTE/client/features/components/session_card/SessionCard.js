import React from "react";
import { CardContainer, FieldContainer } from "./styles";
import { StyledText } from "../../components/texts/styles";
import { darkPurple } from "../../theme/colors";
import SecondaryButton from "../buttons/secondary_button/SecondaryButton";

const SessionCard = (props) => {
  return (
    <CardContainer>
      <StyledText
        fontWeight="bold"
        textAlign="center"
        fontSize={20}
        fontColor={darkPurple}
      >
        Sessão 1
      </StyledText>
      <FieldContainer>
        <StyledText fontWeight="bold">Data:</StyledText>
        <StyledText fontColor={darkPurple}>02/10/2020</StyledText>
      </FieldContainer>
      <FieldContainer>
        <StyledText fontWeight="bold">Hora:</StyledText>
        <StyledText fontColor={darkPurple}>15:45</StyledText>
      </FieldContainer>
      <SecondaryButton label="Remover" />
    </CardContainer>
  );
};

export default SessionCard;
