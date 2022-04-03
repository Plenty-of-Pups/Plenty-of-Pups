import React, {useState} from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';

const PreferencesScreen = () => {
  const [sliderValue, setSliderValue] = useState(50);

  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'space-between'}}>
      <View style={styles.backIcon}>
            <MaterialCommunityIcons name="keyboard-backspace" color={colors.pink} size={30} />
            <Text style={styles.backText}>Back</Text>
            <Text style={styles.saveText}>Save</Text>
        </View>
      <View style={styles.container}>
      <Text style={styles.header}>
        Match Preferences
        </Text>
        <Text style={styles.section}>
        Distance
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
        <Text style={styles.section}>
        Dog Gender
        </Text>
      
        <Text style={styles.section}>
        Dog Size
        </Text>
        <Text style={styles.section}>
        Dog Age
        </Text>
        <Text style={styles.section}>
        Neutered/Spayed
        </Text>
        <Text style={styles.section}>
        User Gender
        </Text>
        <Text style={styles.section}>
        User Age
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backIcon: {
    flexDirection: "row",
    position: "absolute",
    top: 50,
    left: 15,
},
  container: {
    //flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    top: -30,
    textAlign: 'right',
    color: '#8C8C8C',
    fontSize: 18, 
  },
  header: {
    //flex: 1,
    top: -15,
    //paddingTop: 0,
    textAlign: 'center',
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    
  },
  section: {
    paddingBottom: 30,
    top: 25,
    color: '#302C2C',
    fontSize: 18,
    textAlign: 'left',
    direction: 'ltr'
  },
  backText: {
    color: colors.pink,
    top: 6,
    fontWeight: 'bold',
    
},
saveText: {
  color: colors.pink,
  top: 6,
  left: 290,
  fontWeight: 'bold',
 
}

});

export default PreferencesScreen;