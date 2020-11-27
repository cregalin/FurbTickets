import React, {useEffect, useState} from 'react';
import {View, Text } from 'react-native'
import { getShowById } from 'baseServices/ShowService';
import { confirmTickets, saveTickets } from 'baseServices/TicketService';
import SecondaryButton from 'components/buttons/secondary_button/SecondaryButton';
import PrimaryButton from 'components/buttons/primary_button/PrimaryButton';
import RowField from 'components/fields/RowField/RowField';
import { useNavigation } from '@react-navigation/native';
import {Title} from 'components/texts/styles'
import {
  parseCurrency,
  parseDateFromPayload,
  parseTimeFromPayload,
} from 'helpers';

const FinalizarCompra = ({route}) => {
  const navigation = useNavigation();

  const {sessionId, tickets, cpf, email, showId} = route.params

  const [totalPrice, setTotalPrice] = useState(0.0)
  const [show, setShow] = useState(null)
  const [session, setSession] = useState(null)

  const fetchSessions = async () => {
    const data = await getShowById(showId);
    setShow(data.show)
    setSession(data.sessions_attributes.find(sess => sess.id == sessionId))
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
    let payload = {
      session_id: sessionId,
      tickets: tickets.map(ticket => {
        return {
          ticket_type: ticket.ticket_type
        }
      })
    }
    confirmTickets(payload).then(resp => {
      saveTickets({
        session_id: sessionId,
        email,
        cpf,
        tickets
      })
    }).then(resp => {
      navigation.navigate("CompraFinalizada")
    })
  }

  const handleCancel = () => {

  }

  return (
    <View>
      <View style={{display: "flex", justifyContent: "center", alignItems: "center", padding: 20}}>
        <Title>{show ? show.title : ''}</Title>
      </View>
      { session && (
        <View
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
          <RowField
            label="Valor Total:"
            value={`R$ ${totalPrice.toFixed(2)}`}
          />
        </View>
      )}
      <View style={{display: 'flex', flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
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
    </View>
  )
}

export default FinalizarCompra
