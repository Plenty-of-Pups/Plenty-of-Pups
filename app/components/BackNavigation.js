import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from "../config/colors";

function BackNavigation({ title, onPress, backgroundColor }) {
  return (


    <View backgroundColor={backgroundColor} style={styles.toolbarContainer}>


      <TouchableOpacity backgroundColor={backgroundColor} style={styles.button}>
        <MaterialCommunityIcons name="chevron-left" color={colors.pink} size={40} />
        <Text style={styles.backText}>Back</Text>
      </TouchableOpacity>

      <Text style={styles.text}>{title}</Text>

      <TouchableOpacity style={styles.button}>
        <MaterialCommunityIcons name="chevron-left" color={colors.lightgraybackground} size={40} />
        <Text style={styles.backText}>    </Text>
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
    paddingLeft: 15,
    paddingRight: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    color: colors.black,
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default BackNavigation;