import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import SecondaryButton from "../../../components/buttons/secondary_button/SecondaryButton";
import CloseButton from "../../../components/buttons/close_button/CloseButton";
import { darkPurple } from "../../../theme/colors";
import { StyledText } from "../../../components/texts/styles";
import { Container } from "../../../components/containers/styles";
import SessionCard from "../../../components/session_card/SessionCard";
import { StyledScrollView } from "./styles";
import PrimaryButton from "../../../components/buttons/primary_button/PrimaryButton";

const CadastroAddSession = () => {
  return (
    <Container>
      <PrimaryButton label="Adicionar" />
      <PrimaryButton label="Avançar" />
      <StyledScrollView>
        <SessionCard />
        <SessionCard />
        <SessionCard />
        <SessionCard />
        <SessionCard />
        <SessionCard />
        <SessionCard />
        <SessionCard />
        <SessionCard />
        <SessionCard />
      </StyledScrollView>
    </Container>
  );
};

export { CadastroAddSession };
