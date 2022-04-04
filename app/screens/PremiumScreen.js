import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import PremiumCard from '../components/premiumCard';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';
import Screen from '../components/Screen';
import BackNavigation from '../components/BackNavigation';

function PremiumScreen(props) {
    return (
        <View style={{
            backgroundColor: colors.beigebackground,
            flex: 1,
            justifyContent: "center",
        }}>

            <Screen>

                <BackNavigation rightIconColor={colors.beigebackground} backgroundColor={colors.beigebackground}></BackNavigation>
                <PremiumCard
                    title="Premium features coming soon!"
                />
            </Screen>

        </View>

    );
}



export default PremiumScreen;



