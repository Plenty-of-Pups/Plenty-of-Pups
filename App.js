import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./app/navigation/tabs";
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
import DiscoveryScreen from "./app/screens/DiscoveryScreen";
import DMScreen from "./app/screens/DMScreen";
import YourProfileScreen from "./app/screens/YourProfileScreen";
import YourDogScreen from "./app/screens/YourDogScreen";
import OtherDogScreen from "./app/screens/OtherDogScreen";
import HumanProfileScreen from "./app/screens/HumanProfileScreen";
import MatchScreen from "./app/screens/MatchScreen";
export default function App() {
  //return <LoginScreen />
  //return <PremiumScreen />
  //return <MessagesScreen />
  //return <DiscoveryScreen />
  //return <CreateNewUserScreen />
  //return <NewDogProfileScreen />
  ///return <EditUserProfileScreen />
  //return <FAQScreen />
  //return <SettingScreen />
  //return <DMScreen />
  //return <YourDogScreen />
  //return <YourProfileScreen />
  //return <OtherDogScreen />
  //return <HumanProfileScreen/>
  return < MatchScreen/>

}

/*// uncomment to test bottom tab navigation
const App = () => {
 return (
   <NavigationContainer>
     <Tabs />
   </NavigationContainer>
 );
};
*/

//export default App;
