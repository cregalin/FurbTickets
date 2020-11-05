import React from "react";
import { Controller } from "react-hook-form";

import { InputComponent, InputContainer } from "./styles";

const StyledTextInput = (props) => {
  return (
    <InputContainer>
      <Controller
        as={InputComponent}
        control={props.control}
        name={props.name}
        rules={{ required: props.required ? props.required : false }}
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

export default StyledTextInput;
