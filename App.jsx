import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './screens/HomeScreen';
import TweetScreen from './screens/TweetScreen';
import NewTweet from './screens/NewTweet';
import ProfileScreen from './screens/ProfileScreen';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="New Tweet" component={NewTweet} />
                <Stack.Screen name="Tweet Screen" component={TweetScreen} />
                <Stack.Screen name="Profile Screen" component={ProfileScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}