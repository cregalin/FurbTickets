import React from "react";
import { InputContainer, InputComponent } from "./styles";

const StyledTextInput = (props) => {
  return (
    <InputContainer>
      <InputComponent
        placeholder={props.placeholder ? props.placeholder : ""}
        placeholderTextColor={
          props.placeholderColor ? props.placeholderColor : "gray"
        }
        onChangeText={props.onChangeText ? props.onChangeText : null}
        keyboardType={props.keyboardType ? props.keyboardType : "default"}
      />
    </InputContainer>
  );
};

export default StyledTextInput;
