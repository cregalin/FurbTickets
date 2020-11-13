import React from 'react';
import { View } from 'react-native';
import Anchor from '../../../components/buttons/anchor/Anchor';

const ShowCardButtons = ({ onPressTicket, onPressDetails }) => {
  return (
    <View
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: 'gray',
        padding: 5
      }}
    >
      <View
        style={{
          width: '50%',
          borderRightWidth: 1,
          borderRightColor: 'gray',
          justifyContent: 'center',
        }}
      >
        <Anchor label="Ingresso" onPress={onPressTicket} />
      </View>
      <View style={{ width: '50%', justifyContent: 'center' }}>
        <Anchor label="Ver mais..." onPress={onPressDetails} />
      </View>
    </View>
  );
};

export default ShowCardButtons;
