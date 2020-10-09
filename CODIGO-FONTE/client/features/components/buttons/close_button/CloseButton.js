import React from "react";
import { ButtonContainer } from "./styles";
import { StyledText } from "../../texts/styles";
import { electricPurple } from "../../../theme/colors";

const CloseButton = (props) => {
  return (
    <ButtonContainer onPress={() => props.onPress()}>
      <StyledText fontSize={20} fontColor={electricPurple} fontWeight="bold">
        x
      </StyledText>
    </ButtonContainer>
  );
};

export default CloseButton;
