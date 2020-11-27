import React, { useState, useEffect } from 'react';
import { arrow_icon } from '../../../../assets/images';
import { Image, Modal, View } from 'react-native';
import { useForm } from 'react-hook-form';
import { useNavigation, useRoute } from '@react-navigation/native';
import { putShowSessions } from 'baseServices/ShowService';
import { parseDateToPayload } from 'helpers';

import SecondaryButton from 'components/buttons/secondary_button/SecondaryButton';
import StyledMaskTextInput from 'components/inputs/text_mask_input/MaskTextInput';
import { StyledText } from 'components/texts/styles';
import { Container, ScrollContainer } from 'components/containers/styles';
import SessionCard from 'components/session_card/SessionCard';
import PrimaryButton from 'components/buttons/primary_button/PrimaryButton';
import { LoaderCard } from 'components/cards/LoaderCard/LoaderCard';

import { StyledScrollView, ModalContainer, InModalContainer } from './styles';
import {
  parseDateFromPayload,
  parseTimeFromPayload,
} from '../../../../helpers';
import { getRooms } from '../../../../services/RoomService';
import NoControlTextInput from '../../../components/inputs/text_input/NoControlTextInput';
import { TouchableOpacity } from 'react-native-gesture-handler';

const CadastroAddSession = () => {
  const [sessionModalVisible, setSessionModalVisible] = useState(false);
  const [roomModalVisible, setRoomModalVisible] = useState(false);

  const route = useRoute();
  const navigation = useNavigation();

  const { spectacleId, sessions } = route.params;

  const [open, setOpen] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadingRooms, setLoadingRooms] = useState(false);
  const [rooms, setRooms] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState({ description: '' });

  const [currentDate, setDate] = useState('');
  const [currentTime, setTime] = useState('');
  const [sessionAttributes, setSessionAttributes] = useState([]);

  const formProps = useForm({
    defaultValues: {
      date: '',
      time: '',
    },
  });

  const onSearchRoom = async () => {
    try {
      setSessionModalVisible(false);
      setRoomModalVisible(true);
      setError(false);
      setLoadingRooms(true);
      const { data } = await getRooms();
      setRooms(data);
      setLoadingRooms(false);
    } catch (error) {
      setOpen(true);
      setError(true);
      console.log(error);
    }
  };

  const onSelectRoom = (room) => {
    setSelectedRoom(room);
    setRoomModalVisible(false);
    setSessionModalVisible(true);
  };

  useEffect(() => {
    if (sessions && !sessionAttributes.length) {
      const localSessions = sessions.map((session) => {
        return {
          date: parseDateFromPayload(session.date),
          time: parseTimeFromPayload(session.time),
        };
      });
      setSessionAttributes(localSessions);
    }
  }, []);

  const onSave = async () => {
    try {
      if (selectedRoom.id) {
        setError(false);
        setOpen(true);
        setLoading(true);
        const payloadSessions = sessionAttributes.map((session) => {
          return {
            time: session.time,
            date: parseDateToPayload(session.date),
            room_id: selectedRoom.id,
            room_description: selectedRoom.description,
          };
        });
        await putShowSessions(payloadSessions, spectacleId);
        setLoading(false);
        navigation.navigate('Home');
      }
    } catch (error) {
      setLoading(false);
      setError(true);
      console.log(error);
    }
  };

  const onSubmit = () => {
    setSessionAttributes([
      ...sessionAttributes,
      {
        date: currentDate,
        time: currentTime,
        room_id: selectedRoom.id,
        room_description: selectedRoom.description,
      },
    ]);
    setSessionModalVisible(false);
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
      <PrimaryButton
        label="Adicionar"
        onPress={() => setSessionModalVisible(true)}
      />
      <PrimaryButton label="Salvar" onPress={onSave} />
      <LoaderCard
        open={open}
        loading={loading}
        error={error}
        onCloseModal={() => setOpen(false)}
      />
      <StyledScrollView>
        {sessionAttributes.length ? (
          sessionAttributes.map((session, index) => (
            <SessionCard
              key={index}
              index={index}
              date={session.date}
              time={session.time}
              roomName={session.room_description}
              onPress={onDelete}
            />
          ))
        ) : (
          <StyledText textAlign="center">
            Ainda não existem sessões cadastradas para este espetáculo.
          </StyledText>
        )}
      </StyledScrollView>
      <Modal
        visible={sessionModalVisible}
        animationType={'slide'}
        transparent={true}
      >
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
            <NoControlTextInput
              readOnly={true}
              placeholder="Sala"
              onTouch={onSearchRoom}
              value={selectedRoom.description}
            />
            <SecondaryButton label="Salvar" onPress={onSubmit} />
            <SecondaryButton
              label="Voltar"
              onPress={() => setSessionModalVisible(false)}
            />
          </InModalContainer>
        </ModalContainer>
      </Modal>
      <Modal
        visible={roomModalVisible}
        animationType="slide"
        transparent={true}
      >
        <ModalContainer>
          <InModalContainer>
            <StyledText
              fontWeight="bold"
              fontSize={20}
              marginBottom={12}
              fontColor="black"
            >
              Sala
            </StyledText>
            <ScrollContainer>
              {loadingRooms && (
                <StyledText>Buscando salas cadastradas...</StyledText>
              )}
              {rooms && rooms.length ? (
                rooms.map((room, index) => (
                  <TouchableOpacity
                    key={index}
                    style={{
                      width: 350,
                      borderTopWidth: 1,
                      borderColor: 'gray',
                      padding: 5,
                      marginBottom: 5,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}
                    onPress={() => onSelectRoom(room)}
                  >
                    <StyledText
                      fontWeight="bold"
                      fontSize={20}
                      fontColor="brown"
                    >
                      {room.description}
                    </StyledText>
                    <Image source={arrow_icon} />
                  </TouchableOpacity>
                ))
              ) : (
                <PrimaryButton
                  label="Cadastrar Sala"
                  onPress={() => {
                    setRoomModalVisible(false);
                    setOpen(false);
                    navigation.navigate('CadastrarSala');
                  }}
                />
              )}
            </ScrollContainer>
          </InModalContainer>
        </ModalContainer>
      </Modal>
    </Container>
  );
};

export { CadastroAddSession };
