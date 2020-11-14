import React from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Anchor from 'components/buttons/anchor/Anchor';

const HomeButtons = ({ onPressRemove, onPressAdd, onPressSearch }) => {
  return (
    <View style={{ flexDirection: 'column', width: '100%', padding: 5 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Anchor label="Adicionar espetáculo" onPress={onPressAdd} />
        <Anchor label="Remover espetáculo" onPress={onPressRemove} />
      </View>
      <Anchor
        textAlign="left"
        label="Pesquisar espetáculo"
        onPress={onPressSearch}
      />
    </View>
  );
};

export default HomeButtons;
