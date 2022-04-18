import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import colors from "../config/colors";
import { Octicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";

function TopNav({ title, onPress, backgroundColor, rightIconColor }) {
  const navigation = useNavigation();

  const onPressLeft = () => {
    navigation.navigate("SettingScreen");
  };

  const onPressRight = () => {
    navigation.navigate("PreferencesScreen");
  };
  return (
    <View backgroundColor={backgroundColor} style={styles.toolbarContainer}>
      <TouchableOpacity
        backgroundColor={backgroundColor}
        style={styles.button}
        onPress={onPressLeft}
      >
        <Feather name="settings" color={colors.purple} size={30} />
      </TouchableOpacity>

      <Text style={styles.text}>{title}</Text>

      <TouchableOpacity
        backgroundColor={backgroundColor}
        style={styles.button}
        onPress={onPressRight}
      >
        <Octicons name="settings" size={30} color={colors.purple} />
      </TouchableOpacity>
    </View>
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
    fontWeight: "600",
    paddingTop: 2,
  },
  saveText: {
    fontWeight: "bold",
    marginLeft: 5,
    marginRight: 5,
  },
});

export default TopNav;
