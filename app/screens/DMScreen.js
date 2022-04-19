import React from 'react';
import { Text, StyleSheet, useWindowDimensions, View, Image, } from 'react-native';

import colors from '../config/colors';
import Screen from '../components/Screen';
import Message from '../components/Message';
import chatRoomData from '../assets/Chats'
import { FlatList } from 'react-native-gesture-handler';
import MessageInput from '../components/MessageInput';
import { useRoute, useNavigation } from '@react-navigation/core';


export default function DMScreen() {
    const route = useRoute();
    const navigation = useNavigation();

    const dmHeader = (props) => {
        const { width } = useWindowDimensions();
        return (
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width,
                padding: 10,
                alignItems: 'center'
            }}>
                <Image
                    source={{ uri: route.params?.user.imageUri }}
                    style={{ width: 30, height: 30, borderRadius: 30, marginLeft: -30 }}
                />
                <Text style={{ flex: 1, textAlign: 'left', marginLeft: 10, fontWeight: 'bold' }}>{props.children}</Text>
            </View >
        )
    }

    navigation.setOptions({ headerTitle: dmHeader, title: route.params?.user.name })

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

