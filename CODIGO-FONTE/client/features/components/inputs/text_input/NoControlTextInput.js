import React from 'react';

import { InputComponent, InputContainer } from './styles';

const NoControlTextInput = (props) => {
  return (
    <InputContainer>
      <InputComponent
        onChangeText={(text) => props.onChangeText && props.onChangeText(text)}
        placeholder={props.placeholder ? props.placeholder : ''}
        placeholderTextColor={
          props.placeholderColor ? props.placeholderColor : 'black'
        }
        keyboardType={props.keyboardType ? props.keyboardType : 'default'}
        editable={props.readOnly ? false : true}
        value={props.value ? props.value : null}
        onTouchStart={() => (props.onTouch ? props.onTouch() : null)}
      />
    </InputContainer>
  );
};

export default NoControlTextInput;
