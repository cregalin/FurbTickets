import React, { useState } from "react";
import { Modal } from "react-native";
import { useForm } from "react-hook-form";
import { useNavigation, useRoute } from "@react-navigation/native";
import { TextInputMask } from "react-native-masked-text";

import SecondaryButton from "../../../components/buttons/secondary_button/SecondaryButton";
import StyledMaskTextInput from "../../../components/inputs/text_mask_input/MaskTextInput";
import CloseButton from "../../../components/buttons/close_button/CloseButton";
import { darkPurple } from "../../../theme/colors";
import { StyledText } from "../../../components/texts/styles";
import { Container } from "../../../components/containers/styles";
import SessionCard from "../../../components/session_card/SessionCard";
import PrimaryButton from "../../../components/buttons/primary_button/PrimaryButton";

import { StyledScrollView, ModalContainer, InModalContainer } from "./styles";

const CadastroAddSession = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const route = useRoute();

  const formProps = useForm({
    defaultValues: {
      date: "",
      time: "",
    },
  });

  const onSubmit = ({ date, time }) => {
    console.log(date);
    console.log(time);
    //POST
  };

  let currentDate = formProps.watch("date");
  let currentTime = formProps.watch("time");

  console.log("DATA: " + currentDate);
  console.log("HORA:" + currentTime);

  return (
    <Container>
      <PrimaryButton label="Adicionar" onPress={() => setModalVisible(true)} />
      <PrimaryButton label="Avançar" />
      <StyledScrollView>
        <SessionCard />
      </StyledScrollView>
      <Modal visible={modalVisible} animationType={"fade"} transparent={true}>
        <ModalContainer>
          <InModalContainer>
            <StyledText
              fontSize={22}
              textAlign={"center"}
              fontColor={"black"}
              fontWeight={"bold"}
              marginBottom={10}
            >
              Adicionar Sessão
            </StyledText>
            <StyledMaskTextInput
              maskType={"datetime"}
              format="DD/MM/YYYY"
              name="date"
              register={formProps.register}
              required={true}
              onChangeText={(text) => formProps.setValue("date", text)}
              placeholder="Data..."
              value={currentDate}
            />
            <StyledMaskTextInput
              maskType={"datetime"}
              format="HH:mm"
              name="time"
              register={formProps.register}
              required={true}
              onChangeText={(text) => formProps.setValue("time", text)}
              placeholder="Hora..."
              value={currentTime}
            />
            <SecondaryButton
              label="Salvar"
              onPress={() => formProps.handleSubmit(onSubmit)}
            />
          </InModalContainer>
        </ModalContainer>
      </Modal>
    </Container>
  );
};

export { CadastroAddSession };
