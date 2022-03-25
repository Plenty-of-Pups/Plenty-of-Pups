import React from "react";
import { View } from "react-native";
import LoginScreen from "./app/screens/LoginScreen";
import DiscoveryTabScreen from "./app/screens/DiscoveryTabScreen";
import PremiumCard from "./app/components/premiumCard";
import PremiumScreen from "./app/screens/PremiumScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import TopScreen from "./app/components/topScreen";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import MessageItem from "./app/components/MessageItem";

export default function App() {
  //return <LoginScreen />;
  //return <PremiumScreen />;
  //return <MessagesScreen />;
  //return <DiscoveryTabScreen />;
  return (
    <Screen>
      <MessageItem title="My title"
        // subTitle="My sub"
        ImageComponent={<Icon name="email" />} />
    </Screen>
  );


}
