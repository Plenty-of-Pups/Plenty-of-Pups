import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
// import styles from "../config/styles";

const UserHomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>User Home Screen</Text>
    </View>
  );
};

export default UserHomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F8F4F1",
  },
});
