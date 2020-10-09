import React, { useState } from "react";
import { connect } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import StyledTextInput from "../../../components/inputs/text_input/TextInput";
import { Container } from "../../../components/containers/styles";
import { darkPurple } from "../../../theme/colors";
import PrimaryButton from "../../../components/buttons/primary_button/PrimaryButton";

const CadastroView = () => {
  const navigation = useNavigation();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [troupe, setTroupe] = useState("");
  const [price, setPrice] = useState("");
  const [sessions, setSessions] = useState([]);
  return (
    <Container justifyContent="flex-start">
      <StyledTextInput
        placeholder="Título..."
        placeholderColor={darkPurple}
        onChangeText={setTitle}
      />
      <StyledTextInput
        placeholder="Descrição..."
        placeholderColor={darkPurple}
        onChangeText={setDescription}
      />
      <StyledTextInput
        placeholder="Trupe..."
        placeholderColor={darkPurple}
        onChangeText={setTroupe}
      />
      <StyledTextInput
        placeholder="Preço..."
        placeholderColor={darkPurple}
        onChangeText={setPrice}
        keyboardType="numeric"
      />
      <PrimaryButton
        label="Avançar"
        onPress={() => navigation.navigate("Cadastro_AddSession")}
      />
    </Container>
  );
};

export { CadastroView };
