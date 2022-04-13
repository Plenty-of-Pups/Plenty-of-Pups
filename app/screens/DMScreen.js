import React from 'react';
import { Text, StyleSheet } from 'react-native';

import colors from '../config/colors';
import Screen from '../components/Screen';
import Message from '../components/Message';
import chatRoomData from '../assets/Chats'
import { FlatList } from 'react-native-gesture-handler';
import MessageInput from '../components/MessageInput';
import { useRoute } from '@react-navigation/core';


export default function DMScreen() {
    const route = useRoute();

    console.warn("Displaying chatroom: ", route.params?.id)

    return (

        <Screen>

            <FlatList
                data={chatRoomData.messages}
                renderItem={({ item }) => <Message message={item} />}
                inverted
            />
            <MessageInput />
        </Screen>
    );
}


const styles = StyleSheet.create({
    backgroundContainer: {
        backgroundColor: colors.white,
        flex: 1,
    },
});

