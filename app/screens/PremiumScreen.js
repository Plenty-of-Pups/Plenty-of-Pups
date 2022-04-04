import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import PremiumCard from '../components/premiumCard';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';

function PremiumScreen(props) {
    return <View style={{
        backgroundColor: colors.beigebackground,
        flex: 1,
    }}>
        <View style={styles.backIcon}>
            <MaterialCommunityIcons name="keyboard-backspace" color={colors.pink} size={30} />
            <Text style={styles.backText}>Back</Text>
        </View>
        <PremiumCard
            title="Premium features coming soon!"
        />
    </View>

};

const styles = StyleSheet.create({
    backIcon: {
        flexDirection: "row",
        position: "absolute",
        top: 50,
        left: 15,
    },
    backText: {
        color: colors.pink,
        top: 6,

    }
})

export default PremiumScreen;



