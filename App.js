import React from "react";
import { View } from "react-native";
import LoginScreen from "./app/screens/LoginScreen";
import DiscoveryTabScreen from "./app/screens/DiscoveryTabScreen";

import CreateNewUserScreen from "./app/screens/CreateNewUserScreen";
import NewDogProfileScreen from "./app/screens/NewDogProfileScreen";
import PremiumCard from "./app/components/premiumCard";
import PremiumScreen from "./app/screens/PremiumScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
//import TopScreen from "./app/components/topScreen";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import MessageItem from "./app/components/MessageItem";
import SettingScreen from "./app/screens/SettingScreen";



export default function App() {
  //return <LoginScreen />;
  //return <PremiumScreen />;
  //return <MessagesScreen />;
  //return <DiscoveryTabScreen />;
  return <CreateNewUserScreen />;
  //return <NewDogProfileScreen />;
  //return <SettingScreen />
}
