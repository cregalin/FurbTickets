import React from "react";

import { InputComponent, InputContainer } from "./styles";

const NoControlTextInput = (props) => {
  return (
    <InputContainer>
      <InputComponent
        onChangeText={(text) => props.onChangeText(text)}
        placeholder={props.placeholder ? props.placeholder : ""}
        placeholderTextColor={
          props.placeholderColor ? props.placeholderColor : "black"
        }
        keyboardType={props.keyboardType ? props.keyboardType : "default"}
      />
    </InputContainer>
  );
};

export default NoControlTextInput;
