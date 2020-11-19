import React from 'react';
import { View } from 'react-native';
import Anchor from 'components/buttons/anchor/Anchor';

const HomeButtons = ({ onPressRemove, onPressAdd, onPressSearch }) => {
  return (
    <View
      style={{
        flexDirection: 'column',
        width: '100%',
        padding: 5,
        backgroundColor: 'white',
        borderTopWidth: 1,
      }}
    >
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Anchor
          label="Adicionar espetáculo"
          onPress={onPressAdd}
          borderRightWidth={1}
        />
        {/* <Anchor label="Remover espetáculo" onPress={onPressRemove} /> */}
        <Anchor
          textAlign="left"
          label="Pesquisar espetáculo"
          onPress={onPressSearch}
        />
      </View>
    </View>
  );
};

export default HomeButtons;
