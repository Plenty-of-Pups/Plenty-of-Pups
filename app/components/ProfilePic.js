import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

import ListItemSeparator from "../components/ListItemSeparator";
import colors from "../config/colors";

function ProfilePic({ image, name }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    padding: 5,
    marginVertical: 10,
    borderColor: colors.greytext,
  },
  detailsContainer: {
    flex: 1,
    justifyContent: "center",
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 180,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 30,
  },
  message: {
    color: colors.greytext,
  },
  name: {
    fontSize: 18,
    color: colors.black,
    fontWeight: "600",
    marginBottom: 5,
    fontFamily: "Avenir-Medium",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    color: colors.greytext,
  },
});

export default ProfilePic;
