import React, { useState, useEffect } from "react";
import { DataStore } from '@aws-amplify/datastore';
import { User } from "../../src/models"
import {
  FlatList,
  View,
  StyleSheet,
  Text,
  Platform,
  StatusBar,
} from "react-native";

import Constants from "expo-constants";
import MessageItem from "../components/MessageItem";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import PicIcon from "../components/PicIcon";
import TopNav from "../components/TopNav";

const initialMessages = [
  {
    id: 1,
    name: "Aurora",
    message: "Hi",
    time: "11:11 AM",
    image: require("../assets/girl1.png"),
    numMessages: 2,
  },
  {
    id: 2,
    name: "Bob",
    message: "Hello",
    time: "4:20 PM",
    image: {
      uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg",
    },
    numMessages: 1,
  },
  {
    id: 3,
    name: "Tom",
    message: "Hello",
    time: "5:20 PM",
    image: require("../assets/girl2.png"),
    numMessages: 5,
  },
  {
    id: 4,
    name: "Angelina",
    message: "Hsjdflksdlfjlsdkfjlkdflksdj;asdjfl;",
    time: "2:11 PM",
    image: {
      uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/4.jpg",
    },
    numMessages: 0,
  },
];

function MessagesScreen(props) {

  const [users, setUsers] = useState([User]);

  useEffect(() => {
    const fetchUsers = async () => {
      const fetchedUsers = await DataStore.query(User);
      setUsers(fetchedUsers);
    };
    fetchUsers();
  }, []);
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    //delete the message from messages
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <View View paddingTop={Constants.statusBarHeight}>
      <TopNav title="Matches" />
      <View style={{ paddingLeft: 6 }}>
        <FlatList
          horizontal
          data={users}

          renderItem={({ item }) => (
            <PicIcon image={item.imageUri} humanProfile={"HumanProfileScreen"} />
          )}
        ></FlatList>
      </View>
      <FlatList
        ListHeaderComponent={() => (
          <View style={{ paddingLeft: 10 }}>
            <Text style={styles.text}>Messages</Text>
          </View>
        )}
        data={users}

        renderItem={({ item }) => (
          <MessageItem
            id={item.id}
            name={item.name}
            message={item.message}
            image={item.imageUri}
            time={item.time}
            numMessages={item.numMessages}
            onPress={() => console.log("Message selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              name: "Aurora",
              message: "YOOO",
              time: "1:23 PM",
              image: require("../assets/girl2.png"),
            },
          ]);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: "Avenir-Medium",
  },
});

export default MessagesScreen;
