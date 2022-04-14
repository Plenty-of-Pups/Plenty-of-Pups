import React from 'react';
import styles from '../assets/styles';
import Constants from "expo-constants";
import {
  ScrollView,
  View,
  Text,
  ImageBackground,
  TouchableOpacity
} from 'react-native';
import ProfileItem from '../components/ProfileItem.js';
import Demo from '../assets/data/demo.js';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import BackNavigation from '../components/BackNavigation';
import colors from '../config/colors';

const YourProfileScreen = () => {
  const {
    age,
    image,
    info1,
    location,
    name,
    dog,
    dogImage
  } = Demo[7];

  return (

    <ScrollView style={styles.containerProfile} paddingTop={Constants.statusBarHeight}>
      <BackNavigation title={"View Your Profile"} rightIconColor={colors.beigebackground} />
      <ImageBackground source={image} style={styles.photo}>

      </ImageBackground>

      <ProfileItem
        name={name}
        age={age}
        location={location}
        info1={info1}
        dog={dog}
        dogImage={dogImage}
      />
    </ScrollView>
  );
};

export default YourProfileScreen;