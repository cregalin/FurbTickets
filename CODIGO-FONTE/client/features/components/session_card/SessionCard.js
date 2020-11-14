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
        Sessão {props.index + 1}
      </StyledText>
      <FieldContainer>
        <StyledText fontWeight="bold">Data:</StyledText>
        <StyledText fontColor={darkPurple}>{props.date}</StyledText>
      </FieldContainer>
      <FieldContainer>
        <StyledText fontWeight="bold">Hora:</StyledText>
        <StyledText fontColor={darkPurple}>{props.time}</StyledText>
      </FieldContainer>
      <SecondaryButton
        label="Remover"
        onPress={() => props.onPress(props.index)}
      />
    </CardContainer>
  );
};

export default SessionCard;
