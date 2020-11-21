import React from 'react';
import { Image, View } from 'react-native';

import { StyledText } from '../../texts/styles';

import { TouchableOpacity } from 'react-native-gesture-handler';

const IconButton = ({ icon, label, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        height: 50,
        width: 90,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Image
        source={icon}
        style={{ width: 40, height: 30, resizeMode: 'contain' }}
      />
      <StyledText textAlign="center" fontWeight="bold">
        {label}
      </StyledText>
    </TouchableOpacity>
  );
};

export default IconButton;
