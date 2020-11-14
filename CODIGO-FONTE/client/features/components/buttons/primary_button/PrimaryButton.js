import React from 'react';
import { ButtonContainer } from './styles';
import { StyledText } from '../../texts/styles';
import { white } from '../../../theme/colors';

const PrimaryButton = ({ onPress, label, width }) => {
  return (
    <ButtonContainer width={width} onPress={onPress}>
      <StyledText fontSize={14} textAlign={'center'} fontColor={white}>
        {label}
      </StyledText>
    </ButtonContainer>
  );
};

export default PrimaryButton;
