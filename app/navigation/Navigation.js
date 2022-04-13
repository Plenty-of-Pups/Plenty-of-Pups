
import * as React from 'react';
import { ColorSchemeName } from 'react-native';

import LoginScreen from '../screens/LoginScreen';
import CreateNewUserScreen from '../screens/CreateNewUserScreen';
import NewDogProfileScreen from '../screens/NewDogProfileScreen';
import MessagesScreen from '../screens/MessagesScreen';
import DMScreen from '../screens/DMScreen';
import DiscoveryTabScreen from '../screens/DiscoveryTabScreen';




import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'


export default function Navigation() {
    return (
        <NavigationContainer>

            <RootNavigator />

        </NavigationContainer>
    )
}

const Stack = createNativeStackNavigator();

function RootNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="CreateNewUserScreen" component={CreateNewUserScreen} />
            <Stack.Screen name="NewDogProfileScreen" component={NewDogProfileScreen} />
            <Stack.Screen name="DiscoveryTabScreen" component={DiscoveryTabScreen} />
            <Stack.Screen name="MessagesScreen" component={MessagesScreen} />
            <Stack.Screen name="DMScreen" component={DMScreen} />
        </Stack.Navigator>
    );
}

