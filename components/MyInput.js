import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MyButton from './MyButton'
import { setPerson } from '../context/Slice'

export const MyInput = () => {

    const person = useSelector((state) => state.counter);
    const dispatch = useDispatch()

  return (
    <View style={styles.frame} >
      <Text style={styles.text} >İsim: {person.person.name}</Text>
      <Text style={styles.text} >Soyisim: {person.person.surname}</Text>
      <MyButton 
        text={"change"} 
        onPress={() => dispatch(setPerson({
            name: "brrna",
            surname: "varl"
      })) } />
    </View>
  )
}

export default MyInput

const styles = StyleSheet.create({
    frame: {
        height: 200,
        width: 300,
        alignItems: "center",
        justifyContent: "space-around"
    },
    text: {
        fontSize: 20
    }
})