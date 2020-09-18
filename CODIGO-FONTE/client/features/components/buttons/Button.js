import React from "react";
import { Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const PrimaryButton = (props) => {
  return (
    <TouchableOpacity style={buttonStyle.btnContainer} onPress={props.onPress}>
      <Text style={buttonStyle.btnLabel}>{props.label}</Text>
    </TouchableOpacity>
  );
};

const buttonStyle = StyleSheet.create({
  btnContainer: {
    backgroundColor: "#474554",
    borderRadius: 5,
    padding: 10,
    width: 200,
    margin: 10,
  },
  btnLabel: {
    color: "white",
    textAlign: "center",
  },
});

export default PrimaryButton;
