import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import Screen from '../components/Screen';
import colors from '../config/colors';
import Icon from '../components/Icon';
import AppText from '../components/AppText';
import PinkAppButton from '../components/PinkAppButton';
import BackNavigation from '../components/BackNavigation';


function FAQScreen(props) {

    return (
        <View style={styles.backgroundContainer}>
            <Screen>
                <BackNavigation title="FAQ"
                    rightIconColor={colors.lightgraybackground}
                    backgroundColor={colors.lightgraybackground} />
            </Screen>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {

        borderRadius: 15,
        backgroundColor: colors.white,
        marginHorizontal: 15,
        marginVertical: 10
    },
    backgroundContainer: {
        backgroundColor: colors.lightgraybackground,
        flex: 1,
    },
});

export default FAQScreen;