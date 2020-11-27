import React, {useEffect, useState} from 'react';
import {View, Text  } from 'react-native'
import { getShowById } from 'baseServices/ShowService';
import { confirmTickets, saveTickets } from 'baseServices/ShowService';
import SecondaryButton from 'components/buttons/secondary_button/SecondaryButton';
import PrimaryButton from 'components/buttons/primary_button/PrimaryButton';

const FinalizarCompra = ({route}) => {

  const {sessionId, tickets, cpf, email, showId} = route.params

  const [totalPrice, setTotalPrice] = useState(0.0)
  const [show, setShow] = useState(null)
  const [session, setSession] = useState(null)

  const fetchSessions = async () => {
    const data = await getShowById(showId);
    console.log(data.show)
    setShow(data.show)
    setSession(data.sessions_attributes.find(sess => sess.id == sessionId))
    console.log(show)
  };

  useEffect(() => {
    fetchSessions()
  }, [sessionId])

  useEffect(() => {
    if(show) {
      const ticketsPrices = tickets.map(ticket => ticket.ticket_type == 2 ? +show.price : +((+show.price) / 2)).map(price => price.toFixed(2))
      const unformattedFinalTotalValue = ticketsPrices.reduce((crr, acc) => +crr + +acc, 0)
      const finalTotalValue = +unformattedFinalTotalValue.toFixed(2)
      setTotalPrice(finalTotalValue)
    }
  }, [show])

  const handleConfirmBuy = () => {

  }

  const handleCancel = () => {

  }

  return (
    <View>
      <Text>Valor Total: R${totalPrice.toFixed(2)}</Text>
      <SecondaryButton
        label="Voltar"
        width="40%"
        onPress={handleCancel}
      />
      <PrimaryButton
        label="Comprar"
        width="40%"
        onPress={handleConfirmBuy}
      />
    </View>
  )
}

export default FinalizarCompra
