
import React from 'react';
import { View, StyleSheet, Image, Text, Pressable } from 'react-native';
import { TouchableHighlight } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { Swipeable } from 'react-native-gesture-handler';



import colors from '../config/colors';
import AppText from './AppText';


function MessageItem({ name, message, image, time, numMessages, renderRightActions }) {

    const navigation = useNavigation();

    const onPress = () => {
        navigation.navigate('DMScreen');
    }

    return (


        <Swipeable renderRightActions={renderRightActions}>

            <TouchableHighlight
                underlayColor={colors.light}
                onPress={onPress}>

                <Pressable onPress={onPress} style={styles.container}>

                    {image && <Image style={styles.image} source={image} />}

                    {numMessages ? <View style={styles.badgeContainer}>
                        <Text style={styles.badgeText}>{numMessages}</Text>
                    </View> : null}

                    <View style={styles.detailsContainer}>
                        <View style={styles.row}>
                            <AppText style={styles.name}>{name}</AppText>
                            <AppText style={styles.text}>{time}</AppText>

                        </View>
                        {message && <Text numberOfLines={1} style={styles.message}>{message}</Text>}
                    </View>
                </Pressable>
            </TouchableHighlight>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    badgeContainer: {
        backgroundColor: colors.purple,
        width: 22,
        height: 22,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: 60,
        top: 10,
        borderWidth: 1,
        borderColor: colors.white
    },
    badgeText: {
        color: colors.white,
        fontSize: 10

    },
    container: {
        flexDirection: "row",
        padding: 10,
    },
    detailsContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginRight: 10,
    },
    message: {
        color: colors.greytext,
    },
    name: {
        fontSize: 18,
        color: colors.black,
        fontWeight: "600",
        marginBottom: 5,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    text: {
        color: colors.greytext,
    }


});



export default MessageItem;