import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { boolean } from 'yup';
import Constants from "expo-constants";
import BackNavigation from '../components/BackNavigation';
import { Touchable } from 'react-native-web';




function PreferencesScreen() {
  const [sliderValue, setSliderValue] = useState(50);

  return (
    <View style={styles.background} paddingTop={Constants.statusBarHeight}>
      <BackNavigation title="Match Preferences" rightIconColor={colors.pink} />

      <View style={styles.section}></View>

      <View style={styles.section}>
        <Text style={styles.title}>Distance</Text>
        <Text style={styles.title2}>{sliderValue} mi</Text>
        <Slider
          maximumValue={100}
          minimumValue={0}
          minimumTrackTintColor="#F17C87"
          maximumTrackTintColor="#EBEBEB"
          step={1}
          value={sliderValue}
          onValueChange={(sliderValue) => setSliderValue(sliderValue)}
        />
        <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 15 }}>
          <View style={{ flex: 1, height: 2, backgroundColor: '#D8D8D8' }} />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Dog Gender</Text>
        <View style={{ flexDirection: 'row', paddingBottom: 20, justifyContent: 'space-around' }}>
          <BouncyCheckbox
            size={25}
            fillColor="#F17C87"
            unfillColor="#FFFFFF"
            text="Female"
            iconStyle={{ borderColor: "#F17C87" }}
            onPress={(isChecked = boolean) => { }}
          />
          <BouncyCheckbox
            size={25}
            fillColor="#F17C87"
            unfillColor="#FFFFFF"
            text="Male"
            iconStyle={{ borderColor: "#F17C87" }}
            onPress={(isChecked = boolean) => { }}
          />
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 15 }}>
          <View style={{ flex: 1, height: 2, backgroundColor: '#D8D8D8' }} />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Dog Size</Text>
        <Text style={styles.title2}>{sliderValue} lb</Text>
        <Slider
          maximumValue={100}
          minimumValue={0}
          minimumTrackTintColor="#F17C87"
          maximumTrackTintColor="#EBEBEB"
          step={1}
          value={sliderValue}
          onValueChange={(sliderValue) => setSliderValue(sliderValue)}
        />
        <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 15 }}>
          <View style={{ flex: 1, height: 2, backgroundColor: '#D8D8D8' }} />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Dog Age</Text>
        <Text style={styles.title2}>Age {sliderValue}</Text>
        <Slider
          maximumValue={100}
          minimumValue={0}
          minimumTrackTintColor="#F17C87"
          maximumTrackTintColor="#EBEBEB"
          step={1}
          value={sliderValue}
          onValueChange={(sliderValue) => setSliderValue(sliderValue)}
        />
        <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 15 }}>
          <View style={{ flex: 1, height: 2, backgroundColor: '#D8D8D8' }} />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Neutered/Spayed</Text>
        <View style={{ flexDirection: 'row', paddingBottom: 20, justifyContent: 'space-around' }}>
          <BouncyCheckbox
            size={25}
            fillColor="#F17C87"
            unfillColor="#FFFFFF"
            text="Yes"
            iconStyle={{ borderColor: "#F17C87" }}
            onPress={(isChecked = boolean) => { }}
          />
          <BouncyCheckbox
            size={25}
            fillColor="#F17C87"
            unfillColor="#FFFFFF"
            text="No"
            iconStyle={{ borderColor: "#F17C87" }}
            onPress={(isChecked = boolean) => { }}
          />
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 15 }}>
          <View style={{ flex: 1, height: 2, backgroundColor: '#D8D8D8' }} />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>User Gender</Text>
        <View style={{ flexDirection: 'row', paddingBottom: 20, justifyContent: 'space-around' }}>
          <BouncyCheckbox
            size={25}
            fillColor="#F17C87"
            unfillColor="#FFFFFF"
            text="Female"
            iconStyle={{ borderColor: "#F17C87" }}
            onPress={(isChecked = boolean) => { }}
          />
          <BouncyCheckbox
            size={25}
            fillColor="#F17C87"
            unfillColor="#FFFFFF"
            text="Male"
            iconStyle={{ borderColor: "#F17C87" }}
            onPress={(isChecked = boolean) => { }}
          />
          <BouncyCheckbox
            size={25}
            fillColor="#F17C87"
            unfillColor="#FFFFFF"
            text="Non-Binary"
            iconStyle={{ borderColor: "#F17C87" }}
            onPress={(isChecked = boolean) => { }}
          />
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 15 }}>
          <View style={{ flex: 1, height: 2, backgroundColor: '#D8D8D8' }} />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>User Age</Text>
        <Text style={styles.title2}>Age {sliderValue}</Text>
        <Slider
          maximumValue={100}
          minimumValue={0}
          minimumTrackTintColor="#F17C87"
          maximumTrackTintColor="#EBEBEB"
          step={1}
          value={sliderValue}
          onValueChange={(sliderValue) => setSliderValue(sliderValue)}
        />
        <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 10 }}>
          <View style={{ flex: 1, height: 2, backgroundColor: '#D8D8D8' }} />
        </View>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({

  background: {
    flex: 1,
    backgroundColor: 'white',

  },

  container: {
    paddingVertical: 30,
    alignItems: "center"
  },

  rowContainer: {
    flexDirection: 'row',
    marginTop: -50,
    paddingBottom: 20
  },

  backText: {
    color: colors.pink,
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  saveText: {
    color: colors.pink,
    fontWeight: 'bold',
    paddingLeft: 270,
  },

  header: {
    textAlign: 'center',
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },

  title: {
    color: 'black',
    fontSize: 18,
    fontWeight: '400',
    paddingBottom: 20
  },

  title2: {
    color: '#8C8C8C',
    fontSize: 18,
    fontWeight: '400',
    paddingLeft: 310,
    marginTop: -40
  },

  section: {
    paddingVertical: 10,
    color: '#302C2C',
    fontSize: 18,
    textAlign: 'left',
    direction: 'ltr'
  },

});

export default PreferencesScreen;