import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import First from '../First';
import Second from '../Second';

const Router = () => {

    const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator >
        <Tab.Screen name='FirstScreen' component={First} />
        <Tab.Screen name='SecondScreen' component={Second} />
    </Tab.Navigator>
  )
}

export default Router