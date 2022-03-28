import React from "react";
import { View } from "react-native";
import LoginScreen from "./app/screens/LoginScreen";
import DiscoveryTabScreen from "./app/screens/DiscoveryTabScreen";
import CreateNewUserScreen from "./app/screens/CreateNewUserScreen";
import NewDogProfileScreen from "./app/screens/NewDogProfileScreen";

export default function App() {
  // return <LoginScreen />;
  // return <CreateNewUserScreen />;
  return <NewDogProfileScreen />;
}
