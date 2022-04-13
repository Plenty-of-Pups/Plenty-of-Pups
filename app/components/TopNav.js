import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Pressable } from "react-native";
import { Feather } from '@expo/vector-icons';
import colors from "../config/colors";
import { Octicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';

function TopNav({ title, nextScreen, backgroundColor, rightIconColor }) {

  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate(nextScreen);
  }

  return (


    <View backgroundColor={{ backgroundColor }} style={{
      flexDirection: 'row',
      flex: 1,
      marginHorizontal: 0,
      fill: "100",
      justifyContent: 'space-between',
      padding: 10,
      alignItems: 'center',
      right: 0,
      left: 0
    }}>


      <TouchableOpacity backgroundColor={backgroundColor} style={styles.button1} onPress={onPress}>
        <Feather name="settings" color={colors.purple} size={30} />

      </TouchableOpacity>

      <Text style={styles.text}>{title}</Text>

      <TouchableOpacity backgroundColor={backgroundColor} style={styles.button2}>
        <Octicons name="settings" size={30} color={colors.purple} />
      </TouchableOpacity>



    </View >
  );
}

const styles = StyleSheet.create({

  button1: {
    width: 30,
    //flexDirection: "row",
    left: 0,
    borderRadius: 25,


  },
  button2: {
    width: 30,
    marginRight: 15,
    marginHorizontal: 5,
    borderRadius: 25,

  },
  toolbarContainer: {
    // alignSelf: "stretch",
    paddingTop: 10,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    //justifyContent: "space-evenly",
    width: '100%'

  },
  text: {
    color: colors.black,
    fontSize: 18,
    textAlign: "center",
    textAlignVertical: "center",
    fontWeight: "bold",
  },
});

export default TopNav;