import React from "react";
import { Text, StyleSheet } from "react-native";
import { ButtonContainer } from "./styles";

const PrimaryButton = (props) => {
  return (
    <ButtonContainer onPress={props.onPress}>
      <Text style={buttonStyle.btnLabel}>{props.label}</Text>
    </ButtonContainer>
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
