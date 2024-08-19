import { SafeAreaView, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import MyInput from '../component/myInput/MyInput'
import MyButton from '../component/myButton/MyButton'

const SignUpScreen = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={styles.container} >
      <MyInput
        text={"name"}
        value={name}
        placeholder={"isminizi girin"}
        onChangeText={setName} />

      <MyInput
        text={"email"}
        value={email}
        placeholder={"mail girin"}
        onChangeText={setEmail} />

      <MyInput
        text={"password"}
        value={password}
        placeholder={"parola oluştur"}
        onChangeText={setPassword} />

      <MyButton
        buttonName={"kaydol"}
        onPress={() => console.log("clicked")} />
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