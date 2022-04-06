import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons';
import colors from "../config/colors";
import { Octicons } from '@expo/vector-icons';

function TopNav({ title, onPress, backgroundColor, rightIconColor }) {
  return (


    <View backgroundColor={backgroundColor} style={styles.toolbarContainer}>


      <TouchableOpacity backgroundColor={backgroundColor} style={styles.button}>
        <Feather name="settings" color={colors.purple} size={40} />
        
      </TouchableOpacity>

      <Text style={styles.text}>{title}</Text>

      <TouchableOpacity backgroundColor={backgroundColor} style={styles.button}>
      <Octicons name="settings" size={40} color={colors.purple} />
      </TouchableOpacity>



    </View >
  );
}

const styles = StyleSheet.create({
  backText: {
    fontWeight: "bold",
    color: colors.purple,
    marginLeft: 5,
    marginRight: 5,

  },

  button: {
    width: 60,
    flexDirection: "row",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  toolbarContainer: {
    alignSelf: "stretch",
    paddingTop: 15,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: "row",
    //justifyContent: "flex-start",
    justifyContent: "space-between",
    //justifyContent: "space-evenly",

  },
  text: {
    color: colors.black,
    fontSize: 18,
    textAlign: "center",
    textAlignVertical: "center",
    fontWeight: "bold",
    paddingTop: 9
  },
  saveText: {
    fontWeight: "bold",
    marginLeft: 5,
    marginRight: 5,

  },
});

export default TopNav;