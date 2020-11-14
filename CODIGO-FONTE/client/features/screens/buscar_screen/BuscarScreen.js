import React, { useState } from 'react';
import { Button } from 'react-native';
import * as S from './styles';
import StyledMaskTextInput from 'components/inputs/text_mask_input/MaskTextInput';
import PrimaryButton from 'components/buttons/primary_button/PrimaryButton';
import { Container } from 'components/containers/styles';
import { useNavigation } from '@react-navigation/native';
import { Title } from 'components/texts/styles';
import NoControlTextInput from 'components/inputs/text_input/NoControlTextInput';

const BuscarScreen = () => {
  const navigation = useNavigation();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [troupe, setTroupe] = useState('');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [timeFrom, setTimeFrom] = useState('');
  const [timeTo, setTimeTo] = useState('');

  const searchSpectacles = () => {
    let params = {};

    if (title) params.title = title;
    if (description) params.description = description;
    if (troupe) params.troupe = troupe;
    if (dateFrom) params.dateFrom = dateFrom;
    if (dateTo) params.dateTo = dateTo;
    if (timeFrom) params.timeFrom = timeFrom;
    if (timeTo) params.timeTo = timeTo;
    console.log(params);
    navigation.navigate('Lista', params);
  };

  return (
    <Container>
      <Title>Busque espetáculos.</Title>
      <S.GridContainer>
        <PrimaryButton onPress={searchSpectacles} label="Buscar" />
        <S.Label>Título</S.Label>
        <NoControlTextInput
          placeholder="Titulo"
          name="title"
          onChangeText={(text) => setTitle(text)}
        />

        <S.Label>Descrição</S.Label>
        <NoControlTextInput
          placeholder="Descrição"
          name="description"
          onChangeText={(text) => setDescription(text)}
        />

        <S.Label>Trupe</S.Label>
        <NoControlTextInput
          placeholder="Trupe"
          name="troupe"
          onChangeText={(text) => setTroupe(text)}
        />

        <S.Label>De dia:</S.Label>
        <StyledMaskTextInput
          maskType="datetime"
          format="DD/MM/YYYY"
          value={dateFrom}
          onChangeText={(text) => setDateFrom(dateFrom)}
        />

        <S.Label>Até Dia</S.Label>
        <StyledMaskTextInput
          maskType="datetime"
          format="DD/MM/YYYY"
          value={dateTo}
          onChangeText={(text) => setDateTo(dateTo)}
        />

        <S.Label>Hora mínima:</S.Label>
        <StyledMaskTextInput
          maskType={'datetime'}
          format="HH:mm"
          value={timeFrom}
          onChangeText={(text) => setTimeFrom(timeFrom)}
        />

        <S.Label>Hora máxima:</S.Label>
        <StyledMaskTextInput
          maskType={'datetime'}
          format="HH:mm"
          value={timeTo}
          onChangeText={(text) => setTimeTo(timeTo)}
        />
      </S.GridContainer>
    </Container>
  );
};

export default BuscarScreen;
