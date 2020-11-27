import React, { Fragment } from 'react';
import { Modal } from 'react-native';
import { StyledLoaderCard } from './card/styles';
import { StyledText } from '../../texts/styles';
import SecondaryButton from '../../buttons/secondary_button/SecondaryButton';
import { color } from 'react-native-reanimated';
import { ModalContainer } from '../../../screens/cadastrar_screen/Cadastro_AddSession/styles';

const LoaderCard = ({
  text = 'Enviando...',
  open,
  loading,
  error,
  onCloseModal,
}) => {
  return (
    <Modal
      visible={open && (loading || error)}
      animationType="slide"
      transparent={true}
      style={{
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        flexDirection: 'column',
      }}
    >
      <ModalContainer>
        <StyledLoaderCard>
          {loading ? <StyledText>{text}</StyledText> : null}
          {error && (
            <Fragment>
              <StyledText>Ocorreu um erro.</StyledText>
              <SecondaryButton label="Fechar" onPress={onCloseModal} />
            </Fragment>
          )}
        </StyledLoaderCard>
      </ModalContainer>
    </Modal>
  );
};

export { LoaderCard };
