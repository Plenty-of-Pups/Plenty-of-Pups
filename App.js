import React from "react";
import { View } from "react-native";
import LoginScreen from "./app/screens/LoginScreen";
import DiscoveryTabScreen from "./app/screens/DiscoveryTabScreen";
import PremiumCard from "./app/components/premiumCard";
import PremiumScreen from "./app/screens/PremiumScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import PreferencesScreen from "./app/screens/PreferencesScreen";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import MessageItem from "./app/components/MessageItem";
import SettingScreen from "./app/screens/SettingScreen";

export default function App() {
  //return <LoginScreen />;
  //return <PremiumScreen />;
  //return <MessagesScreen />;
  //return <DiscoveryTabScreen />;
  //return <SettingScreen />
  return <PreferencesScreen />



}
