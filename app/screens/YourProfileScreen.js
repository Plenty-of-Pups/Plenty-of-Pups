import React from 'react';
import styles from '../assets/styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {
  ScrollView,
  View,
  Text,
  ImageBackground,
  TouchableOpacity
} from 'react-native';
import ProfileItem from '../components/ProfileItem.js';
import Demo from '../assets/data/demo.js';


const YourProfileScreen = () => {
  const {
    age,
    image,
    info1,
    info2,
    info3,
    info4,
    location,
    match,
    name
  } = Demo[7];

  return (
    
      <ScrollView style={styles.containerProfile}>
        <ImageBackground source={image} style={styles.photo}>
        <View style={styles.backIcon}>
            <MaterialCommunityIcons name="keyboard-backspace" size={30} />
            <Text style={{color:"#F17C87"}}>Back</Text>
      </View>
          <View style={styles.top}>

            <TouchableOpacity>
              
            </TouchableOpacity>

          </View>
        </ImageBackground>

        <ProfileItem
          //matches={match}
          name={name}
          age={age}
          //location={location}
          info1={info1}
          //info2={info2}
          //info3={info3}
          //info4={info4}
        />

      </ScrollView>
  );
};

export default YourProfileScreen;