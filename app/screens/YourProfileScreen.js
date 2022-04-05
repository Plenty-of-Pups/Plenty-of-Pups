import React from 'react';
import styles from '../assets/styles';

import {
  ScrollView,
  View,
  Text,
  ImageBackground,
  TouchableOpacity
} from 'react-native';
import ProfileItem from '../components/ProfileItem.js';
import Icon2 from '../components/Icon2.js';
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
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{ flex: 1, height: 100, backgroundColor: '#FFFFFF'}} />
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