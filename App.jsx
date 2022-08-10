import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import TweetScreen from './screens/TweetScreen';
import NewTweet from './screens/NewTweet';
import ProfileScreen from './screens/ProfileScreen';
import SettingsScreen from './screens/SettingsScreen';
import SearchScreen from './screens/SearchScreen';
import Notifications from './screens/Notifications';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const HomeStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{
                headerShown: true,
                headerBackTitleVisible: false
            }}
        >
            <Stack.Screen
                name="Tab"
                component={TabNavigator}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="New Tweet"
                component={NewTweet}
                options={{
                    title: ''
                }}
            />
            <Stack.Screen
                name="Tweet Screen"
                component={TweetScreen}
                options={{
                    title: ''
                }}
            />
            <Stack.Screen
                name="Profile Screen"
                component={ProfileScreen}
                options={{
                    title: ''
                }}
            />
        </Stack.Navigator>
    );
}

const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false
            }}
        >
            <Tab.Screen
                name="Home2"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name="ios-home" size={size} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="Search"
                component={SearchScreen}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name="ios-search" size={size} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="Notification"
                component={Notifications}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name="ios-notifications" size={size} color={color} />
                    )
                }}
            />
        </Tab.Navigator>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                initialRouteName='Home'
                screenOptions={{
                    headerShown: true
                }}
            >
                <Drawer.Screen name="Home" component={HomeStackNavigator} />
                <Drawer.Screen name="Settings" component={SettingsScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}