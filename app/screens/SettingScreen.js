import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import MessageItem from '../components/MessageItem';
import Screen from '../components/Screen';
import colors from '../config/colors';
import Icon from '../components/Icon';
import AppText from '../components/AppText';


const menuItems = [
    {
        title: "Text Size",
        icon: {
            name: "format-size",
            backgroundColor: colors.white,
            iconColor: colors.greytext
        }
    },
    {
        title: "Screen Reader",
        icon: {
            name: "cellphone-sound",
            backgroundColor: colors.white,
            iconColor: colors.greytext
        }
    }
]

function SettingScreen(props) {
    return (
        <View style={styles.backgroundContainer}>
            <Screen>
                <View style={styles.container}>

                    <MessageItem
                        title="Gaby"
                        subTitle="gaby@gmail.com"
                        image={require('../assets/girl1.png')}
                    />
                </View>

                <View style={styles.container}>
                    <AppText style={styles.title}>Accessibility</AppText>
                    <FlatList
                        data={menuItems}
                        keyExtractor={menuItem => menuItem.title}
                        renderItem={({ item }) =>
                            <MessageItem
                                title={item.title}
                                ImageComponent={
                                    <Icon name={item.icon.name}
                                        backgroundColor={item.icon.backgroundColor}
                                        iconColor={item.icon.iconColor} />
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
        marginVertical: 10,
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