import React from "react";
import { Text, View, Button } from "react-native";
import { HomeScreenStyle as homeStyle } from "./HomeScreenStyle";
import { connect } from "react-redux";

const HomeScreen = (props) => {
  return (
    <View style={homeStyle.container}>
      {props.listaObjetos.map((item) => {
        return (
          <View key={item.id}>
            <Text>ID: {item.id}</Text>
            <Text>Text: {item.text}</Text>
          </View>
        );
      })}
      <Button
        title="Fazer Requisição"
        style={homeStyle.btn}
        onPress={() =>
          props.dispatch({
            type: "api/get",
          })
        }
      />
      <Button
        title="Fazer Post"
        style={homeStyle.btn}
        onPress={() =>
          props.dispatch({
            type: "api/post",
          })
        }
      />
    </View>
  );
};

const mapHomeToProps = (state) => {
  return {
    listaObjetos: state.listaObjetos,
  };
};

export default connect(mapHomeToProps)(HomeScreen);
