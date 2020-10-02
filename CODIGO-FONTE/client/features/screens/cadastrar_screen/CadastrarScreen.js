import React from "react";
import { connect } from "react-redux";
import StyledTextInput from "../../components/inputs/text_input/TextInput";
import { Container } from "../../components/containers/styles";
import { darkPurple, xanadu } from "../../theme/colors";
import PrimaryButton from "../../components/buttons/primary_button/PrimaryButton";
import { useNavigation } from "@react-navigation/native";

const CadastrarScreen = () => {
  const navigation = useNavigation();
  return (
    <Container justifyContent="flex-start">
      <StyledTextInput
        placeholder="Título..."
        placeholderColor={darkPurple}
        onChangeText={() => {}}
      />
      <StyledTextInput
        placeholder="Descrição..."
        placeholderColor={darkPurple}
        onChangeText={() => {}}
      />
      <StyledTextInput
        placeholder="Trupe..."
        placeholderColor={darkPurple}
        onChangeText={() => {}}
      />
      <StyledTextInput
        placeholder="Preço..."
        placeholderColor={darkPurple}
        onChangeText={() => {}}
        keyboardType="numeric"
      />
      <PrimaryButton
        label="Cadastrar"
        onPress={() => {
          navigation.navigate("Home");
        }}
      />
    </Container>
  );
  d;
};

export default CadastrarScreen;
