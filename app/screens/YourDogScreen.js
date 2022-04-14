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
import ProfileItem from '../components/DogProfileItem.js';
import Demo from '../assets/data/demo.js';
import Constants from "expo-constants";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import BackNavigation from '../components/BackNavigation';
import colors from '../config/colors';

const YourDogScreen = () => {
  const {
    age,
    image,
    info1,
    breed,
    dogName,
    size,
    neutered,
    hobby,
    snack,
    gender,
  } = Demo[1];

  return (

    <ScrollView style={styles.containerProfile} paddingTop={Constants.statusBarHeight}>
      <BackNavigation title={"View Pets Profile"} rightIconColor={colors.beigebackground} />
      <ImageBackground source={image} style={styles.photo}>


      </ImageBackground>

      <ProfileItem
        dogName={dogName}
        breed={breed}
        age={age}
        size={size}
        neutered={neutered}
        hobby={hobby}
        snack={snack}
        info1={info1}
        gender={gender}
      />
    </ScrollView>
  );
};

export default YourDogScreen;