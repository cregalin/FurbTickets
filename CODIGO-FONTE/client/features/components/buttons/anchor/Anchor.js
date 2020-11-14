import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StyledText } from '../../texts/styles';

const Anchor = ({ label, onPress, textAlign = "center" }) => {
  return (
    <TouchableOpacity style={{padding: 5}} onPress={onPress}>
      <StyledText fontWeight="bold" textAlign={textAlign} fontSize={16} fontColor="purple">
        {label}
      </StyledText>
    </TouchableOpacity>
  );
};

export default Anchor