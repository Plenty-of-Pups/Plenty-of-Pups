import React from 'react';
import { View, StyleSheet, Pressable, TouchableHighlight } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { TouchableOpacity } from 'react-native-gesture-handler';

import AppText from './AppText';

import colors from '../config/colors';

function ListItem({ title, leftIconComponent, rightIconComponent, nextScreen }) {
    const navigation = useNavigation();

    const onPress = () => {
        navigation.navigate(nextScreen);
    }
    return (

        <View style={styles.container}>
            {leftIconComponent}
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{title}</AppText>
            </View>

            {nextScreen ? <TouchableOpacity onPress={onPress} style={styles.rightContainer}>{rightIconComponent}</TouchableOpacity> : <TouchableOpacity style={styles.rightContainer}>{rightIconComponent}</TouchableOpacity>}
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        alignItems: "center",
        flexDirection: "row",
        height: 55,
        padding: 10,
    },
    detailsContainer: {
        flex: 1,
        marginLeft: 10,
        justifyContent: "center"
    },
    rightContainer: {
        marginLeft: 10,
        justifyContent: "center",
        height: 60,
        padding: 10
    },

    title: {
        fontWeight: "600",
    },

});



export default ListItem;