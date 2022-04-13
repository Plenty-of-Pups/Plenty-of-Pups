import React from "react";
import { View, StyleSheet, Text, Button, TouchableOpacity, ImageBackground, Image } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import colors from "../config/colors";
import Constants from "expo-constants";
import TopNav from "../components/TopNav";
import Demo from '../assets/data/demo2.js';
import { Ionicons } from '@expo/vector-icons'; 
import { clickProps } from "react-native-web/dist/cjs/modules/forwardedProps";

// import styles from "../config/styles";

const DiscoveryScreen = () => {
  const {
    dogName,
    breed,
    age,
    distance,
    info1,
    gender,
    dogImage
  } = Demo[0];
  const {
    name,
    image
  } = Demo[8];
  
  return (
    <View paddingTop={Constants.statusBarHeight}>
      <TopNav title="Discovery" />
        <Screen backgroundColor={colors.beigebackground}>
          
          <View alignItems='center' paddingTop={15}>
            <Image source={dogImage} style={{height: 500, width: 350, borderRadius: 10, justifyContent: 'center'}}>
            </Image>
          </View>

          <View style={style.profileCard}>
            <Text style={style.dogName}>{dogName}</Text>
            <Image source={gender} style={style.genderIcon}></Image>
            <Image source={image} style={style.profileImage}></Image>
            <Text style={style.ownerName}>My human:</Text>
            <Text style={style.ownerName2}>{name}</Text>
            <Text style={style.line2}>{breed}, {age}</Text>
            <Ionicons style={style.pin} name="location-sharp" size={24} color={colors.pink} />
            <Text style={style.distance}>Distance: {distance}</Text>
            <Text style={style.bio}>{info1}</Text>
          </View>

          <TouchableOpacity style={[style.xButton, 
          { backgroundColor: colors.white }]}>
            <Ionicons name="md-close" size={40} color={colors.accent} />
          </TouchableOpacity>
          <TouchableOpacity style={[style.heartButton, 
          { backgroundColor: colors.pink }]}>
            <Ionicons name="ios-heart-outline" size={40} color={colors.white} />
          </TouchableOpacity>
        </Screen>
    </View>
  );
};


const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F8F4F1",
  },
  profileCard: {
		height: 190,
    width: 330,
    backgroundColor: "white",
    alignSelf: "center",
    justifyContent: "center",
    marginVertical: 40,
    borderRadius: 25,
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: .1,
    shadowRadius: 20,
    shadowColor: colors.black,
    position: 'absolute',
    marginTop: 410
  },
  dogName: {
    bottom: 65,
    left: 70,
		fontSize: 25,
	},
  genderIcon: {
    bottom: 90,
		left: 130,
		width: 20,
		height: 20,
  },
  profileImage: {
    left: 220,
		bottom: 70,
		width: 80,
		height: 80,
		borderRadius: 150 / 2,
    position: 'absolute'
  },
  ownerName: {
    position: 'absolute',
    left: 230,
    bottom: 50
  },
  ownerName2: {
    position: 'absolute',
    left: 235,
    bottom: 30
  },
  line2: {
    bottom: 125,
    left: 25,
		fontSize: 18,
    position: 'absolute'
	},
  pin: {
    position:'absolute',
    bottom: 94,
		left: 25,
		width: 20,
		height: 30,
  },
  distance: {
    bottom: 100,
    left: 50,
		fontSize: 18,
    position: 'absolute'
	},
  bio: {
    bottom: 20,
    left: 12,
		fontSize: 15,
    width: 200,
    position: 'absolute',
    color: colors.greytext,
    textAlign: 'center'
	},
  xButton: {
    borderRadius: 150/2,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    height: 70,
    width: 70,
    alignSelf: "center",
    marginVertical: -10,
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 1,
    shadowRadius: 8,
    position: 'absolute',
    top: 620,
    left: 100
  },
  heartButton: {
    borderRadius: 150/2,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    height: 70,
    width: 70,
    alignSelf: "center",
    marginVertical: -10,
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 1,
    shadowRadius: 8,
    position: 'absolute',
    top: 620,
    right: 100
  },
});

export default DiscoveryScreen;