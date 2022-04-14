import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import PremiumCard from '../components/premiumCard';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';
import Screen from '../components/Screen';
import Constants from "expo-constants";
import BackNavigation from '../components/BackNavigation';

function PremiumScreen(props) {
    return (
        <View style={{
            backgroundColor: colors.beigebackground,
            flex: 1,

            paddingTop: Constants.statusBarHeight
        }}>

            <BackNavigation rightIconColor={colors.beigebackground} backgroundColor={colors.beigebackground}></BackNavigation>
            <PremiumCard
                title="Premium features coming soon!"
            />


        </View>

    );
}



export default PremiumScreen;



