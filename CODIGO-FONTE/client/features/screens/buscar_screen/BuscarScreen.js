import React, { Fragment, useState } from 'react';
import { Button } from 'react-native';
import { Label } from './styles';
import StyledMaskTextInput from 'components/inputs/text_mask_input/MaskTextInput';
import PrimaryButton from 'components/buttons/primary_button/PrimaryButton';
import { ScrollContainer, Container } from 'components/containers/styles';
import { useNavigation } from '@react-navigation/native';
import { Title } from 'components/texts/styles';
import { parseDateToPayload } from 'helpers';
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
    if (dateFrom) params.dateFrom = parseDateToPayload(dateFrom);
    if (dateTo) params.dateTo = parseDateToPayload(dateTo);
    if (timeFrom) params.timeFrom = timeFrom;
    if (timeTo) params.timeTo = timeTo;
    navigation.navigate('Lista', params);
  };

  return (
    <Fragment>
      <Container height="90%">
        <ScrollContainer>
          <Label>Título</Label>
          <NoControlTextInput
            placeholder="Titulo"
            name="title"
            onChangeText={(text) => setTitle(text)}
          />

          <Label>Descrição</Label>
          <NoControlTextInput
            placeholder="Descrição"
            name="description"
            onChangeText={(text) => setDescription(text)}
          />

          <Label>Trupe</Label>
          <NoControlTextInput
            placeholder="Trupe"
            name="troupe"
            onChangeText={(text) => setTroupe(text)}
          />

          <Label>De dia:</Label>
          <StyledMaskTextInput
            maskType="datetime"
            format="DD/MM/YYYY"
            value={dateFrom}
            onChangeText={(text) => setDateFrom(dateFrom)}
          />

          <Label>Até Dia</Label>
          <StyledMaskTextInput
            maskType="datetime"
            format="DD/MM/YYYY"
            value={dateTo}
            onChangeText={(text) => setDateTo(dateTo)}
          />

          <Label>Hora mínima:</Label>
          <StyledMaskTextInput
            maskType={'datetime'}
            format="HH:mm"
            value={timeFrom}
            onChangeText={(text) => setTimeFrom(timeFrom)}
          />

          <Label>Hora máxima:</Label>
          <StyledMaskTextInput
            maskType={'datetime'}
            format="HH:mm"
            value={timeTo}
            onChangeText={(text) => setTimeTo(timeTo)}
          />
        </ScrollContainer>
        <PrimaryButton onPress={searchSpectacles} label="Buscar" width="90%" />
      </Container>
    </Fragment>
  );
};

export default BuscarScreen;
