import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Pressable } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from "../config/colors";
import { StackActions } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/core';

function BackNavigation({ title, backgroundColor, nextScreen, rightIconColor }) {
  const popAction = StackActions.pop(1);
  const navigation = useNavigation();

  const onPressPop = () => {
    navigation.dispatch(popAction);
  }
  const onPressBack = () => {
    navigation.navigate("DiscoveryScreen");
  }
  return (



    <View backgroundColor={backgroundColor} style={styles.toolbarContainer}>

      {{ nextScreen } ? <TouchableOpacity backgroundColor={backgroundColor} style={styles.button} onPress={onPressBack}>
        <MaterialCommunityIcons name="chevron-left" color={colors.pink} size={40} />
        <Text style={styles.backText}>Back</Text></TouchableOpacity> : <TouchableOpacity backgroundColor={backgroundColor} style={styles.button} onPress={onPressPop}>
        <MaterialCommunityIcons name="chevron-left" color={colors.pink} size={40} />
        <Text style={styles.backText}>Back</Text>
      </TouchableOpacity>}

      <Text style={styles.text}>{title}</Text>

      <TouchableOpacity backgroundColor={backgroundColor} style={styles.button} onPress={onPressPop}>
        <Text style={{ color: rightIconColor, textAlignVertical: "center", fontWeight: "bold", marginRight: 5 }}>Save</Text>
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
    width: 45,
    flexDirection: "row",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  toolbarContainer: {
    alignSelf: "stretch",
    paddingTop: 15,
    paddingBottom: 5,
    paddingLeft: 15,
    paddingRight: 15,
    flexDirection: "row",

    //justifyContent: "flex-start",
    justifyContent: "space-between",


  },
  text: {
    color: colors.black,
    fontSize: 18,
    textAlign: "center",
    textAlignVertical: "center",
    fontWeight: "600",
    paddingTop: 9,
  },
  saveText: {
    fontWeight: "bold",
    marginLeft: 5,
    marginRight: 5,

  },
});

export default BackNavigation;