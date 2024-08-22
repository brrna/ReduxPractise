import { SafeAreaView, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { collection, addDoc, getDocs, doc, deleteDoc, updateDoc } from 'firebase/firestore';
import { db } from "../firebaseConfig"
import MyButton from '../component/myButton/MyButton';

const HomeScreen = () => {

  const [data, setData] = useState([]);
  console.log("data", data)

  //SEND DATA TO FIREBASE
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

  //GET DATA FROM FIREBASE
  const getData = async() => {
    const querySnapshot = await getDocs(collection(db, "ReactNativeLesson"));
    querySnapshot.forEach((doc) => {
      //console.log(`${doc.id} => ${doc.data()} `);
      setData(doc.data())
      console.log("clicked")
    })
  }

  //DELETE DATA FROM FIREBASE
  const deleteData = async() => {
    await deleteDoc(doc(db, "ReactNativeLesson", "CQiSXpMzBO5sOQRrYgzA"));
    console.log("delete clicek")
  }

  //UPDATE DATA
  const updateData = async() => {
    try {
      const lessonData = doc(db, "ReactNativeLesson", "feOXhW0n0Pq4k2cEpiU8");
      await updateDoc(lessonData, {
        lesson: 1
      });
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <SafeAreaView style={styles.container} >
      <MyButton 
        buttonName={"send data"}
        onPress={sendData} />
      <MyButton 
        buttonName={"get data"}
        onPress={getData} />
      <MyButton 
        buttonName={"delete data"}
        onPress={deleteData} />
      <MyButton 
        buttonName={"update data"}
        onPress={updateData} />
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