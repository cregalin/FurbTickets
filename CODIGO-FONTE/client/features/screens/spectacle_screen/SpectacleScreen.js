import React, { Fragment, useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ScrollView, View } from 'react-native';

import { LoaderCard } from '../../components/cards/LoaderCard/LoaderCard';
import { StyledText } from '../../components/texts/styles';
import { Card } from '../../components/cards/styles';
import { getShowById } from '../../../services/ShowService';
import RowField from '../../components/fields/RowField/RowField';
import {
  parseCurrency,
  parseDateFromPayload,
  parseTimeFromPayload,
} from '../../../helpers';
import SecondaryButton from '../../components/buttons/secondary_button/SecondaryButton';

const SpectacleScreen = () => {
  const route = useRoute();
  const { id } = route.params;
  const navigation = useNavigation();

  const [open, setOpen] = useState(true);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [show, setShow] = useState(null);
  const [sessions, setSessions] = useState(null);

  const fetchShow = async () => {
    try {
      setOpen(true);
      setLoading(true);
      const { sessions_attributes, show } = await getShowById(id);
      setShow(show);
      setSessions(sessions_attributes);
      setOpen(false);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
      console.log(err0r);
    }
  };

  useEffect(() => {
    fetchShow();
  }, []);

  const ShowDetails = () => {
    return (
      <Fragment>
        <Card>
          <StyledText
            fontSize={20}
            fontWeight="bold"
            fontColor="black"
            marginBottom={10}
          >
            {show.title}
          </StyledText>
          <RowField label="Trupe:" value={show.troupe} />
          <RowField
            label="Preço:"
            value={parseCurrency(show.price)}
            marginBottom={20}
          />
          <View
            style={{
              width: '100%',
              marginBottom: 'auto',
            }}
          >
            <StyledText fontColor="brown" fontWeight="bold" fontSize={18}>
              Descrição:
            </StyledText>
            <StyledText marginBottom={8} fontColor="black" fontSize={15}>
              {show.description}
            </StyledText>
          </View>
        </Card>
        <Card>
          <View
            style={{
              width: '100%',
            }}
          >
            <StyledText
              fontColor="brown"
              fontWeight="bold"
              textAlign="center"
              fontSize={18}
              marginBottom={8}
            >
              Sessões
            </StyledText>
            {sessions.map((session, index) => {
              return (
                <View
                  key={index}
                  style={{ width: '100%', borderTopWidth: 1, padding: 10 }}
                >
                  <RowField
                    label="Data:"
                    value={parseDateFromPayload(session.date)}
                  />
                  <RowField
                    label="Hora:"
                    value={parseTimeFromPayload(session.time)}
                  />
                  <RowField label="Sala:" value={session.room_description} />
                </View>
              );
            })}
          </View>
        </Card>
      </Fragment>
    );
  };

  return (
    <Fragment>
      <ScrollView>
        {open ? (
          <LoaderCard
            text="Buscando espetáculo..."
            error={error}
            loading={loading}
            onCloseModal={() => setOpen(false)}
            open={open}
          />
        ) : (
          ShowDetails()
        )}
      </ScrollView>
      <View
        style={{
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <SecondaryButton
          label="Ingresso"
          width="90%"
          onPress={() => {
            if (!loading && !error) navigation.navigate('Ingresso', show);
          }}
        />
        <SecondaryButton
          label="Adicionar sessões"
          width="90%"
          onPress={() => {
            if (!loading && !error)
              navigation.navigate('CadastrarSessao', {
                spectacleId: show.id,
                sessions: sessions,
              });
          }}
        />
      </View>
    </Fragment>
  );
};

export default SpectacleScreen;
