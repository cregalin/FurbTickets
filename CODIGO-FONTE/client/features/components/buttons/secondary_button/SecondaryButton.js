import React from 'react';
import { ButtonContainer } from './styles';
import { StyledText } from '../../texts/styles';
import { white } from '../../../theme/colors';

const SecondaryButton = ({ onPress, label, width }) => {
  return (
    <ButtonContainer width={width} onPress={() => (onPress ? onPress() : null)}>
      <StyledText
        fontSize={14}
        textAlign={'center'}
        fontColor={white}
        fontWeight="bold"
      >
        {label}
      </StyledText>
    </ButtonContainer>
  );
};

export default SecondaryButton;
