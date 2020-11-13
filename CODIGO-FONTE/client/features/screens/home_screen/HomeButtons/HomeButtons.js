import React from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Anchor from 'components/buttons/anchor/Anchor';
import * as S from "./styles"

const HomeButtons = ({ onPressRemove, onPressAdd, onPressSearch }) => {
  return (
    <S.Container>
      <S.Wrapper>
        <Anchor label="Adicionar espetáculo" onPress={onPressAdd} />
      </S.Wrapper>
      <S.Wrapper>
        <Anchor label="Remover espetáculo" onPress={onPressRemove} />
      </S.Wrapper>
      <S.Wrapper>
        <Anchor label="Pesquisar espetáculo" onPress={onPressSearch} />
      </S.Wrapper>
    </S.Container>
  );
};

export default HomeButtons;
