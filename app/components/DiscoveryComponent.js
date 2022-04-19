/*import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Button, TouchableOpacity, ImageBackground, Image } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Screen from "../components/Screen";
import { DataStore } from '@aws-amplify/datastore';
import { User } from "../../src/models"
import ListItem from "../components/ListItem";
import colors from "../config/colors";
import Constants from "expo-constants";
import TopNav from "../components/TopNav";
import Demo from '../assets/data/demo2.js';
import { useNavigation } from '@react-navigation/core';
import { Ionicons } from '@expo/vector-icons';


const DiscoveryComponent = ({ user }) => {
    const {
        dogName,
        breed,
        age,
        distance,
        info1,
        gender,
        dogImage,
        match
    } = Demo[0];
    const {
        name,
        image
    } = Demo[8];
    return (
        <View backgroundColor={colors.black}>
            <View alignItems='center' paddingTop={15}>
                <Image source={dogImage} style={{ height: 500, width: 350, borderRadius: 10, justifyContent: 'center' }}>
                </Image>
            </View>

            <View style={style.profileCard}>
                <Text style={style.dogName}>{dogName}</Text>
                <Image source={gender} style={style.genderIcon}></Image>
                <View marginTop={125}>
                    <TouchableOpacity>

                        <Image source={dogImage} style={style.profileImage}></Image>
                        <Text style={style.ownerName}>My human:</Text>
                        <Text style={style.ownerName2}>{name}</Text>
                    </TouchableOpacity>

                </View>
                <Text style={style.line2}>{breed}, {age}</Text>
                <Ionicons style={style.pin} name="location-sharp" size={24} color={colors.pink} />
                <Text style={style.distance}>Distance: {distance}</Text>
                <Text style={style.bio}>{info1}</Text>
            </View>
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
        left: 70,
        fontSize: 25,
    },
    genderIcon: {
        bottom: 25,
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
        position: 'absolute',
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
        borderRadius: 150 / 2,
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
        top: 590,
        left: 80
    },
    heartButton: {
        borderRadius: 150 / 2,
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
        top: 590,
        right: 80
    },
});

export default DiscoveryComponent;
*/

import React from 'react';
import { Text, ImageBackground, View, StyleSheet } from 'react-native';
import Constants from "expo-constants";
const DiscoveryComponent = props => {
    const { name, image, bio } = props.user;
    return (
        <View style={styles.card}>
            <ImageBackground
                source={{
                    uri: image,
                }}
                style={styles.image}>
                <View style={styles.cardInner}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.bio}>{bio}</Text>
                </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
        backgroundColor: '#fefefe',

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,

        elevation: 11,
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
        overflow: 'hidden',

        justifyContent: 'flex-end',
    },
    cardInner: {
        padding: 10,
    },
    name: {
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold',
    },
    bio: {
        fontSize: 18,
        color: 'white',
        lineHeight: 25,
    },
});

export default DiscoveryComponent;