import React, { useState } from 'react';
import { FlatList, View, StyleSheet, Platform, StatusBar } from 'react-native';



import Screen from '../components/Screen';
import MessageItem from '../components/MessageItem';
import ListItemSeparator from '../components/ListItemSeparator';
import ListItemDeleteAction from '../components/ListItemDeleteAction';
const initialMessages = [
    {
        id: 1,
        title: 'T1',
        description: 'D1',
        image: require('../assets/girl1.png')
    },
    {
        id: 2,
        title: 'T2',
        description: 'D2',
        image: require('../assets/girl2.png')
    },
]

function MessagesScreen(props) {
    const [messages, setMessages] = useState(initialMessages);
    const [refreshing, setRefreshing] = useState(false);


    const handleDelete = (message) => {
        //delete the message from messages
        setMessages(messages.filter((m) => m.id !== message.id));
    };

    return (
        <Screen>
            <FlatList
                data={messages}
                keyExtractor={message => message.id.toString()}
                renderItem={({ item }) => (
                    <MessageItem
                        title={item.title}
                        subTitle={item.description}
                        image={item.image}
                        onPress={() => console.log("Message selected", item)}
                        renderRightActions={() =>
                            <ListItemDeleteAction onPress={() => handleDelete(item)} />}
                    />
                )}
                ItemSeparatorComponent={ListItemSeparator}
                refreshing={refreshing}
                onRefresh={() => {
                    setMessages([
                        {
                            id: 2,
                            title: 'T2',
                            description: 'D2',
                            image: require('../assets/girl2.png')
                        },
                    ])
                }}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({


});

export default MessagesScreen;