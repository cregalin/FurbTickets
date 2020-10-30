import React from "react";
import { ButtonContainer } from "./styles";
import { StyledText } from "../../texts/styles";
import { white } from "../../../theme/colors";

const SecondaryButton = (props) => {
  return (
    <ButtonContainer onPress={() => (props.onPress ? props.onPress() : null)}>
      <StyledText
        fontSize={14}
        textAlign={"center"}
        fontColor={white}
        fontWeight="bold"
      >
        {props.label}
      </StyledText>
    </ButtonContainer>
  );
};

export default SecondaryButton;
