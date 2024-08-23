import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../pages/HomeScreen';

const UserStack = () => {

    const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}} >
        <Stack.Screen name='HomeScreen' component={HomeScreen} />
    </Stack.Navigator>
  )
}

export default UserStack