import React from "react";
import { View } from "react-native";
import { homeScreenStyle } from "./HomeScreenStyle";
import { connect } from "react-redux";
import PrimaryButton from "../../components/buttons/primary_button/PrimaryButton";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();
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
