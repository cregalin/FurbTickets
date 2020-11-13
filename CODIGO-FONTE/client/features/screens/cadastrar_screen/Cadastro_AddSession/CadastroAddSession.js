import React, { useState } from 'react';
import { Modal } from 'react-native';
import { useForm } from 'react-hook-form';
import { useNavigation, useRoute } from '@react-navigation/native';
import { putShowSessions } from '../../../../Api';
import { parseDateToPayload } from '../../../helpers/index';

import SecondaryButton from '../../../components/buttons/secondary_button/SecondaryButton';
import StyledMaskTextInput from '../../../components/inputs/text_mask_input/MaskTextInput';
import { StyledText } from '../../../components/texts/styles';
import { Container } from '../../../components/containers/styles';
import SessionCard from '../../../components/session_card/SessionCard';
import PrimaryButton from '../../../components/buttons/primary_button/PrimaryButton';
import { LoaderCard } from '../../../components/cards/LoaderCard/LoaderCard';

import { StyledScrollView, ModalContainer, InModalContainer } from './styles';

const CadastroAddSession = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const route = useRoute();
  const navigation = useNavigation();

  const { spectacleId } = route.params;

  const [open, setOpen] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const [currentDate, setDate] = useState('');
  const [currentTime, setTime] = useState('');
  const [sessionAttributes, setSessionAttributes] = useState([]);

  const formProps = useForm({
    defaultValues: {
      date: '',
      time: '',
    },
  });

  const onSave = async () => {
    setOpen(true);
    setLoading(true);
    const payloadSessions = sessionAttributes.map((session) => {
      return {
        time: session.time,
        date: parseDateToPayload(session.date),
      };
    });
    putShowSessions(payloadSessions, spectacleId)
      .then(() => {
        setLoading(false);
        navigation.navigate('Home');
      })
      .catch((error) => {
        setError(true);
        console.log(error);
      });
  };

  const onSubmit = () => {
    setSessionAttributes([
      ...sessionAttributes,
      {
        date: currentDate,
        time: currentTime,
      },
    ]);
    setModalVisible(false);
    setDate('');
    setTime('');
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
      <PrimaryButton label="Salvar" onPress={onSave} />
      <LoaderCard
        open={open}
        loading={loading}
        error={error}
        onCloseModal={() => setOpen(false)}
      />
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
      <Modal visible={modalVisible} animationType={'slide'} transparent={true}>
        <ModalContainer>
          <InModalContainer>
            <StyledText
              fontSize={22}
              textAlign={'center'}
              fontColor={'black'}
              fontWeight={'bold'}
              marginBottom={10}
            >
              Adicionar Sessão
            </StyledText>
            <StyledMaskTextInput
              maskType="datetime"
              format="DD/MM/YYYY"
              name="date"
              register={formProps.register}
              required={true}
              onChangeText={(text) => setDate(text)}
              placeholder="Data..."
              value={currentDate}
            />
            <StyledMaskTextInput
              maskType="datetime"
              format="HH:mm"
              name="time"
              register={formProps.register}
              required={true}
              onChangeText={(text) => setTime(text)}
              placeholder="Hora..."
              value={currentTime}
            />
            <SecondaryButton label="Salvar" onPress={onSubmit} />
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
