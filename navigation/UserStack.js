import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../pages/HomeScreen';
import ProfileScreen from '../pages/ProfileScreen';

const UserStack = () => {

    const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}} >
        <Stack.Screen name='HomeScreen' component={HomeScreen} />
        <Stack.Screen name='ProfileScreen' component={ProfileScreen} />
    </Stack.Navigator>
  )
}

export default UserStack