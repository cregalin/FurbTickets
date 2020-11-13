import React, { useState } from "react";
import { Button } from "react-native";
import * as S from './styles'
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import StyledMaskTextInput from "components/inputs/text_mask_input/MaskTextInput";
import PrimaryButton from "components/buttons/primary_button/PrimaryButton";
import { Container } from "components/containers/styles";
import { useNavigation } from "@react-navigation/native";
import { Title } from "components/texts/styles";
import StyledTextInput from "components/inputs/text_input/TextInput";

const BuscarScreen = () => {

  const [dateFrom, setDateFrom] = useState('')
  const [dateTo, setDateTo] = useState('')
  const [timeFrom, setTimeFrom] = useState('')
  const [timeTo, setTimeTo] = useState('')

  const formProps = useForm({
    defaultValues: {
      title: "",
      description: "",
      troupe: "",
    }
  })

  const searchSpectacles = ({
    title,
    description,
    troupe,
  }) => {
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
        <FormProvider {...formProps}>
          <S.Label>Título</S.Label>
          <StyledTextInput
            placeholder="Titulo"
            name="title"
            control={formProps.control}
            onChangeText={text => formProps.setValue(("title", text))}
          />
        <S.Label>Descrição</S.Label>
          <StyledTextInput
            placeholder="Descrição"
            name="description"
            control={formProps.control}
            onChangeText={text => formProps.setValue(("description", text))}
          />
        <S.Label>Trupe</S.Label>
          <StyledTextInput
            placeholder="Trupe"
            name="troupe"
            control={formProps.control}
            onChangeText={text => formProps.setValue(("troupe", text))}
          />
         </FormProvider>
      </S.GridContainer>
      <S.Label>De dia:</S.Label>
        <StyledMaskTextInput
          maskType="datetime"
          format="DD/MM/YYYY"
          value={dateFrom}
        onChangeText={text => formProps.setValue(("troupe", dateFrom))}/>

        <S.Label>Até Dia</S.Label>
        <StyledMaskTextInput
          maskType="datetime"
          format="DD/MM/YYYY"
          value={dateTo}
        onChangeText={text => formProps.setValue(("troupe", dateTo))}/>

        <S.Label>Hora mínima:</S.Label>
        <StyledMaskTextInput
          maskType={"datetime"}
          format="HH:mm"
          value={timeFrom}
        onChangeText={text => formProps.setValue(("troupe", timeFrom))}/>

        <S.Label>Hora máxima:</S.Label>
        <StyledMaskTextInput
          maskType={"datetime"}
          format="HH:mm"
          value={timeTo}
        onChangeText={text => formProps.setValue(("troupe", timeTo))}/>
      <PrimaryButton onPress={formProps.handleSubmit(onSubmit)} label="Buscar" />
    </Container>
  );
};


export default BuscarScreen;
