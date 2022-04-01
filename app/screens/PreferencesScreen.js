import { StatusBar } from "expo-status-bar"
import React, { useState } from "react"
import { StyleSheet, Text, View, Switch, Platform } from "react-native"

export default function PreferencesScreen() {
  const [enabled, setEnabled] = useState(false)

  const toggleSwitch = () => {
    setEnabled(oldValue => !oldValue)
  }

  const thumbColorOn = Platform.OS === "android" ? "#0cd1e8" : "#f3f3f3"
  const thumbColorOff = Platform.OS === "android" ? "#f04141" : "#f3f3f3"
  const trackColorOn = Platform.OS === "android" ? "#98e7f0" : "#0cd1e8"
  const trackColorOff = Platform.OS === "android" ? "#f3adad" : "#f04141"

  return (
    <View style={styles.container}>
      <Switch
        onValueChange={toggleSwitch}
        value={enabled}
        thumbColor={enabled ? thumbColorOn : thumbColorOff}
        trackColor={{ false: trackColorOff, true: trackColorOn }}
        ios_backgroundColor={trackColorOff}
      />
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  })