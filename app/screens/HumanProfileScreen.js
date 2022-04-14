import React from 'react';
import styles from '../assets/styles';
import {
  ScrollView,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image
} from 'react-native';
import Constants from "expo-constants";
import ProfileItem from '../components/ProfileItem.js';
import BackNavigation from '../components/BackNavigation';
import Demo from '../assets/data/demo.js';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';

const HumanProfileScreen = () => {
  const {
    age,
    image,
    info1,
    location,
    name,
    dog,
    dogImage
  } = Demo[8];

  return (

    <ScrollView style={styles.containerProfile} paddingTop={Constants.statusBarHeight}>
      <BackNavigation rightIconColor={colors.beigebackground} title={name} />
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

export default HumanProfileScreen;