import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../config/colors";

function SmallPinkButton({ title, onPress, color = "pink" }) {
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
