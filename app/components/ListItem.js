import React from 'react';
import { View, StyleSheet, TouchableHighlight } from 'react-native';

import AppText from './AppText';

import colors from '../config/colors';

function ListItem({ title, leftIconComponent, rightIconComponent, onPress }) {
    return (

        <View style={styles.container}>
            {leftIconComponent}
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{title}</AppText>
            </View>
            <View style={styles.rightContainer}>

                {rightIconComponent}
            </View>
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