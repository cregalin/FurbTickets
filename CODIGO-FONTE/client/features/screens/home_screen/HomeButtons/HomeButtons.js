import React from 'react';
import { View } from 'react-native';
import Anchor from 'components/buttons/anchor/Anchor';
import IconButton from '../../../components/buttons/icon_button/IconButton';
import {
  chair_available,
  search_icon,
  theater_icon,
  ticket_icon,
} from '../../../../assets/images';

const HomeButtons = ({
  onPressValidate,
  onPressAdd,
  onPressSearch,
  onPressAddRoom,
}) => {
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
        <IconButton
          icon={theater_icon}
          label="Espetáculo"
          onPress={onPressAdd}
        />
        <IconButton icon={search_icon} label="Buscar" onPress={onPressSearch} />
        <IconButton
          icon={chair_available}
          label="Sala"
          onPress={onPressAddRoom}
        />
        <IconButton
          icon={ticket_icon}
          label="Validar"
          onPress={onPressValidate}
        />
      </View>
    </View>
  );
};

export default HomeButtons;
