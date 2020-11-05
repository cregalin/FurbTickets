import React, { useState } from "react";
import { Modal } from "react-native";
import { useForm } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";

import SecondaryButton from "../../../components/buttons/secondary_button/SecondaryButton";
import StyledMaskTextInput from "../../../components/inputs/text_mask_input/MaskTextInput";
import { StyledText } from "../../../components/texts/styles";
import { Container } from "../../../components/containers/styles";
import SessionCard from "../../../components/session_card/SessionCard";
import PrimaryButton from "../../../components/buttons/primary_button/PrimaryButton";

import { StyledScrollView, ModalContainer, InModalContainer } from "./styles";

const CadastroAddSession = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const [currentDate, setDate] = useState("");
  const [currentTime, setTime] = useState("");
  const [sessionAttributes, setSessionAttributes] = useState([]);

  const formProps = useForm({
    defaultValues: {
      date: "",
      time: "",
    },
  });

  const onSubmit = () => {
    setSessionAttributes([
      ...sessionAttributes,
      {
        date: currentDate,
        time: currentTime,
      },
    ]);
    setModalVisible(false);
    setDate("");
    setTime("");
  };

  const onDelete = (index) => {
    const newSessionAttributes = sessionAttributes.filter((item, itemIndex) => {
      return itemIndex !== index;
    });
    setSessionAttributes(newSessionAttributes);
  };

  return (
    <Container>
      <PrimaryButton label="Adicionar" onPress={() => setModalVisible(true)} />
      <PrimaryButton label="Avançar" />
      <StyledScrollView>
        {sessionAttributes.length > 0 ? (
          sessionAttributes.map((session, index) => (
            <SessionCard
              key={index}
              index={index}
              date={session.date}
              time={session.time}
              onPress={onDelete}
            />
          ))
        ) : (
          <StyledText textAlign="center">
            Ainda não existem sessões cadastradas para este espetáculo.
          </StyledText>
        )}
      </StyledScrollView>
      <Modal visible={modalVisible} animationType={"slide"} transparent={true}>
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
              onChangeText={(text) => setDate(text)}
              placeholder="Data..."
              value={currentDate}
            />
            <StyledMaskTextInput
              maskType={"datetime"}
              format="HH:mm"
              name="time"
              register={formProps.register}
              required={true}
              onChangeText={(text) => setTime(text)}
              placeholder="Hora..."
              value={currentTime}
            />
            <SecondaryButton label="Salvar" onPress={() => onSubmit()} />
            <SecondaryButton
              label="Voltar"
              onPress={() => setModalVisible(false)}
            />
          </InModalContainer>
        </ModalContainer>
      </Modal>
    </Container>
  );
};

export { CadastroAddSession };
