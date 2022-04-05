import React from 'react';
import styles from '../assets/styles';
import { Text, View, Image} from 'react-native';
import Demo from '../assets/data/demo.js';
const ProfileItem = ({
  age,
  info1,
  location,
  name,
  dog,
  dogImage
}=Demo[8]) => {
  return (
    <View style={styles.containerProfileItem}>

      <Text style={styles.name}>{name}, {age}</Text>

      <Text style={styles.descriptionProfileItem}>
        {location}
      </Text>
      <Text style={styles.bioContent}>Bio: </Text>
      <View style={styles.info}>
        <Text style={styles.iconProfile}>
        </Text>
        <Text style={styles.infoContent}>{info1}</Text>
      </View>
      <Text style={styles.bioContent}>My pup </Text>
      <Image source ={dogImage} style={styles.circle}></Image>
      <View style={styles.info}>
      <Text style={styles.dogName}>{dog}</Text>
      </View>
    </View>
  );
};

export default ProfileItem;
