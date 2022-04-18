import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
//import styles from "../config/styles";
import Constants from "expo-constants";
import TopNav from "../components/TopNav";
import PurpleAppButton from "../components/PurpleAppButton";
import SmallPinkButton from "../components/SmallPinkButton";
import ProfilePic from "../components/ProfilePic";

const profile = [
  {
    image: require("../assets/girl1.png"),
  },
];
const UserHomeScreen = ({ navigation }) => {
  return (
    <View paddingTop={Constants.statusBarHeight}>
      <TopNav title="Your Dogs" />
      <View style={styles.box}>
        <ProfilePic image={require("../assets/peanut.png")}></ProfilePic>
        <Text style={[styles.text]}>Peanut</Text>
        <View style={{ flexDirection: "row" }}>
          <View />
          <View style={styles.spaceH} />
          <SmallPinkButton
            title={"View Profile"}
            nextScreen={"YourDogScreen"}
          />
          <View style={styles.spaceW} />
          <SmallPinkButton
            title={"Edit Profile"}
            nextScreen={"EditDogProfileScreen"}
          />
        </View>
      </View>

      <PurpleAppButton title={"Add New Dog"} />
    </View>
  );
};

export default UserHomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
  detailsContainer: {
    height: 500,
    width: 500,
    backgroundColor: "salmon",
    position: "absolute",
  },
  spaceW: {
    width: 50,
  },
  spaceH: {
    height: 100,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "Avenir-Medium",
  },
  box: {
    paddingTop: 40,
    height: "66.3%",
    width: "90%",
    backgroundColor: "white",
    alignSelf: "center",
    justifyContent: "center",
    marginVertical: 40,
    borderRadius: 25,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
  },
});
