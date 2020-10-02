import React from 'react'
import { Text, View, StyleSheet } from "react-native";

const Spectacle = props => {

  const {spectacle} = props
  const {title, description, price, group, date, hour} = spectacle

  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <Text>{description}</Text>
      <Text>{group}</Text>
      <Text>{price}</Text>
      <Text>{date}</Text>
      <Text>{hour}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    borderColor: "blue",
    borderRadius: 5,
    borderWidth: 2
  },
})

export default Spectacle
