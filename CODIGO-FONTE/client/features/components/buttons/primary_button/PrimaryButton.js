import React from "react";
import { ButtonContainer } from "./styles";
import { StyledText } from "../../texts/styles";
import { white } from "../../../theme/colors";

const PrimaryButton = (props) => {
  return (
    <ButtonContainer onPress={props.onPress}>
      <StyledText fontSize={14} textAlign={"center"} fontColor={white}>
        {props.label}
      </StyledText>
    </ButtonContainer>
  );
};

export default PrimaryButton;
