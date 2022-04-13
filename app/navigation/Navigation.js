
import * as React from 'react';
import { ColorSchemeName } from 'react-native';

import LoginScreen from '../screens/LoginScreen';
import CreateNewUserScreen from '../screens/CreateNewUserScreen';
import NewDogProfileScreen from '../screens/NewDogProfileScreen';
import MessagesScreen from '../screens/MessagesScreen';
import DMScreen from '../screens/DMScreen';
import DiscoveryTabScreen from '../screens/DiscoveryTabScreen';
import FAQScreen from '../screens/FAQScreen';




import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TopNav from '../components/TopNav';
import colors from '../config/colors';


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
        <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: colors.light } }}>

            <Stack.Screen name="MessagesScreen"
                component={MessagesScreen}
                options={{ headerTitle: (props) => <TopNav title={"Matches"} nextScreen={"FAQScreen"} /> }} />
            <Stack.Screen name="DMScreen" component={DMScreen} />
            <Stack.Screen name="FAQScreen" component={FAQScreen} title="FAQ" />

        </Stack.Navigator>


    );
}



/*  <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="CreateNewUserScreen" component={CreateNewUserScreen} />
            <Stack.Screen name="NewDogProfileScreen" component={NewDogProfileScreen} />
            <Stack.Screen name="DiscoveryTabScreen" component={DiscoveryTabScreen} />*/
