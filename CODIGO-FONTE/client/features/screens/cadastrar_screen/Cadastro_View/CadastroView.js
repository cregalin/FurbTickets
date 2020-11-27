import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import { postShow } from 'baseServices/ShowService';

import { Container } from 'components/containers/styles';
import { darkPurple } from '../../../theme/colors';
import PrimaryButton from 'components/buttons/primary_button/PrimaryButton';
import StyledTextInput from 'components/inputs/text_input/TextInput';
import { LoaderCard } from 'components/cards/LoaderCard/LoaderCard';

const CadastroView = () => {
  const navigation = useNavigation();
  const formProps = useForm({
    defaultValues: {
      title: '',
      description: '',
      troupe: '',
      price: '',
    },
  });

  const [open, setOpen] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async ({ description, price, title, troupe }) => {
    try {
      setLoading(true);
      setError(false);
      setOpen(true);
      const { data } = await postShow({ description, price, title, troupe });
      setOpen(false);
      setLoading(false);
      const showId = data.id;
      navigation.navigate('CadastrarSessao', { spectacleId: showId });
    } catch (error) {
      setLoading(false);
      setError(true);
      console.log(error);
    }
  };

  return (
    <Container justifyContent="flex-start">
      <FormProvider {...formProps}>
        <LoaderCard
          open={open}
          loading={loading}
          error={error}
          onCloseModal={() => setOpen(false)}
        />
        <StyledTextInput
          placeholder="Título..."
          placeholderColor={darkPurple}
          name="title"
          control={formProps.control}
          required={true}
          onChangeText={(text) => {
            formProps.setValue('title', text);
          }}
        />
        <StyledTextInput
          placeholder="Descrição..."
          placeholderColor={darkPurple}
          name="description"
          control={formProps.control}
          required={true}
          onChangeText={(text) => formProps.setValue('description', text)}
        />
        <StyledTextInput
          placeholder="Trupe..."
          placeholderColor={darkPurple}
          name="troupe"
          control={formProps.control}
          required={true}
          onChangeText={(text) => formProps.setValue('troupe', text)}
        />
        <StyledTextInput
          placeholder="Preço..."
          placeholderColor={darkPurple}
          name="price"
          control={formProps.control}
          required={true}
          onChangeText={(text) => formProps.setValue('price', text)}
          keyboardType="numeric"
        />
        <PrimaryButton
          label="Avançar"
          onPress={formProps.handleSubmit(onSubmit)}
        />
      </FormProvider>
    </Container>
  );
};

export { CadastroView };
