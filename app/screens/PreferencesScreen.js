import React from 'react';
import Slider from '@react-native-community/slider';
import Screen from '../components/Screen';
import { StyleSheet, View, FlatList } from 'react-native';
import colors from '../config/colors';
import AppText from '../components/AppText';

function PreferencesScreen(props) {
  return(
    <View style={styles.backgroundContainer}>
    <Screen>
        <View style={styles.container}>
        <AppText style={styles.title}>Match Preferences</AppText>
  <Slider
    style={{width: 400, height: 40}}
    minimumValue={0}
    maximumValue={1}
    minimumTrackTintColor="#F17C87"
    maximumTrackTintColor="#EBEBEB"
  />
  </View>
  </Screen>
  </View>);
}

const styles = StyleSheet.create({
  backgroundContainer: {
      backgroundColor: colors.white,
      flex: 1,
      padding: 10, 
      justifyContent: 'center',
      alignItems: 'center',
  },
  title: {
    paddingTop: 5,
    textAlign: 'center',
    fontWeight: 'bold'
    
}
});
export default PreferencesScreen;