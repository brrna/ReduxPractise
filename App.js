import React from "react";
import { View, StyleSheet } from "react-native";
import Login from "./pages/Login";
import { createStackNavigator } from "@react-navigation/stack";
import SignUp from "./pages/SignUp";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigation from "./navigation/RootNavigation";

export default function App() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({})