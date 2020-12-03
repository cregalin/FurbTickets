import React from 'react';
import {View } from 'react-native'
import {Title} from 'components/texts/styles'
import PrimaryButton from 'components/buttons/primary_button/PrimaryButton';
import { useNavigation } from '@react-navigation/native';

const CompraFinalizada = () => {
  const navigation = useNavigation();

  return (
    <View style={{display: "flex", justifyContent: "center", alignItems: "center", padding: 20}}>
      <Title>Compra Finalizada Com Sucesso</Title>
      <PrimaryButton
        label="Voltar para Home"
        width="80%"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  )

}

export default CompraFinalizada
