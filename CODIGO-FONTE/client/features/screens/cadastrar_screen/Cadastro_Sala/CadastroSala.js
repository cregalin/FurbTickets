import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { Container } from 'components/containers/styles';
import { saveRoom } from 'baseServices/RoomService';
import { darkPurple } from '../../../theme/colors';
import { LoaderCard } from 'components/cards/LoaderCard/LoaderCard';
import PrimaryButton from 'components/buttons/primary_button/PrimaryButton';
import StyledTextInput from 'components/inputs/text_input/TextInput';
import { useNavigation } from '@react-navigation/native';

const CadastroSala = () => {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  const formProps = useForm({
    defaultValues: {
      description: '',
    },
  });

  const onSubmit = async ({ description }) => {
    try {
      setOpen(true);
      setError(false);
      setLoading(true);
      await saveRoom(description);
      setOpen(false)
      setLoading(false);
      navigation.navigate('Home');
    } catch (error) {
      setLoading(false);
      setError(true);
      console.log(error);
    }
  };

  return (
    <Container>
      <FormProvider>
        {loading && (
          <LoaderCard
            open={open}
            loading={loading}
            error={error}
            onCloseModal={() => setOpen(false)}
          />
        )}
        <StyledTextInput
          placeholder="Descrição..."
          placeholderColor={darkPurple}
          name="description"
          control={formProps.control}
          required={true}
          onChangeText={(text) => {
            formProps.setValue('description', text);
          }}
        />
        <PrimaryButton
          label="Avançar"
          onPress={formProps.handleSubmit(onSubmit)}
        />
      </FormProvider>
    </Container>
  );
};

export default CadastroSala;
