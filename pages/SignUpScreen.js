import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SignUpScreen = () => {
  return (
    <SafeAreaView style={styles.container} >
      <Text>SignUp</Text>
    </SafeAreaView>
  )
}

export default SignUpScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "pink",
        justifyContent: "center",
        alignItems: "center"
    }
})