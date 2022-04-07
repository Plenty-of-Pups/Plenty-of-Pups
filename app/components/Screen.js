import React from "react";
import Constants from "expo-constants";
import { StyleSheet, SafeAreaView, View } from "react-native";

function Screen({ children }) {
  return (
    <SafeAreaView style={[styles.screen]}>
      <View style={[styles.view]}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
  view: {
    flex: 1,
    justifyContent: 'space-around'
  },
});

export default Screen;
