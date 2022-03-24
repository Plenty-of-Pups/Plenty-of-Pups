import React from "react";
import { View } from "react-native";
import LoginScreen from "./app/screens/LoginScreen";
import DiscoveryTabScreen from "./app/screens/DiscoveryTabScreen";
import PremiumCard from "./app/components/premiumCard";
import PremiumScreen from "./app/screens/PremiumScreen";
import MessagesScreen from "./app/screens/MessagesScreen";

export default function App() {
  return <LoginScreen />;
  //return <PremiumScreen />;
  //return <MessagesScreen />;
}
