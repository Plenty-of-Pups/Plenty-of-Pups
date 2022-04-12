import React, { useState } from "react";
import { View, StyleSheet, Text, Button, FlatList } from "react-native";
//import styles from "../config/styles";
import Constants from "expo-constants";
import MessageItem from '../components/MessageItem';
import ListItemSeparator from '../components/ListItemSeparator';
import ListItemDeleteAction from '../components/ListItemDeleteAction';
import PicIcon from '../components/PicIcon';
import TopNav from '../components/TopNav';
import ProfileItem from "../components/ProfileItem";
import PurpleAppButton from "../components/PurpleAppButton";
import PremiumCard from "../components/premiumCard";
import Screen from "../components/Screen";
import Icon from "../components/Icon";
import ImageInput from "../components/ImageInput";
import ImageInputList from "../components/ImageInputList";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from "../config/colors";
import PinkAppButton from "../components/PinkAppButton";
import { SubmitButton } from "../components/forms";
import SmallPinkButton from "../components/SmallPinkButton";
import FormImagePicker from "../components/forms/FormImagePicker";
import ProfilePic from "../components/ProfilePic";
const profile = [
  {
    image: require('../assets/girl1.png')
  }
]
const UserHomeScreen = ({ navigation }) => {
  return (

    <View >

      <View
        paddingTop={Constants.statusBarHeight}>
        <TopNav title="Your Dogs" />
        <View
          style={styles.backIcon}>

        </View>

        <View
          style={styles.box}>
          <ProfilePic image={require('../assets/peanut.png')}>
          </ProfilePic>
          <Text style={[styles.text]}>Peanut</Text>
          <View style={{ flexDirection: "row" }}>
            <View />
            <View style={styles.spaceH} />
            <SmallPinkButton title={"View Profile"} />
            <View style={styles.spaceW} />
            <SmallPinkButton title={"Edit Profile"} />
          </View>
        </View>

        <PurpleAppButton title={"Add New Dog"} />
      </View>

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
    backgroundColor: 'salmon',
    position: 'absolute',

  },
  spaceW: {
    width: 50
  },
  spaceH: {
    height: 100
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  box: {
    height: "66.3%",
    width: "90%",
    backgroundColor: "white",
    alignSelf: "center",
    justifyContent: "center",
    marginVertical: 40,
    borderRadius: 25,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 1,
    shadowRadius: 8,

  }

});