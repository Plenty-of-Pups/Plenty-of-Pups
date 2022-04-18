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
      <TopNav title="Your Profile" />
      <View style={styles.box}>
        <ProfilePic image={require("../assets/girl1.png")}></ProfilePic>
        <View style={{ flexdirection: "row" }}>
          <View style={styles.nameContainer}>
            <Text style={[styles.text]}>Aurora</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.spaceH} />
          <SmallPinkButton
            title={"View Profile"}
            nextScreen={"YourProfileScreen"}
          />
          <View style={styles.spaceW} />
          <SmallPinkButton
            title={"Edit Profile"}
            nextScreen={"EditUserProfileScreen"}
          />
        </View>
      </View>

      <View style={styles.spaceH} />
      <PurpleAppButton title={"Log Out"} nextScreen={"LoginScreen"} />
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
  nameContainer: {
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    padding: -10,
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
    height: "60%",
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
