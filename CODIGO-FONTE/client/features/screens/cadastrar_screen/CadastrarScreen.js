import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { CadastroView } from "./Cadastro_View/CadastroView";
import { CadastroAddSession } from "./Cadastro_AddSession/CadastroAddSession";

const Stack = createStackNavigator();

const CadastrarScreen = () => {
  return (
    <Stack.Navigator initialRouteName="Cadastro_View">
      <Stack.Screen
        name="Cadastro_View"
        component={CadastroView}
        options={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <Stack.Screen
        name="Cadastro_AddSession"
        component={CadastroAddSession}
        options={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
    </Stack.Navigator>
  );
};

export default CadastrarScreen;
