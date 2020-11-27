import React from 'react';
import 'react-native-gesture-handler';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import reducer from './reducers/TicketReducer';
import mySaga from './saga/saga';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import HomeScreen from './features/screens/home_screen/HomeScreen';
import EscolherTicket from './features/screens/comprar_ticket/EscolherTicket';
import BuscarScreen from './features/screens/buscar_screen/BuscarScreen';
import ShowList from './features/screens/buscar_screen/ShowList';
import EscolherCadeira from './features/screens/escolher_cadeira/EscolherCadeira';
import CadastroSala from './features/screens/cadastrar_screen/Cadastro_Sala/CadastroSala';
import IngressoScreen from './features/screens/ingresso_screen/IngressoScreen';
import SpectacleScreen from './features/screens/spectacle_screen/SpectacleScreen';
import FinalizarCompra from './features/screens/finalizar_compra/FinalizarCompra';
import { CadastroAddSession } from './features/screens/cadastrar_screen/Cadastro_AddSession/CadastroAddSession';
import { CadastroView } from './features/screens/cadastrar_screen/Cadastro_View/CadastroView';

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
            options={{ title: 'FITUB', headerTitleAlign: 'center' }}
          />
          <Stack.Screen
            name="Buscar"
            component={BuscarScreen}
            options={{ title: 'Buscar Espetáculo', headerTitleAlign: 'right' }}
          />
          <Stack.Screen
            name="Lista"
            component={ShowList}
            options={{
              title: 'Escolher Espetáculo',
              headerTitleAlign: 'right',
            }}
          />
          <Stack.Screen
            name="CadastrarEspetaculo"
            component={CadastroView}
            options={{
              title: 'Cadastrar Espetáculo',
              ...TransitionPresets.SlideFromRightIOS,
            }}
          />
          <Stack.Screen
            name="CadastrarSala"
            component={CadastroSala}
            options={{
              title: 'Cadastrar Sala',
              headerTitleAlign: 'right',
            }}
          />
          <Stack.Screen
            name="EscolherTicket"
            component={EscolherTicket}
            options={{
              title: 'Comprar Ticket',
              headerTitleAlign: 'right',
            }}
          />
          <Stack.Screen
            name="FinalizarCompra"
            component={FinalizarCompra}
            options={{
              title: 'Finalizar Compra',
              headerTitleAlign: 'right',
            }}
          />
          <Stack.Screen
            name="Ingresso"
            component={IngressoScreen}
            options={{
              title: 'Ingresso',
              headerTitleAlign: 'right',
            }}
          />
          <Stack.Screen
            name="EscolherCadeira"
            component={EscolherCadeira}
            options={{
              title: 'Escolher Cadeira',
              headerTitleAlign: 'right',
            }}
          />
          <Stack.Screen
            name="Show"
            component={SpectacleScreen}
            options={{
              title: 'Espetáculo',
              headerTitleAlign: 'right',
            }}
          />
          <Stack.Screen
            name="CadastrarSessao"
            component={CadastroAddSession}
            options={{
              title: 'Sessões',
              headerTitleAlign: 'right',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
