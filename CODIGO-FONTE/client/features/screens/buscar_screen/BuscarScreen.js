import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, TextInput, StyleSheet } from "react-native";
import * as S from './styles'
import { connect } from "react-redux";
import mock from "./SpectaclesMock";
import Spectacle from "../../components/Spectacle/Spectacle";

const BuscarScreen = () => {
  const [query, setQuery] = useState("");
  // const [spectacles, setSpectacles] = useState([])
  const [spectacles, setSpectacles] = useState(mock);
  const [filteredSpectacles, setFilteredSpectacles] = useState([])

  useEffect(() => {
    setFilteredSpectacles(spectacles.filter(spectacle => spectacle.title.toUpperCase().includes(query.toUpperCase())))
  }, [query, spectacles])

  return (
    <S.Container style={styles.container}>
      <Text>Busque espetáculos.</Text>
      <S.Input
        style={styles.input}
        onChangeText={(text) => setQuery(text)}
      >
      <ScrollView>
        {filteredSpectacles.map((spectacle) => (
          <Spectacle spectacle={spectacle} />
        ))}
      </ScrollView>
    </S.Container>
  );
};

export default BuscarScreen;
