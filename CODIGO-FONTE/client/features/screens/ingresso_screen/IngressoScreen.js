import React, { useState } from 'react';
import { Container } from '../buscar_screen/SpectacleListStyles';
import SeletorCadeiras from './SeletorCadeiras/SeletorCadeiras';
import { mockChairs } from '../../../mock';

const IngressoScreen = () => {
  const [seletorOpen, setOpenSeletor] = useState(true);

  const onSubmit = (selectedChairs) => {
    console.log(selectedChairs);
  };

  return (
    <Container>
      <SeletorCadeiras
        modalVisible={seletorOpen}
        onCloseModal={() => setOpenSeletor(false)}
        onSubmit={onSubmit}
        chairList={mockChairs}
      />
    </Container>
  );
};

export default IngressoScreen;
