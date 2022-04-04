import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import colors from '../config/colors';
import Icon from '../components/Icon';
import AppText from '../components/AppText';


const menuItems = [
    {
        title: "Text Size",
        lefticon: {
            name: "format-size",
            backgroundColor: colors.white,
            iconColor: colors.greytext
        },
        righticon: {
            name: "chevron-right",
            backgroundColor: colors.white,
            iconColor: colors.greytext,
            size: 60
        }
    },
    {
        title: "Screen Reader",
        lefticon: {
            name: "cellphone-sound",
            backgroundColor: colors.white,
            iconColor: colors.greytext
        },
        righticon: {
            name: "toggle-switch",
            backgroundColor: colors.white,
            iconColor: colors.pink,
            size: 85

        }
    }
]

function SettingScreen(props) {
    return (
        <View style={styles.backgroundContainer}>
            <Screen>
                <View style={styles.container}>

                    <ListItem
                        title="This is where the top nav comp will go"
                    />
                </View>

                <View style={styles.container}>
                    <AppText style={styles.title}>Accessibility</AppText>
                    <FlatList
                        data={menuItems}
                        keyExtractor={menuItem => menuItem.title}
                        renderItem={({ item }) =>
                            <ListItem
                                title={item.title}
                                leftIconComponent={
                                    <Icon name={item.lefticon.name}
                                        backgroundColor={item.lefticon.backgroundColor}
                                        iconColor={item.lefticon.iconColor} />
                                }
                                rightIconComponent={
                                    <Icon name={item.righticon.name}
                                        backgroundColor={item.righticon.backgroundColor}
                                        iconColor={item.righticon.iconColor}
                                        size={item.righticon.size} />
                                } />
                        }
                    />
                </View>
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
    title: {
        paddingTop: 5,
        paddingLeft: 5,
        fontWeight: "500"
    }
});

export default SettingScreen;