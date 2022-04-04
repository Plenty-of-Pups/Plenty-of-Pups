import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';


function PremiumCard({ title, image }) {
    return (
        <View style={styles.card}>
            <View style={styles.detailsContainer}>

                <AppText style={styles.title}>{title}</AppText>
            </View>
            <Image style={styles.image} source={require("../assets/premiumlogo.png")} />
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: colors.white,
        overflow: "hidden",
        marginVertical: 150,
        marginHorizontal: 20,
        margin: 10,

    },
    detailsContainer: {
        padding: 20,

    },
    image: {
        width: "100%",
        height: 200,
    },

    title: {
        marginTop: 7,
        marginBottom: 7,
        color: colors.greytext,
        fontWeight: "bold",
        fontSize: 19,
        alignSelf: "center",

    }
})
export default PremiumCard;