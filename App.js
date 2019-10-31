import React from "react"
import { View, Text, StyleSheet } from "react-native"
import Icon from "react-native-vector-icons/Ionicons"

const App = () => {
  return (
    <View style={styles.body}>
      <Text>Ini halaman awal</Text>
      <Icon name="ios-trash" size={50} />
    </View>
  )
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#fff",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  }
})

export default App
