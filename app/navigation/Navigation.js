
import * as React from 'react';
import { ColorSchemeName, useWindowDimensions, View, Image, Text } from 'react-native';

import LoginScreen from '../screens/LoginScreen';
import CreateNewUserScreen from '../screens/CreateNewUserScreen';
import NewDogProfileScreen from '../screens/NewDogProfileScreen';
import MessagesScreen from '../screens/MessagesScreen';
import DMScreen from '../screens/DMScreen';
import DiscoveryScreen from '../screens/DiscoveryScreen';
import PremiumScreen from '../screens/PremiumScreen';
import FAQScreen from '../screens/FAQScreen';
import PreferencesScreen from '../screens/PreferencesScreen';
import YourDogScreen from '../screens/YourDogScreen';
import EditDogProfileScreen from '../screens/EditDogProfileScreen';
import YourProfileScreen from '../screens/YourProfileScreen';
import EditUserProfileScreen from '../screens/EditUserProfileScreen';
import SettingScreen from '../screens/SettingScreen';
import HumanProfileScreen from '../screens/HumanProfileScreen';
import MatchScreen from '../screens/MatchScreen';
import Tabs from './tabs';




import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TopNav from '../components/TopNav';
import BackNavigation from '../components/BackNavigation';
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
        <Stack.Navigator >
            <Stack.Screen name="LoginScreen" options={{ headerShown: false }} component={LoginScreen} />
            <Stack.Screen name="CreateNewUserScreen" options={{ headerShown: false }} component={CreateNewUserScreen} />
            <Stack.Screen name="NewDogProfileScreen" options={{ headerShown: false }} component={NewDogProfileScreen} />
            <Stack.Screen name="DiscoveryScreen" component={DiscoveryScreen} component={Tabs} options={{ headerShown: false }} />

            <Stack.Screen name="MessagesScreen"
                component={MessagesScreen}
                component={Tabs}
                options={{ headerTitle: (props) => <TopNav title={"Matches"} /> }}
            />

            <Stack.Screen
                name="DMScreen"
                component={DMScreen}
                options={{
                    headerTitle: dmHeader,
                    headerBackTitleVisible: false,
                    title: 'Username'
                }} />
            <Stack.Screen
                name="HumanProfileScreen"
                options={{ headerShown: false }}
                component={HumanProfileScreen} />
            <Stack.Screen
                name="FAQScreen"
                options={{ headerShown: false }}
                component={FAQScreen} />
            <Stack.Screen
                name="PreferencesScreen"
                options={{ headerShown: false }}
                component={PreferencesScreen}
            />
            <Stack.Screen
                name="PremiumScreen"
                options={{ headerShown: false }}
                component={PremiumScreen}
            />
            <Stack.Screen
                name="MatchScreen"
                options={{ headerB: false }}
                component={MatchScreen}
            />
            <Stack.Screen
                name="YourDogScreen"
                options={{ headerShown: false }}
                component={YourDogScreen}
            />

            <Stack.Screen
                name="YourProfileScreen"
                options={{ headerShown: false }}
                component={YourProfileScreen}
            />

            <Stack.Screen
                name="EditUserProfileScreen"
                options={{ headerShown: false }}
                component={EditUserProfileScreen}
            />
            <Stack.Screen
                name="SettingScreen"
                options={{ headerShown: false }}
                component={SettingScreen}
            />
            <Stack.Screen
                name="EditDogProfileScreen"
                options={{ headerShown: false }}
                component={EditDogProfileScreen}
            />

        </Stack.Navigator>


    );
}

const dmHeader = (props) => {
    const { width } = useWindowDimensions();
    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width,
            padding: 10,
            alignItems: 'center'
        }}>
            <Image
                source={{ uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png' }}
                style={{ width: 30, height: 30, borderRadius: 30, marginLeft: -30 }}
            />
            <Text style={{ flex: 1, textAlign: 'left', marginLeft: 10, fontWeight: 'bold' }}>{props.children}</Text>
        </View >
    )
}



/*  <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="CreateNewUserScreen" component={CreateNewUserScreen} />
            <Stack.Screen name="NewDogProfileScreen" component={NewDogProfileScreen} />
            <Stack.Screen name="DiscoveryTabScreen" component={DiscoveryTabScreen} />*/
