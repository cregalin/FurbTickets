import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { getShows } from 'baseServices/ShowService';
import { useNavigation } from '@react-navigation/native';
import { Container, ScrollContainer } from 'components/containers/styles';
import ShowCard from 'components/ShowCard/ShowCard';
import { LoaderCard } from 'components/cards/LoaderCard/LoaderCard';
import HomeButtons from './HomeButtons/HomeButtons';

const HomeScreen = () => {
  const navigation = useNavigation();

  const [open, setOpen] = useState(true);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [shows, setShows] = useState(null);

  const fetchShows = async () => {
    setOpen(true);
    setLoading(true);
    const showsResponse = await getShows();
    setOpen(false);
    if (!showsResponse) setError(true);
    else setShows(showsResponse);
  };

  useEffect(() => {
    fetchShows();
  }, []);

  return (
    <Container>
      <ScrollContainer>
        {open ? (
          <LoaderCard
            text="Buscando sessões..."
            error={error}
            loading={loading}
            onCloseModal={() => setOpen(false)}
            open={open}
          />
        ) : (
          shows?.map((show, index) => {
            return (
              <ShowCard
                key={index}
                show={show}
                onPressTicket={(show) => navigation.navigate('Ingresso', show)}
                onPressDetails={(show) => navigation.navigate('Show', show)}
              />
            );
          })
        )}
      </ScrollContainer>
      <HomeButtons
        onPressAdd={() => navigation.navigate('Cadastrar')}
        onPressRemove={() => {}}
        onPressSearch={() => navigation.navigate('Buscar')}
      />
    </Container>
  );
};

export default connect()(HomeScreen);
