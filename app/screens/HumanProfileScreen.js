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
import ProfileItem from '../components/ProfileItem.js';
import Demo from '../assets/data/demo.js';
import { MaterialCommunityIcons } from '@expo/vector-icons';

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
    
      <ScrollView style={styles.containerProfile}>
        <ImageBackground source={image} style={styles.photo}>
          <View style={styles.top}>
            <TouchableOpacity>
              <View style={styles.backIcon}>
               <MaterialCommunityIcons name="keyboard-backspace" color="#F17C87" size={40} />
              </View>
              
            </TouchableOpacity>
          </View>
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