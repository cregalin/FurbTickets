import React, { Fragment, useState } from 'react';
import { View } from 'react-native';

import { StyledText } from 'components/texts/styles';
import PrimaryButton from 'components/buttons/primary_button/PrimaryButton';
import Cadeira from './Cadeira';

const SeletorCadeiras = ({ chairList, onSubmit }) => {
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
    <Fragment>
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
      </View>
    </Fragment>
  );
};

export default SeletorCadeiras;
