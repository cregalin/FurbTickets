import React from "react";
import { View, Alert } from "react-native";
import { homeScreenStyle } from "./HomeScreenStyle";
import { connect } from "react-redux";
import PrimaryButton from "../../components/buttons/Button";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={homeScreenStyle.container}>
      <PrimaryButton
        label={"Cadastrar Espetáculos"}
        onPress={() => navigation.navigate("Cadastrar")}
      />
      <PrimaryButton
        label={"Buscar Espetáculos"}
        onPress={() => navigation.navigate("Buscar")}
      />
    </View>
  );
};

export default connect()(HomeScreen);
