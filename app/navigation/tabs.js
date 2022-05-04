import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import DiscoveryScreen from "../screens/DiscoveryScreen";
import MessagesScreen from "../screens/MessagesScreen";
import DogHomeScreen from "../screens/DogHomeScreen";
import UserHomeScreen from "../screens/UserHomeScreen";

import colors from "../config/colors";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: [
          {
            display: "flex",
          },
          null,
        ],

        showLabel: false,
        style: {
          position: "absolute",
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: "#ffffff",
          borderRadius: 15,
          height: 90,
        },
      }}
    >
      <Tab.Screen
        name="Discovery"
        component={DiscoveryScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <Image
                source={require("../assets/icons/home-variant-outline.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#FF5483" : "#747c94",
                }}
              />
              <Text
                style={{ color: focused ? "#FF5483" : "#747c94", fontSize: 12 }}
              ></Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Matches"
        component={MessagesScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <Image
                source={require("../assets/icons/chat-outline.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#FF5483" : "#747c94",
                }}
              />
              <Text
                style={{ color: focused ? "#FF5483" : "#747c94", fontSize: 12 }}
              ></Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Your Dogs"
        component={DogHomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <Image
                source={require("../assets/icons/paw.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#FF5483" : "#747c94",
                }}
              />
              <Text
                style={{ color: focused ? "#FF5483" : "#747c94", fontSize: 12 }}
              ></Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Your Profile"
        component={UserHomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <Image
                source={require("../assets/icons/account.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#FF5483" : "#747c94",
                }}
              />
              <Text
                style={{ color: focused ? "#FF5483" : "#747c94", fontSize: 12 }}
              ></Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const style = StyleSheet.create({
  shadow: {},
});

export default Tabs;
