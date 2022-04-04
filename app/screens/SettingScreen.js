import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';


import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import colors from '../config/colors';
import Icon from '../components/Icon';
import AppText from '../components/AppText';
import PurpleAppButton from '../components/PurpleAppButton';
import BackNavigation from '../components/BackNavigation';


const accessibilityItems = [
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

const securityItems = [
    {
        title: "Password",
        lefticon: {
            name: "lock-outline",
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
        title: "Notifications",
        lefticon: {
            name: "bell-ring-outline",
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

const help = [
    {
        title: "FAQ",
        lefticon: {
            name: "information-outline",
            backgroundColor: colors.white,
            iconColor: colors.greytext
        },
        righticon: {
            name: "chevron-right",
            backgroundColor: colors.white,
            iconColor: colors.greytext,
            size: 60
        }
    }
]

const account = [
    {
        title: "Upgrade to Premium",
        lefticon: {
            name: "diamond-stone",
            backgroundColor: colors.white,
            iconColor: colors.greytext
        },
        righticon: {
            name: "chevron-right",
            backgroundColor: colors.white,
            iconColor: colors.greytext,
            size: 60
        }
    }
]

function SettingScreen(props) {
    return (
        <View style={styles.backgroundContainer}>
            <Screen>
                <BackNavigation title="Settings"
                    rightIconColor={colors.lightgraybackground}
                    backgroundColor={colors.lightgraybackground} />


                <View style={styles.container}>
                    <AppText style={styles.title}>Accessibility</AppText>
                    <FlatList
                        data={accessibilityItems}
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

                <View style={styles.container}>
                    <AppText style={styles.title}>Security</AppText>
                    <FlatList
                        data={securityItems}
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

                <View style={styles.container}>
                    <AppText style={styles.title}>Help</AppText>
                    <FlatList
                        data={help}
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

                <View style={styles.container}>
                    <AppText style={styles.title}>Account</AppText>
                    <FlatList
                        data={account}
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
                <View paddingTop={30}>
                    <PurpleAppButton title="Register"></PurpleAppButton>
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
        paddingLeft: 15,
        fontWeight: "700"
    }
});

export default SettingScreen;