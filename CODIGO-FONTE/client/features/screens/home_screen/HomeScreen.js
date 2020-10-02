import React from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import PrimaryButton from "../../components/buttons/primary_button/PrimaryButton";
import { useNavigation } from "@react-navigation/native";
import { Container } from "../../components/containers/styles";

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <PrimaryButton
        label={"Cadastrar Espetáculos"}
        onPress={() => navigation.navigate("Cadastrar")}
      />
      <PrimaryButton
        label={"Buscar Espetáculos"}
        onPress={() => navigation.navigate("Buscar")}
      />
    </Container>
  );
};

export default connect()(HomeScreen);
