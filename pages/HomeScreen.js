import { SafeAreaView, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from "../firebaseConfig"
import MyButton from '../component/myButton/MyButton';

const HomeScreen = () => {

  const [data, setData] = useState([]);
  console.log("data", data)

  const sendData = async() => {
    try {
      const docRef = await addDoc(collection(db, "ReactNativeLesson"), {
        title: "zero to hero",
        content: "react native",
        lesson: 17
      });
      console.log("document written with ID: ", docRef.id);
    } catch (e) {
      console.log("error adding document: ", e)
    }
  }

  const getData = async() => {
    const querySnapshot = await getDocs(collection(db, "ReactNativeLesson"));
    querySnapshot.forEach((doc) => {
      //console.log(`${doc.id} => ${doc.data()} `);
      setData(doc.data())
      console.log("clicked")
    })
  }

  return (
    <SafeAreaView style={styles.container} >
      <MyButton 
        buttonName={"send data"}
        onPress={sendData} />
      <MyButton 
        buttonName={"get data"}
        onPress={getData} />
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
    justifyContent: "center",
    alignItems: "center"
  }
})