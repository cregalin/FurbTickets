import React from 'react';
import { Modal } from 'react-native';
import { StyledLoaderCard } from './card/styles';
import { StyledText } from '../texts/styles';

const LoaderCard = ({ loading }) => {
  return (
    <Modal visible={loading} animationType="fade" transparent={true}>
      <StyledLoaderCard>
        <StyledText>Enviando...</StyledText>
      </StyledLoaderCard>
    </Modal>
  );
};

export { LoaderCard };
