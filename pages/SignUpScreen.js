import { SafeAreaView, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import MyInput from '../component/myInput/MyInput'
import MyButton from '../component/myButton/MyButton'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../redux/userSlice'

const SignUpScreen = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const {loading} = useSelector((state) => state.user);

  const handleRegister = () => {
    dispatch(register({email, password}))
    console.log("register")
  }

  return (
    <SafeAreaView style={styles.container} >

      <MyInput 
        text={"name"}
        value={name}
        placeholder={"name"}
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
        onPress={handleRegister} />
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