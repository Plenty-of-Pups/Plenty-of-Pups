import React, { useState, useEffect } from 'react';
import styles from '../assets/styles';
import { DataStore } from '@aws-amplify/datastore';
import { Dog } from "../../src/models"
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
import { useRoute, useNavigation } from '@react-navigation/core';
import BackNavigation from '../components/BackNavigation';
import Demo from '../assets/data/demo.js';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';

const HumanProfileScreen = ({ user }) => {
  const route = useRoute();
  const navigation = useNavigation();



  const {
    age,

    info1,
    location,
    name,

    dogImage
  } = Demo[8];

  const [dog, setDogs] = useState([Dog]);

  useEffect(() => {
    const fetchUsers = async () => {
      const fetchedUsers = await DataStore.query(Dog);
      setDogs(fetchedUsers);
    };
    fetchUsers();
  }, []);

  return (



    <ScrollView style={styles.containerProfile} paddingTop={Constants.statusBarHeight}>
      <BackNavigation rightIconColor={colors.beigebackground} title={"Human Profile"} />
      <ImageBackground source={{ uri: route.params?.user.imageUri }} style={styles.photo}>

      </ImageBackground>

      <ProfileItem
        name={route.params?.user.name}
        age={route.params?.user.age}
        location={route.params?.user.distance}
        info1={route.params?.user.bio}
        dog={route.params?.user.Dog}
      />
    </ScrollView>
  );
};

export default HumanProfileScreen;