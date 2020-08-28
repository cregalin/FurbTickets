import React from "react";
import { Text, View, Button } from "react-native";
import { HomeScreenStyle as homeStyle } from "./HomeScreenStyle";
import { connect } from "react-redux";

const HomeScreen = (props) => {
  return (
    <View style={homeStyle.container}>
      <Text style={homeStyle.text}>{props.textValue}</Text>
      <Button
        title="Fazer Requisição"
        style={homeStyle.btn}
        onPress={() =>
          props.dispatch({
            type: "display/textApi",
            textValue: "Texto Atualizado",
          })
        }
      />
    </View>
  );
};

const mapHomeToProps = (state) => {
  return {
    textValue: state.textValue,
  };
};

export default connect(mapHomeToProps)(HomeScreen);
