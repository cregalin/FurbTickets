import React, { useState } from "react";
import { connect } from "react-redux";
import StyledTextInput from "../../components/inputs/text_input/TextInput";
import { Container } from "../../components/containers/styles";
import { darkPurple, xanadu } from "../../theme/colors";
import PrimaryButton from "../../components/buttons/primary_button/PrimaryButton";
import SecondaryButton from "../../components/buttons/secondary_button/SecondaryButton";
import CloseButton from "../../components/buttons/close_button/CloseButton";
import { Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  StyledScrollView,
  ModalView,
  ModalContainer,
  ModalHeader,
} from "./styles";
import { StyledText } from "../../components/texts/styles";
import SessionCard from "../../components/session_card/SessionCard";

const CadastrarScreen = () => {
  const navigation = useNavigation();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [troupe, setTroupe] = useState("");
  const [price, setPrice] = useState("");
  const [modalVisible, setVisibility] = useState(false);
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
      <PrimaryButton label="Avançar" onPress={() => setVisibility(true)} />
      <Modal visible={modalVisible} transparent={true} animationType="slide">
        <ModalView background={"rgba(0,0,0,0.75)"}>
          <ModalContainer>
            <ModalHeader>
              <StyledText fontSize={24} fontWeight="bold">
                Sessões
              </StyledText>
              <CloseButton label="-" onPress={() => setVisibility(false)} />
            </ModalHeader>
            <StyledScrollView>
              <SessionCard />
              <SecondaryButton label="+" />
            </StyledScrollView>
          </ModalContainer>
        </ModalView>
      </Modal>
    </Container>
  );
};

export default CadastrarScreen;
