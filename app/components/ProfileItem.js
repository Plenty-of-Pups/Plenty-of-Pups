import React from 'react';
import styles from '../assets/styles';
import { Text, View, Image, Pressable, TouchableOpacity } from 'react-native';
import Demo from '../assets/data/demo.js';
import { useNavigation } from '@react-navigation/core';
function ProfileItem({
  age,
  info1,
  location,
  name,
  dog,
}) {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("OtherDogScreen", { dog });
  }


  return (
    <View style={styles.containerProfileItem}>

      <Text style={styles.name}>{name}, {age}</Text>
      <Text style={styles.descriptionProfileItem}>{location} miles away</Text>

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={{ flex: 1, height: 1, backgroundColor: '#D8D8D8' }} />
      </View>

      <View style={styles.dogInfo}>
        <Text style={styles.bioContent}>Bio: </Text>
      </View>
      <Text style={styles.infoContent}>{info1}</Text>

      <View style={styles.info}>
        <Text style={styles.iconProfile}></Text>
      </View>

      <View style={styles.dogInfo}>
        <Text style={styles.bioContent}>My pup </Text>

        <TouchableOpacity onPress={onPress} >

          <Image source={{ uri: dog.dogImage }} style={styles.circle}></Image>

        </TouchableOpacity>

      </View>


      <View style={styles.info}>
        <Text style={styles.dogName}>{dog.dogName}</Text>
      </View>
    </View>
  );
};

export default ProfileItem;
