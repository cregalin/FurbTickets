import React from 'react';
import { Container } from "../../components/containers/styles";
import Spectacle from "../../components/Spectacle/Spectacle"
import Room from "../../components/Room/Room"

const EscolherTicket = ({route}) => {

  const [tickets, setTickets] = useState([])
  const [spectacle, setSpectacle] = useState(undefined)
  const [room, setRoom] = useState(undefined)

  useEffect(() => {
    setRoom({})
  }, [spectacle])

  useEffect(() => {
    fetch(`https://1ce17fbefec7.ngrok.io/shows/${route.params.spectacleId}`)
    .then(res => res.json())
    .then(({data}) => setSpectacle(data))
  }, [])

  const Ticket = ({ticket}) => {
    return (
      <Container>

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
      spectacle && <Spectacle spectacle={spectacle}/>
    }
    {
      room && <Room room={room}/>
    }
    </Container>
  )
}

export default EscolherTicket
