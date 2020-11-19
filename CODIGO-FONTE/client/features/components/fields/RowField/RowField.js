import React from 'react';
import { View } from 'react-native';
import { StyledText } from '../../texts/styles';

const RowField = ({ label, value, marginBottom = 8 }) => {
  return (
    <View style={{ width: '100%', marginBottom: marginBottom }}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <StyledText fontColor="brown" fontSize={18} fontWeight="bold">
          {label}
        </StyledText>
        <StyledText fontWeight="bold" fontSize={18}>
          {value}
        </StyledText>
      </View>
    </View>
  );
};

export default RowField;
