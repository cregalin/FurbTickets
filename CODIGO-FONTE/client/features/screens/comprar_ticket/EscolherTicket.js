import React, {useState, useEffect} from 'react';
import { Container } from "components/containers/styles";
import ShowCard from "components/ShowCard/ShowCard"
import { useForm, FormProvider } from 'react-hook-form';
import {ScrollView, Text} from "react-native"
import DropDownPicker from 'react-native-dropdown-picker';
import {getShowById} from "baseServices/ShowService"
import { darkPurple } from '../../theme/colors';
import StyledTextInput from 'components/inputs/text_input/TextInput';
import PrimaryButton from 'components/buttons/primary_button/PrimaryButton';
import * as S from "./styles"
import StyledMaskTextInput from 'components/inputs/text_mask_input/MaskTextInput';
import { confirmTickets, saveTickets } from 'baseServices/ShowService';

const EscolherTicket = ({route}) => {

  const [tickets, setTickets] = useState(route.params.selectedChairs)
  const [spectacle, setSpectacle] = useState(undefined)
  const [cpf, setCpf] = useState('')

  const onSaveTicket = ({email}) => {
    let payload = {
      email,
      cpf,
      session_id: spectacle.id,
      tickets: tickets.map(ticket => {
        return {
          chair_id: ticket.id,
          ticket_type: ticket.ticket_type
        }
      })
    }
    confirmTickets({session_id: payload.session_id, tickets: payload.tickets}).then(() => saveTickets(payload))
  }

  const formProps = useForm({
    defaultValues: {
      email: '',
    },
  });

  const types = [{
    label: "INTEIRA",
    value: 2
  },
  {
    label: "MEIA",
    value: 1
  },]

  useEffect(() => {
    getShowById(route.params.spectacleId)
    .then(({data}) => setSpectacle(data.show))
  }, [])

  const Ticket = ({ticket, index}) => {
    return (
      <>
        <Text>{ticket.reference}</Text>
        <DropDownPicker
          zIndex={(index + 1) * 1000}
          items={types}
          defaultValue={2}
          itemStyle={{
              justifyContent: 'flex-start'
          }}
          style={{backgroundColor: '#fafafa', marginTop: 10}}
          dropDownStyle={{backgroundColor: '#fafafa'}}
          containerStyle={{height: 70, width: 300}}
          onChangeItem={item => ticket.ticket_type = item.value}
           />
      </>
    )
  }

  const Tickets = () => {
    return (
      <ScrollView contentContainerStyle={{
          flex: 1,
          justifyContent: 'flex-start',
          paddingBottom: 200
      }}>
      {
        route.params.selectedChairs.map((ticket, index) => <Ticket index={index} key={ticket.reference} ticket={ticket} />)
      }
      </ScrollView>
    )
  }

  return (
    <Container height={'100%'}>
      <FormProvider>
        <StyledTextInput
          required={true}
          onChangeText={(text) => formProps.setValue('email', text)}
          placeholder="Email..."
          name="email"
          control={formProps.control}
        />
        <StyledMaskTextInput
          maskType="cpf"
          format="***.***.***-**"
          required={true}
          value={cpf}
          onChangeText={(text) => setCpf(text)}
          placeholder="CPF..."
        />
      </FormProvider>
      <Tickets/>
      <PrimaryButton onPress={formProps.handleSubmit(onSaveTicket)} label="Comprar" width="90%" />
    </Container>
  )
}

export default EscolherTicket
