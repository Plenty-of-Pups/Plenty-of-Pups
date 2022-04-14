import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../config/colors";
import { useNavigation } from '@react-navigation/core';

function SmallPinkButton({ title, nextScreen, color = "pink" }) {

    const navigation = useNavigation();

    const onPress = () => {
        navigation.navigate(nextScreen);
    }
    return (
        <TouchableOpacity
            style={[styles.button, { backgroundColor: colors[color] }]}
            onPress={onPress}
        >
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.pink,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        padding: 9,
        width: "35%",
        alignSelf: "center",
        marginVertical: 40,
        shadowColor: "grey",
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 1,
        shadowRadius: 8,
        left: 30,
    },
    text: {
        color: colors.white,
        fontSize: 18,
        textTransform: "uppercase",
        fontWeight: "bold",
    },

});

export default SmallPinkButton;
