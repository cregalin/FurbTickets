import React, { useState } from "react";
import { View, Text, ScrollView, TextInput, StyleSheet, Button } from "react-native";
import * as S from './styles'
import StyledTextInput from "../../components/inputs/text_input/TextInput";
import PrimaryButton from "../../components/buttons/primary_button/PrimaryButton";
import { Container } from "../../components/containers/styles";
import { darkPurple, xanadu } from "../../theme/colors";
import { useNavigation } from "@react-navigation/native";
import { connect } from "react-redux";
import { Title } from "../../components/texts/styles";

const BuscarScreen = () => {

  const navigation = useNavigation();
  const [title, setTitle] = useState("");
  const [room, setRoom] = useState("");
  const [value, setValue] = useState("");
  const [description, setDescription] = useState("");
  const [day, setDay] = useState("");
  const [hour, setHour] = useState("");

  const searchSpectacles = () => {
    let params = {}
    if(title) params.title = title
    if(room) params.room = room
    if(value) params.value = value
    if(description) params.description = description
    if(day) params.day = day
    if(hour) params.hour = hour
    navigation.navigate("Lista", params)
  }

  return (
    <Container>
      <Title>Busque espetáculos.</Title>
      <S.GridContainer>
        <S.Label>Titulo</S.Label>
        <StyledTextInput
        onChangeText={setTitle}/>
        <S.Label>Sala</S.Label>
        <StyledTextInput
        onChangeText={setRoom}/>
        <S.Label>Valor</S.Label>
        <StyledTextInput
        onChangeText={setValue}/>
        <S.Label>Descrição</S.Label>
        <StyledTextInput
        onChangeText={setDescription}/>
        <S.Label>Dia</S.Label>
        <StyledTextInput
        onChangeText={setDay}/>
        <S.Label>Hora</S.Label>
        <StyledTextInput
        onChangeText={setHour}/>
    </S.GridContainer>
      <PrimaryButton onPress={searchSpectacles} label="Buscar" />
    </Container>
  );
};


export default BuscarScreen;
