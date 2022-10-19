import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from '../models/HomeScreen';
import JSONScreen from '../models/JSONScreen';

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='Home' component={HomeScreen}/>
            <Stack.Screen name='JSON' component={JSONScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigation