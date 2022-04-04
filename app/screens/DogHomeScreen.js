import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
// import styles from "../config/styles";

const DogHomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Dog Home Screen</Text>
    </View>
  );
};

export default DogHomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F8F4F1",
  },
});
