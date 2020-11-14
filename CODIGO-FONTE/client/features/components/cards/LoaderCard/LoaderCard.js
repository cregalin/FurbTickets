import React, { Fragment } from 'react';
import { Modal } from 'react-native';
import { StyledLoaderCard } from './card/styles';
import { StyledText } from '../../texts/styles';
import SecondaryButton from '../../buttons/secondary_button/SecondaryButton';

const LoaderCard = ({
  text = 'enviando',
  open,
  loading,
  error,
  onCloseModal,
}) => {
  return (
    <Modal visible={open} animationType="fade" transparent={true}>
      <StyledLoaderCard>
        {loading ? <StyledText>{text}</StyledText> : null}
        {error ? (
          <Fragment>
            <StyledText>Ocorreu um erro.</StyledText>
            <SecondaryButton label="Fechar" onPress={onCloseModal} />
          </Fragment>
        ) : null}
      </StyledLoaderCard>
    </Modal>
  );
};

export { LoaderCard };
