import "react-native-gesture-handler";
import React from "react";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";
import reducer from "./reducers/TicketReducer";
import mySaga from "./saga/saga";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./features/screens/home_screen/HomeScreen";
import BuscarScreen from "./features/screens/buscar_screen/BuscarScreen";
import SpectacleList from "./features/screens/buscar_screen/SpectacleList";
import CadastrarScreen from "./features/screens/cadastrar_screen/CadastrarScreen";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(mySaga);

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: "FITUB", headerTitleAlign: "center" }}
          />
          <Stack.Screen
            name="Buscar"
            component={BuscarScreen}
            options={{ title: "Buscar Espetáculo", headerTitleAlign: "right" }}
          />
          <Stack.Screen
            name="Lista"
            component={SpectacleList}
            options={{ title: "Escolher Espetáculo", headerTitleAlign: "right" }}
          />
          <Stack.Screen
            name="Cadastrar"
            component={CadastrarScreen}
            options={{
              title: "Cadastrar Espetáculo",
              headerTitleAlign: "right",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
