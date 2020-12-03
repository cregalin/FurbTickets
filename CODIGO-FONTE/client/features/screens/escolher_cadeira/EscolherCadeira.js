import React, { useState, useEffect } from 'react';
import { getChairs } from 'baseServices/ShowService';
import { useNavigation } from '@react-navigation/native';
import SeletorCadeiras from 'components/SeletorCadeiras/SeletorCadeiras';

const EscolherCadeira = ({ route }) => {
  const navigation = useNavigation();

  const {sessionId, id} = route.params
  const [chairs, setChairs] = useState([])

  useEffect(() => {
    getChairs(sessionId).then(resp => {
      setChairs(resp.data)
    })
  }, [sessionId])

  const onSubmit = (selectedChairs) => {
    navigation.navigate('EscolherTicket', {
      id,
      sessionId,
      selectedChairs,
    });
  };

  return <SeletorCadeiras onSubmit={onSubmit} chairList={chairs} />;
};

export default EscolherCadeira;
