import React, { useState } from "react";
import { Button } from "react-native";
import * as S from './styles'
import StyledMaskTextInput from "../../components/inputs/text_mask_input/MaskTextInput";
import PrimaryButton from "../../components/buttons/primary_button/PrimaryButton";
import { Container } from "../../components/containers/styles";
import { useNavigation } from "@react-navigation/native";
import { Title } from "../../components/texts/styles";

const BuscarScreen = () => {

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [troupe, setTroupe] = useState("")
  const [dateFrom, setDateFrom] = useState("")
  const [dateTo, setDateTo] = useState("")
  const [timeFrom, setTimeFrom] = useState("")
  const [timeTo, setTimeTo] = useState("")

  const searchSpectacles = () => {
    let params = {}

    if(title) params.title = title
    if(description) params.description = description
    if(troupe) params.troupe = troupe
    if(dateFrom) params.dateFrom = dateFrom
    if(dateTo) params.dateTo = dateTo
    if(timeFrom) params.timeFrom = timeFrom
    if(timeTo) params.timeTo = timeTo

    navigation.navigate("Lista", params)
  }

  return (
    <Container>
      <Title>Busque espetáculos.</Title>
      <S.GridContainer>

        <S.Label>Titulo</S.Label>
        <S.InputComponent
          value={title}
        onChangeText={setTitle}/>

        <S.Label>Descrição</S.Label>
        <S.InputComponent
          value={description}
        onChangeText={setDescription}/>

        <S.Label>Trupe</S.Label>
        <S.InputComponent
          value={troupe}
        onChangeText={setTroupe}/>

        <S.Label>De dia:</S.Label>
        <StyledMaskTextInput
          maskType="datetime"
          format="DD/MM/YYYY"
          value={dateFrom}
        onChangeText={setDateFrom}/>

        <S.Label>Até Dia</S.Label>
        <StyledMaskTextInput
          maskType="datetime"
          format="DD/MM/YYYY"
          value={dateTo}
        onChangeText={setDateTo}/>

        <S.Label>Hora mínima:</S.Label>
        <StyledMaskTextInput
          maskType={"datetime"}
          format="HH:mm"
          value={timeFrom}
        onChangeText={setTimeFrom}/>

        <S.Label>Hora máxima:</S.Label>
        <StyledMaskTextInput
          maskType={"datetime"}
          format="HH:mm"
          value={timeTo}
        onChangeText={setTimeTo}/>

    </S.GridContainer>
      <PrimaryButton onPress={searchSpectacles} label="Buscar" />
    </Container>
  );
};


export default BuscarScreen;
