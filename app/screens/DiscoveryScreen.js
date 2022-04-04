import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
// import styles from "../config/styles";

const DiscoveryScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Discovery Screen</Text>
    </View>
  );
};

export default DiscoveryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F8F4F1",
  },
});
