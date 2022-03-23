import { StackNavigator, TabNavigator } from 'react-navigation';

import DogTab from '../screens/DogTabScreen';

export const DogStack = StackNavigato
export const Tabs = TabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            tabBarLabel: 'Home',
    //        tabBarIcon: ({ tintColor }) => <Icon name="ios-list" size={35} color={tintColor} />
        },
    },
    Messages: {
        screen: Messages,
        navigationOptions: {
            tabBarLabel: 'Messages',
    //        tabBarIcon: ({ tintColor }) => <Icon name="ios-list" size={35} color={tintColor} />
        },
    },
    Dog: {
        screen: Dog,
        navigationOptions: {
            tabBarLabel: 'Dog',
      //      tabBarIcon: ({ tintColor }) => <Icon name="ios-list" size={35} color={tintColor} />
        },
    },
    User: {
        screen: User,
        navigationOptions: {
            tabBarLabel: 'User',
     //       tabBarIcon: ({ tintColor }) => <Icon name="ios-list" size={35} color={tintColor} />
        },
    },
});