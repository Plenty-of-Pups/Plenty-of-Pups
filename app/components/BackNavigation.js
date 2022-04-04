import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from "../config/colors";

function BackNavigation({ title, onPress, backgroundColor, rightIconColor }) {
  return (


    <View backgroundColor={backgroundColor} style={styles.toolbarContainer}>


      <TouchableOpacity backgroundColor={backgroundColor} style={styles.button}>
        <MaterialCommunityIcons name="chevron-left" color={colors.pink} size={40} />
        <Text style={styles.backText}>Back</Text>
      </TouchableOpacity>

      <Text style={styles.text}>{title}</Text>

      <TouchableOpacity backgroundColor={backgroundColor} style={styles.button}>

        <Text style={{ color: rightIconColor, fontWeight: "bold", marginRight: 5 }}>Save</Text>
      </TouchableOpacity>



    </View >
  );
}

const styles = StyleSheet.create({
  backText: {
    fontWeight: "bold",
    color: colors.pink,
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
    paddingTop: 20,
    paddingBottom: 20,
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

export default BackNavigation;