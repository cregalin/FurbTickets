import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';

import { getShows } from 'baseServices/ShowService';
import { useNavigation } from '@react-navigation/native';
import { Container, ScrollContainer } from 'components/containers/styles';
import ShowCard from 'components/ShowCard/ShowCard';
import { LoaderCard } from 'components/cards/LoaderCard/LoaderCard';
import HomeButtons from './HomeButtons/HomeButtons';

const HomeScreen = () => {
  const navigation = useNavigation();

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [shows, setShows] = useState(null);

  const fetchShows = async () => {
    try {
      setOpen(true);
      setLoading(true);
      const showsResponse = await getShows();
      setOpen(false);
      setLoading(false);
      setShows(showsResponse);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      let isActive = true;

      fetchShows();

      return () => {
        isActive = false;
      };
    }, [])
  );

  return (
    <Fragment>
      <Container height="90%">
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
                  onPressTicket={(show) =>
                    navigation.navigate('Ingresso', show)
                  }
                  onPressDetails={(show) => navigation.navigate('Show', show)}
                />
              );
            })
          )}
        </ScrollContainer>
      </Container>
      <HomeButtons
        onPressAdd={() => navigation.navigate('CadastrarEspetaculo')}
        onPressValidate={() => navigation.navigate('Validar')}
        onPressSearch={() => navigation.navigate('Buscar')}
        onPressAddRoom={() => navigation.navigate('CadastrarSala')}
      />
    </Fragment>
  );
};

export default connect()(HomeScreen);
