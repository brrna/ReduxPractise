import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../pages/LoginScreen';
import SignUp from '../pages/SignUpScreen';

const AuthStack = () => {

    const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}} >
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='SignUp' component={SignUp} />
    </Stack.Navigator>
  )
}

export default AuthStack