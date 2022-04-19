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
import { useRoute, useNavigation } from '@react-navigation/core';
import colors from '../config/colors';
import BackNavigation from '../components/BackNavigation';
import ProfileItem from '../components/DogProfileItem.js';
import Demo from '../assets/data/demo.js';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Constants from "expo-constants";

const OtherDogScreen = ({ dog }) => {

  const route = useRoute();
  return (

    <ScrollView style={styles.containerProfile} paddingTop={Constants.statusBarHeight}>
      <BackNavigation rightIconColor={colors.beigebackground} title={"Dog Profile"} />
      <ImageBackground source={{ uri: route.params?.dog.dogImage }} style={styles.photo}>


      </ImageBackground>

      <ProfileItem
        dogName={route.params?.dog.dogName}
        breed={route.params?.dog.breed}
        age={route.params?.dog.age}
        size={route.params?.dog.weight}
        neutered={route.params?.dog.neutered}
        hobby={route.params?.dog.hobby}
        snack={route.params?.dog.snack}
        info1={route.params?.dog.bio}
        gender={route.params?.dog.gender}
      />
    </ScrollView>
  );
};

export default OtherDogScreen;