import React, { useState } from "react";
import { SafeAreaView, StatusBar, Text, StyleSheet } from "react-native";
import MyInput from "./component/myInput/MyInput";
import MyButton from "./component/myButton/MyButton";
import { heightPercentageToDP } from "react-native-responsive-screen";
import Loading from "./component/loading/Loading";

export default function App() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <SafeAreaView style={styles.container} >
      <StatusBar />

      <Text style={styles.text} >welcome</Text>

      <MyInput
        text={"E-mail"}
        value={email}
        placeholder={"adınızı girin"}
        onChangeText={setEmail}
        inputMode="email" />

      <MyInput
        text={"Password"}
        value={password}
        placeholder={"soyadınızı girin"}
        onChangeText={setPassword}
        secureTextEntry={true} />

      <MyButton
        onPress={() => setLoading(true)} />

      {
        loading ?
          <Loading 
            onPress={() => setLoading(false)} />
          :
          null
      }

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: heightPercentageToDP(4),
    fontWeight: "bold"
  }
})