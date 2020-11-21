import React from 'react';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import { CadastroView } from './Cadastro_View/CadastroView';

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
    </Stack.Navigator>
  );
};

export default CadastrarScreen;
