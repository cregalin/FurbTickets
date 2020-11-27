import React from 'react';
import { CardContainer, FieldContainer } from './styles';
import { StyledText } from '../../components/texts/styles';
import { darkPurple } from '../../theme/colors';
import SecondaryButton from '../buttons/secondary_button/SecondaryButton';

const SessionCard = ({
  index,
  date,
  time,
  roomName,
  choosing,
  onPress,
  id,
}) => {
  return (
    <CardContainer>
      <StyledText
        fontWeight="bold"
        textAlign="center"
        fontSize={20}
        fontColor={darkPurple}
      >
        Sessão {index + 1}
      </StyledText>
      <FieldContainer>
        <StyledText fontWeight="bold">Data:</StyledText>
        <StyledText fontColor={darkPurple}>{date}</StyledText>
      </FieldContainer>
      <FieldContainer>
        <StyledText fontWeight="bold">Hora:</StyledText>
        <StyledText fontColor={darkPurple}>{time}</StyledText>
      </FieldContainer>
      <FieldContainer>
        <StyledText fontWeight="bold">Sala:</StyledText>
        <StyledText fontColor={darkPurple}>{roomName}</StyledText>
      </FieldContainer>
      {!choosing ? (
        <SecondaryButton label="Remover" onPress={() => onPress(index)} />
      ) : (
        <SecondaryButton label="Comprar" onPress={() => onPress(id)} />
      )}
    </CardContainer>
  );
};

export default SessionCard;
