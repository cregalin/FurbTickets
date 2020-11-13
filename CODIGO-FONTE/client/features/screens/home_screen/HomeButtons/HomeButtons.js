import React from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Anchor from '../../../components/buttons/anchor/Anchor';

const HomeButtons = ({ onPressRemove, onPressAdd }) => {
  return (
    <View
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-between',
      }}
    >
      <TouchableOpacity>
        <Anchor label="Adicionar espetáculo" onPress={onPressAdd} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Anchor label="Remover espetáculo" onPress={onPressRemove} />
      </TouchableOpacity>
    </View>
  );
};

export default HomeButtons;
