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
import { MaterialCommunityIcons } from '@expo/vector-icons';

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