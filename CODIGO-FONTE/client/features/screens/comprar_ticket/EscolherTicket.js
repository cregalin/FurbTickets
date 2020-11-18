import React, {useState, useEffect} from 'react';
import { Container } from "components/containers/styles";
import ShowCard from "components/ShowCard/ShowCard"
import {Picker, ScrollView} from "react-native"
import * as TicketConstants from "./ticket-constants"
import {getShowById} from "baseServices/ShowService"
import PrimaryButton from 'components/buttons/primary_button/PrimaryButton';

const EscolherTicket = ({route}) => {

  const [tickets, setTickets] = useState([])
  const [spectacle, setSpectacle] = useState(undefined)

  useEffect(() => {
    getShowById(route.params.spectacleId)
    .then(({data}) => setSpectacle(data))
  }, [])

  const Ticket = ({ticket}) => {
    return (
      <Container>
        <Picker
          onValueChange={value => ticket.type = value}>
          {
            TicketConstants.types.map(type => <Picket.Item label={type} value={type} />)
          }
        </Picker>
      </Container>
    )
  }

  const addNewTicket = () => {
    const newTicket = {}
    setTickets([...tickets, newTicket])
  }

  const Tickets = () => {
    return (
      <ScrollView>
      {
        tickets.map(ticket => <Ticket ticket={ticket} />)
      }
      <PrimaryButton label="Adicionar Ticket" onPress={addNewTicket} />
      </ScrollView>
    )
  }

  return (
    <Container>
    {
      spectacle && <ShowCard show={spectacle}/>
    }
    </Container>
  )
}

export default EscolherTicket
