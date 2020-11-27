import React from 'react';
import {View} from 'react-native'
import { getShowById } from 'baseServices/ShowService';

const FinalizarCompra = ({route}) => {

  const {id, chairs} = route.params

  const fetchSessions = async () => {
    const { sessions_attributes } = await getShowById(sessionId);
    console.log(sessions_attributes)
  };

  useEffect(() => {
    fetchSessions()
  }, [id])

  return (
    <View></View>
  )
}

export default FinalizarCompra
