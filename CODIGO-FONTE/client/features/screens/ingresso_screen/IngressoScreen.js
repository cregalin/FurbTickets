import React, { useState } from 'react';
import { Container } from '../buscar_screen/SpectacleListStyles';
import SeletorCadeiras from './SeletorCadeiras/SeletorCadeiras';
import { mockChairs } from '../../../mock';
import { useNavigation } from '@react-navigation/native';

const IngressoScreen = ({route}) => {
  const navigation = useNavigation();
  const [seletorOpen, setOpenSeletor] = useState(true);

  const onSubmit = (selectedChairs) => {
    navigation.navigate('EscolherTicket', {
      spectacleId: route.params.id,
      selectedChairs
    })
  };

  return (
    <Container>
      <SeletorCadeiras onSubmit={onSubmit} chairList={mockChairs} />
    </Container>
  );
};

export default IngressoScreen;
