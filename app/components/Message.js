import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

import colors from '../config/colors';
import Screen from '../components/Screen';

const myID = 'u1';


const Message = ({ message }) => {

    const isMe = message.user.id === myID;

    return (
        <View>
            <View style={[styles.container, isMe ? styles.containerRight : styles.containerLeft]}>

                <Text style={{ color: isMe ? colors.black : colors.black }}>{message.content}</Text>
            </View>
        </View>

    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.purple,
        padding: 10,
        margin: 10,
        borderRadius: 10,
        maxWidth: '70%',
    },
    containerLeft: {
        backgroundColor: colors.lightgraybackground,
        marginLeft: 10,
        marginRight: 'auto'
    },
    containerRight: {
        backgroundColor: colors.pink,
        maxWidth: '70%',
        marginLeft: 'auto',
        marginRight: 10
    },
    image: {
        height: 30,
        width: 30,
        borderRadius: 15,
    },
    messageContainer: {
        flexDirection: 'row'
    },
    text: {
        color: colors.white,
    }
});

export default Message;