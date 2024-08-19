import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';

const RootNavigation = () => {

    const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}} >
       <Stack.Screen name='Login' component={Login} />
       <Stack.Screen name='SignUp' component={SignUp} /> 
    </Stack.Navigator>
  )
}

export default RootNavigation;