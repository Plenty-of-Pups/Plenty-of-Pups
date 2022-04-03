import React, {useState} from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';


const PreferencesScreen = () => {
  const [sliderValue, setSliderValue] = useState(15);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
      <Text style={styles.header}>
        Match Preferences
        </Text>
        <Text style={styles.title}>
          {sliderValue} mi
        </Text>

        <Slider
          maximumValue={100}
          minimumValue={0}
          minimumTrackTintColor="#F17C87"
          maximumTrackTintColor="#EBEBEB"
          step={1}
          value={sliderValue}
          onValueChange={
            (sliderValue) => setSliderValue(sliderValue)
          }
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
  
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  title: {
    textAlign: 'right',
    color: '#8C8C8C',
    fontSize: 18,
  },
  header: {
    paddingTop: 0,
    textAlign: 'center',
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold'
  }

});

export default PreferencesScreen;