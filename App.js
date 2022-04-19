import React from "react";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import Amplify from "aws-amplify";
import config from "./src/aws-exports";
import { withAuthenticator } from "aws-amplify-react-native"
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
import UserHomeScreen from "./app/screens/UserHomeScreen";
import DogHomeScreen from "./app/screens/DogHomeScreen";
import Navigation from "./app/navigation/Navigation";



//Amplify.configure(config);
Amplify.configure(config);

export default function App() {
  return (

    <Navigation />

  );

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
