import React from "react";
import { View } from "react-native";
import LoginScreen from "./app/screens/LoginScreen";


import CreateNewUserScreen from "./app/screens/CreateNewUserScreen";
import NewDogProfileScreen from "./app/screens/NewDogProfileScreen";
import PremiumCard from "./app/components/premiumCard";
import PremiumScreen from "./app/screens/PremiumScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
//import TopScreen from "./app/components/topScreen";

import SettingScreen from "./app/screens/SettingScreen";
import EditUserProfileScreen from "./app/screens/EditUserProfileScreen";
import EditDogProfileScreen from "./app/screens/EditDogProfileScreen";
import FAQScreen from "./app/screens/FAQScreen";

export default function App() {
  //return <LoginScreen />;
  //return <PremiumScreen />;
  //return <MessagesScreen />;
  //return <DiscoveryTabScreen />;
  //return <CreateNewUserScreen />;
  //return <NewDogProfileScreen />;
  //return <EditUserProfileScreen />;
  return <FAQScreen />;
  //return <SettingScreen />;

}
