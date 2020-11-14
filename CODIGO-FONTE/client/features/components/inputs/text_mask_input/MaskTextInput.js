import { useLinkProps } from "@react-navigation/native";
import React from "react";

import { TextInputMask } from "react-native-masked-text";

import { InputContainer } from "./styles";

const StyledMaskTextInput = ({
  maskType,
  format,
  value,
  register,
  name,
  required,
  onChangeText,
  placeholder,
}) => {
  return (
    <InputContainer>
      <TextInputMask
        type={maskType}
        options={{ format: format ? format : "" }}
        value={value}
        ref={
          register
            ? register(name, {
                required: required ? required : false,
              })
            : null
        }
        onChangeText={onChangeText}
        placeholder={placeholder ? placeholder : ""}
      />
    </InputContainer>
  );
};

export default StyledMaskTextInput;
