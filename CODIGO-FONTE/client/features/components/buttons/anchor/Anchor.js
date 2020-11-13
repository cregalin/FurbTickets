import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StyledText } from '../../texts/styles';

const Anchor = ({ label, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <StyledText fontWeight="bold" textAlign="center" fontSize={16} fontColor="purple">
        {label}
      </StyledText>
    </TouchableOpacity>
  );
};

export default Anchor