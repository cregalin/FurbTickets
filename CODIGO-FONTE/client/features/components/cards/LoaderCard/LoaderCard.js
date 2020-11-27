import React, { Fragment } from 'react';
import { Modal } from 'react-native';
import { StyledLoaderCard } from './card/styles';
import { StyledText } from '../../texts/styles';
import SecondaryButton from '../../buttons/secondary_button/SecondaryButton';
import { color } from 'react-native-reanimated';

const LoaderCard = ({
  text = 'Enviando...',
  open,
  loading,
  error,
  onCloseModal,
}) => {
  return (
    <Modal
      visible={open && loading | error}
      animationType="fade"
      transparent={true}
      style={{
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        flexDirection: 'column',
      }}
    >
      <StyledLoaderCard>
        {loading ? <StyledText>{text}</StyledText> : null}
        {error && (
          <Fragment>
            <StyledText>Ocorreu um erro.</StyledText>
            <SecondaryButton label="Fechar" onPress={onCloseModal} />
          </Fragment>
        )}
      </StyledLoaderCard>
    </Modal>
  );
};

export { LoaderCard };
