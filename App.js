import React, { useState } from "react";
import { SafeAreaView, StatusBar, Text, StyleSheet } from "react-native";
import MyInput from "./component/myInput/MyInput";
import MyButton from "./component/myButton/MyButton";
import { heightPercentageToDP } from "react-native-responsive-screen";

export default function App() {

  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [result, setResult] = useState("")

  return (
    <SafeAreaView style={styles.container} >
      <StatusBar />

      <Text style={styles.text} >welcome {result}</Text>

      <MyInput
        text={"Adınız"}
        value={name}
        placeholder={"adınızı girin"}
        onChangeText={setName} />

        <MyInput
        text={"Soyadınız"}
        value={lastname}
        placeholder={"soyadınızı girin"}
        onChangeText={setLastname} />

        <MyButton
          onPress={() => setResult(name + " " + lastname)} />

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
    fontSize: heightPercentageToDP(4)
  }
})