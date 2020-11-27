import React, { useEffect, useState } from 'react';
import { Container } from '../buscar_screen/SpectacleListStyles';
import { ScrollContainer } from 'components/containers/styles';
import SeletorCadeiras from 'components/SeletorCadeiras/SeletorCadeiras';
import { mockChairs } from '../../../mock';
import { useNavigation } from '@react-navigation/native';
import { LoaderCard } from '../../components/cards/LoaderCard/LoaderCard';
import { getChairs, getShowById } from '../../../services/ShowService';
import SessionCard from '../../components/session_card/SessionCard';
import { parseDateFromPayload, parseTimeFromPayload } from '../../../helpers';

const IngressoScreen = ({ route }) => {
  const navigation = useNavigation();
  const [selectedSession, setSelectedSession] = useState(false);

  const [open, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sessions, setSessions] = useState([]);

  const { id: sessionId, price, title, troupe } = route.params;

  const fetchSessions = async () => {
    setModalOpen(true);
    setLoading(true);
    const { sessions_attributes } = await getShowById(sessionId);
    setLoading(false);
    setSessions(sessions_attributes);
    setModalOpen(false);
  };

  const onPressSession = (sessionId) => {
    navigation.navigate('EscolherCadeira', {
      sessionId
    });
  };

  useEffect(() => {
    fetchSessions();
  }, [sessionId]);

  const onSubmit = (selectedChairs) => {
    navigation.navigate('EscolherTicket', {
      spectacleId: id,
      selectedChairs,
    });
  };

  return (
    <ScrollContainer>
      {loading ? (
        <LoaderCard
          loading={loading}
          open={open}
          onCloseModal={() => setModalOpen(false)}
        />
      ) : (
        sessions.map((session, index) => (
          <SessionCard
            key={index}
            index={index + 1}
            choosing={true}
            id={session.id}
            date={parseDateFromPayload(session.date)}
            time={parseTimeFromPayload(session.time)}
            onPress={onPressSession}
            onPressBuy={onPressSession}
          />
        ))
      )}
      {selectedSession && (
        <SeletorCadeiras onSubmit={onSubmit} chairList={mockChairs} />
      )}
    </ScrollContainer>
  );
};

export default IngressoScreen;
