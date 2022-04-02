import React from 'react';
import Slider from '@react-native-community/slider';
import Screen from '../components/Screen';
import { StyleSheet, View, FlatList } from 'react-native';
import colors from '../config/colors';

function PreferencesScreen(props) {
  return(
    <View style={styles.backgroundContainer}>
    <Screen>
        <View style={styles.container}>
  <Slider
    style={{width: 200, height: 40}}
    minimumValue={0}
    maximumValue={1}
    minimumTrackTintColor="#FFFFFF"
    maximumTrackTintColor="#000000"
  />
  </View>
  </Screen>
  </View>);
}

const styles = StyleSheet.create({
  backgroundContainer: {
      backgroundColor: colors.lightgraybackground,
      flex: 1,
  }
});
export default PreferencesScreen;