import React, { useState } from 'react';
import { Image } from 'react-native';
import {
  chair_taken,
  chair_available,
  chair_reserved,
  chair_selected,
} from 'assets/images';

import { TouchableOpacity } from 'react-native-gesture-handler';

const Cadeira = ({ status = 'livre', chairId, onSelect, onDeselect }) => {
  const [chairStatus, setStatus] = useState(status);

  const onPress = () => {
    if (chairStatus === 'livre') {
      onSelect(chairId);
      setStatus('selecionado');
    } else if (chairStatus === 'selecionado') {
      onDeselect(chairId);
      setStatus('livre');
    }
  };

  let image;

  switch (chairStatus) {
    case 'livre':
      image = chair_available;
      break;
    case 'ocupada':
      image = chair_taken;
      break;
    case 'inativa':
      image = chair_reserved;
      break;
    case 'selecionado':
      image = chair_selected;
      break;
    default:
      image = chair_reserved;
      break;
  }

  return (
    <TouchableOpacity style={{ width: 40, height: 40 }} onPress={onPress}>
      <Image
        style={{ width: 40, height: 40, resizeMode: 'contain' }}
        source={image}
      />
    </TouchableOpacity>
  );
};

export default Cadeira;
