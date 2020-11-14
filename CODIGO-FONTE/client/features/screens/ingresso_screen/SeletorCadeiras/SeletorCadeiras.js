import React, { useState } from 'react';
import { Modal, View } from 'react-native';

import { StyledText } from '../../../components/texts/styles';
import { InModalContainer } from '../../buscar_screen/SpectacleListStyles';
import PrimaryButton from 'components/buttons/primary_button/PrimaryButton';
import SecondaryButton from 'components/buttons/secondary_button/SecondaryButton';
import Cadeira from './Cadeira';

const SeletorCadeiras = ({
  modalVisible,
  chairList,
  onSubmit,
  onCloseModal,
}) => {
  const [selectedChairs, setSelectedChairs] = useState([]);

  const onSelectChair = (chairId) => {
    setSelectedChairs([
      ...selectedChairs,
      {
        reference: chairId,
      },
    ]);
  };

  const onDeselectChair = (chairId) => {
    setSelectedChairs(
      selectedChairs.filter((chair) => chair.reference !== chairId)
    );
  };

  return (
    <Modal visible={modalVisible} transparent={true} animationType="slide">
      <View
        style={{
          width: '100%',
          height: '100%',
          justifyContent: 'flex-end',
          backgroundColor: 'rgba(0,0,0,0.75)',
        }}
      >
        <InModalContainer height="50%">
          <StyledText
            fontSize={18}
            fontColor="black"
            textAlign="center"
            marginBottom={10}
            textDecoration="underline"
          >
            Escolha suas cadeiras
          </StyledText>

          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-around',
            }}
          >
            {chairList.map((chair) => (
              <Cadeira
                status={chair.status}
                onSelect={onSelectChair}
                onDeselect={onDeselectChair}
                chairId={chair.reference}
                key={chair.reference}
              />
            ))}
          </View>

          <View
            style={{
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <PrimaryButton
              label="Salvar"
              width="90%"
              onPress={() => onSubmit(selectedChairs)}
            />
            <SecondaryButton
              label="Cancelar"
              width="90%"
              onPress={onCloseModal}
            />
          </View>
        </InModalContainer>
      </View>
    </Modal>
  );
};

export default SeletorCadeiras;
