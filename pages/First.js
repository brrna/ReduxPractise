import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MyButton from '../components/MyButton'
import { useDispatch, useSelector } from 'react-redux'
import { increase, decrease, refresh } from '../context/Slice' //fonksiyonlara bak
import MyInput from '../components/MyInput'

const First = () => {

    //statein mevcut değerini elde etmek için kullanılır
    const counter = useSelector((state) => state.counter);

    //actionları doğrudan kullanamayız bunun için ihtiyaç
    const dispatch = useDispatch();

    return (
        <SafeAreaView style={styles.container} >
            <MyInput />
            <Text style={styles.text} >{counter.count}</Text>
            <View style={styles.frame} >
                <MyButton text={"+"} onPress={() => dispatch(increase())} />
                <MyButton text={"-"} onPress={() => dispatch(decrease())} />
                <MyButton text={"0"} onPress={() => dispatch(refresh())} />
            </View>
        </SafeAreaView>
    )
}

export default First

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around"
    },
    frame: {
        height: 300,
        width: 300,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    text: {
        fontWeight: "bold",
        fontSize: 100
    }
})