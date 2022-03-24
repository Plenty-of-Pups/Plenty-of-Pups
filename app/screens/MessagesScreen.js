import React from 'react';
import { FlatList, View, StyleSheet, Platform, StatusBar } from 'react-native';



import Screen from '../components/Screen';
import MessageItem from '../components/MessageItem';
const messages = [
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
                    />
                )}
            />
        </Screen>
        /*
           <View>
               <View style={styles.messageContainer}>
   
                   <MessageItem
                       title="Gaby Castellanos"
                       subTitle="5 Listings"
                       image={require("../assets/girl1.png")}
                   />
               </View>
   
           </View>
               */

    );
}

const styles = StyleSheet.create({

    messageContainer: {
        marginVertical: 40,
    }
});

export default MessagesScreen;