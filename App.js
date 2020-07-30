import {StatusBar} from 'expo-status-bar'
import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import MainScreen from './screens/MainScreen'
import ChatScreen from "./screens/ChatScreen"

const Stack = createStackNavigator()

const App = () => (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Main" component={MainScreen}/>
            <Stack.Screen name="Chat" component={ChatScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
)

export default App

