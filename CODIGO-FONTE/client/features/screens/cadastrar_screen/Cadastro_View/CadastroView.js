import React from "react";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";

import { Container } from "../../../components/containers/styles";
import { darkPurple } from "../../../theme/colors";
import PrimaryButton from "../../../components/buttons/primary_button/PrimaryButton";
import StyledTextInput from "../../../components/inputs/text_input/TextInput";

const CadastroView = () => {
  const navigation = useNavigation();
  const formProps = useForm({
    defaultValues: {
      title: "",
      description: "",
      troupe: "",
      price: "",
    },
  });

  const onSubmit = ({ description, price, title, troupe }) => {
    console.log(description);
    console.log(price);
    console.log(title);
    console.log(troupe);
    //POST
    navigation.navigate("Cadastro_AddSession", { spectacleId: "111" });
  };

  return (
    <Container justifyContent="flex-start">
      <FormProvider {...formProps}>
        <StyledTextInput
          placeholder="Título..."
          placeholderColor={darkPurple}
          name="title"
          control={formProps.control}
          required={true}
          onChangeText={(text) => {
            formProps.setValue("title", text);
          }}
        />
        <StyledTextInput
          placeholder="Descrição..."
          placeholderColor={darkPurple}
          name="description"
          control={formProps.control}
          required={true}
          onChangeText={(text) => formProps.setValue("description", text)}
        />
        <StyledTextInput
          placeholder="Trupe..."
          placeholderColor={darkPurple}
          name="troupe"
          control={formProps.control}
          required={true}
          onChangeText={(text) => formProps.setValue("troupe", text)}
        />
        <StyledTextInput
          placeholder="Preço..."
          placeholderColor={darkPurple}
          name="price"
          control={formProps.control}
          required={true}
          onChangeText={(text) => formProps.setValue("price", text)}
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
