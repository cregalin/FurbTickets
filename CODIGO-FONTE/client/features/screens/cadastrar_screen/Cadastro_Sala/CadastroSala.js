import React, {useState} from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { Container } from 'components/containers/styles';
import {saveRoom} from 'baseServices/RoomService'

const CadastroSala = () => {

  const [open, setOpen] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const formProps = useForm({
    defaultValues: {
      name: '',
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

  return <Container>
    <FormProvider>
      <LoaderCard
        open={open}
        loading={loading}
        error={error}
        onCloseModal={() => setOpen(false)}
      />
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
      <PrimaryButton
        label="Avançar"
        onPress={formProps.handleSubmit(onSubmit)}
      />
    </FormProvider>
  </Container>
}

export default CadastroSala
