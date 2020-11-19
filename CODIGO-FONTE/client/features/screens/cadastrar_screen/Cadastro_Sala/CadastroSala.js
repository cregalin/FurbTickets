import React, {useState} from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { Container } from 'components/containers/styles';
import {saveRoom} from 'baseServices/RoomService'
import { darkPurple } from '../../../theme/colors';
import { LoaderCard } from 'components/cards/LoaderCard/LoaderCard';
import PrimaryButton from 'components/buttons/primary_button/PrimaryButton';
import StyledTextInput from 'components/inputs/text_input/TextInput';


const CadastroSala = () => {

  const [open, setOpen] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const formProps = useForm({
    defaultValues: {
      description: '',
      quantity_chairs: ''
    },
  });

  const onSubmit = (room) => {
    setLoading(true);
    setError(false)
    setOpen(true);
    saveRoom(room)
      .then((response) => {
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setError(true);
        console.log(error);
      });
  }

  return (
    <Container>
      <FormProvider>
        {
          loading && (<LoaderCard
            open={open}
            loading={loading}
            error={error}
            onCloseModal={() => setOpen(false)}
          />)
        }
        <StyledTextInput
          placeholder="Descrição..."
          placeholderColor={darkPurple}
          name="name"
          control={formProps.control}
          required={true}
          onChangeText={(text) => {
            formProps.setValue('name', text);
          }}
        />
        <StyledTextInput
          placeholder="Quantidade de cadeiras..."
          placeholderColor={darkPurple}
          name="quantity_chairs"
          control={formProps.control}
          required={true}
          keyboardType="numeric"
          onChangeText={(text) => {
            formProps.setValue('quantity_chairs', text);
          }}
        />
        <PrimaryButton
          label="Avançar"
          onPress={formProps.handleSubmit(onSubmit)}
        />
      </FormProvider>
    </Container>
  )
}

export default CadastroSala
