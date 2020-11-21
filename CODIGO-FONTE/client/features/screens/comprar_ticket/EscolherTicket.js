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

const EscolherTicket = ({route}) => {

  const [tickets, setTickets] = useState([])
  const [spectacle, setSpectacle] = useState(undefined)
  const types = [{
    label: "INTEIRA",
    value: "INTEIRA"
  },
  {
    label: "MEIA",
    value: "MEIA"
  },
  {
    label: "ESPECIAL",
    value: "ESPECIAL"
  }]

  const formProps = useForm({
    defaultValues: {
      cpf: '',
      name: '',
    },
  });

  useEffect(() => {
    getShowById(route.params.spectacleId)
    .then(({data}) => setSpectacle(data.show))
  }, [])

  const Ticket = ({ticket}) => {
    return (
      <>
        <Text>{ticket.reference}</Text>
        <DropDownPicker
          items={types}
          defaultValue={"INTEIRA"}
          itemStyle={{
              justifyContent: 'flex-start'
          }}
          style={{backgroundColor: '#fafafa'}}
          dropDownStyle={{backgroundColor: '#fafafa'}}
          containerStyle={{height: 70, width: 300, overflow: 'scroll'}}
          onChangeItem={item => ticket.type = item.value}
           />
      </>
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
        route.params.selectedChairs.map(ticket => <Ticket key={ticket.reference} ticket={ticket} />)
      }
      </ScrollView>
    )
  }

  return (
    <Container>
      <FormProvider>
        <StyledTextInput
          placeholder="Nome..."
          placeholderColor={darkPurple}
          name="name"
          control={formProps.control}
          required={true}
          onChangeText={(text) => {
            formProps.setValue('name', text);
          }}
        />
        <StyledMaskTextInput
          maskType="cpf"
          format="***.***.***-**"
          name="cpf"
          register={formProps.register}
          required={true}
          onChangeText={(text) => formProps.setValue('cpf', text)}
          placeholder="CPF..."
        />
      </FormProvider>
      <Tickets/>
    </Container>
  )
}

export default EscolherTicket
