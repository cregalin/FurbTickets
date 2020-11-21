import React, { useEffect, useState } from 'react';
import { Text, View, TextInput } from 'react-native';
import Spectacle from 'components/Spectacle/Spectacle';
import ShowCard from 'components/ShowCard/ShowCard';
import { ScrollContainer, Container } from 'components/containers/styles';
import Button from 'components/buttons/primary_button/PrimaryButton';
import * as S from './SpectacleListStyles';
import moment from 'moment';
import { paramsToQuery } from './SpectacleListUtils';
import { getShows } from 'baseServices/ShowService';

const ShowList = ({ route }) => {
  const [spectacles, setSpectacles] = useState([]);

  console.log(route.params);

  useEffect(() => {
    getShows(route.params).then((data) => setSpectacles(data));
  }, []);

  const SpectacleWrapper = ({ spectacle }) => {
    return <ShowCard show={spectacle} />;
  };

  return (
    <Container>
      <ScrollContainer>
        {spectacles.map((spectacle, index) => (
          <SpectacleWrapper key={index} spectacle={spectacle} />
        ))}
      </ScrollContainer>
    </Container>
  );
};

export default ShowList;
