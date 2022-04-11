import React from "react";
import { View, StyleSheet, Text, Button, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import colors from "../config/colors";

// import styles from "../config/styles";

function DiscoveryScreen(props) {
  return (
    <View style={styles.container}>
      <Screen>
        <ListItem title="Discovery"
          leftIconComponent={<TouchableOpacity backgroundColor={colors.lightgraybackground} style={styles.button}>
            <MaterialCommunityIcons name="settings" color={colors.pink} size={40} />
            </TouchableOpacity>}
          rightIconComponent={<TouchableOpacity backgroundColor={colors.lightgraybackground} style={styles.button}>
            <MaterialCommunityIcons name="chevron-left" color={colors.pink} size={40} />
            </TouchableOpacity>}
        />

        <Text>Discovery Screen</Text>
      </Screen>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F8F4F1",
  },
});

export default DiscoveryScreen;