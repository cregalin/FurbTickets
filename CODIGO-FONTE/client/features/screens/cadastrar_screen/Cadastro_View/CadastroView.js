import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import { postShow } from '../../../../Api';

import { Container } from '../../../components/containers/styles';
import { darkPurple } from '../../../theme/colors';
import PrimaryButton from '../../../components/buttons/primary_button/PrimaryButton';
import StyledTextInput from '../../../components/inputs/text_input/TextInput';
import { LoaderCard } from '../../../components/LoaderCard/LoaderCard';

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

  const [loading, setLoading] = useState(false);

  const onSubmit = ({ description, price, title, troupe }) => {
    setLoading(true);
    postShow({ description, price, title, troupe })
      .then((response) => {
        setLoading(false);
        const showId = response.data.id;
        navigation.navigate('Cadastro_AddSession', { spectacleId: showId });
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  return (
    <Container justifyContent="flex-start">
      <FormProvider {...formProps}>
        <LoaderCard loading={loading} />
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
