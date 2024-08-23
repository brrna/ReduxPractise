import { SafeAreaView, StyleSheet, View, Text, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { collection, addDoc, getDocs, doc, deleteDoc, updateDoc } from 'firebase/firestore';
import { db } from "../firebaseConfig"
import MyButton from '../component/myButton/MyButton';
import MyInput from "../component/myInput/MyInput";
import { useDispatch } from 'react-redux';
import { logout } from '../redux/userSlice';

const HomeScreen = () => {

  const dispatch = useDispatch();

  const [data, setData] = useState([]);
  const [saved, setSaved] = useState(false);
  const [update, setUpdate] = useState("");

  useEffect(() => {
    getData();
  }, [saved])

  //SEND DATA TO FIREBASE
  const sendData = async () => {
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
  const getData = async () => {
    const allData = []
    try {
      const querySnapshot = await getDocs(collection(db, "ReactNativeLesson"));
      querySnapshot.forEach((doc) => {
        //console.log(`${doc.id} => ${doc.data()} `);
        allData.push({...doc.data(), id: doc.id})
      });
      setData(allData)
    } catch (error) {
      console.log(error)
    }

  }

  //DELETE DATA FROM FIREBASE
  const deleteData = async(value) => {
    try {
      await deleteDoc(doc(db, "ReactNativeLesson", value));
      console.log("delete succesful")
    } catch (error) {
      console.log(error)
    }
  }

  //UPDATE DATA
  const updateData = async(value) => {
    try {
      const lessonData = doc(db, "ReactNativeLesson", value);
      await updateDoc(lessonData, {
        lesson: update
      });
    } catch (error) {
      console.log(error)
    }
  }

  //LOG OUT
  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <SafeAreaView style={styles.container} >

      {data.map((value, index) => {
        return(
          <Pressable 
            key={index}
            onPress={() => {updateData(value.id), setSaved(saved === false ? true : false)}} >
            <Text>{value?.id}</Text>
            <Text>{value.title}</Text>
            <Text>{value.content}</Text>
            <Text>{value.lesson}</Text>
          </Pressable>
        )
      })}

      <MyInput 
        value={update}
        placeholder={"enter your lesson"}
        onChangeText={setUpdate}
         />

      <MyButton
        buttonName={"send data"}
        onPress={() => {sendData(), setSaved(saved === false ? true : false)}} />

      <MyButton
        buttonName={"get data"}
        onPress={getData} />

      <MyButton
        buttonName={"delete data"}
        onPress={deleteData} />

      <MyButton
        buttonName={"update data"}
        onPress={updateData} />

      <MyButton 
        buttonName={"log out"}
        onPress={handleLogout} />

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