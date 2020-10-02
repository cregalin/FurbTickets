import React, {useState} from "react";
import { View, Text, ScrollView, TextInput, StyleSheet } from "react-native";
import { connect } from "react-redux";
import PrimaryButton from "../../components/buttons/Button";
import mock from './SpectaclesMock'
import Spectacle from '../../components/Spectacle'

const BuscarScreen = () => {

  const [query, setQuery] = useState('')
  // const [spectacles, setSpectacles] = useState([])
  const [spectacles, setSpectacles] = useState(mock)

  return (
    <View style={styles.container}>
      <Text>Busque espetáculos.</Text>
      <TextInput style={styles.input  } onChangeText={text => setQuery(text)}></TextInput>
      <ScrollView>
        {
          spectacles.map(spectacle => <Spectacle spectacle={spectacle} />)
        }
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24
  },
  input: {
    height: 30,
    backgroundColor: "white",
    marginBottom: 10,
    marginTop: 10,
    borderRadius: 5,
    borderLeftWidth: 2,
    borderLeftColor: "blue",
    paddingLeft: 5
  }
})

export default BuscarScreen;
