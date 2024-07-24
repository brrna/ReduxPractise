import { SafeAreaView, StyleSheet, View, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

const First = () => {

    const [text, setText] = useState("");
    const dispatch = useDispatch();

    const handleAdd = () => {
        dispatch({type: "ADD_LIST", payload: {name: text} })
    }

    const handleClean = () => {
        dispatch({type: "CLEAN_LIST"})
    }

    return (
        <SafeAreaView style={styles.container} >
            <View style={styles.inputView} >
                <TextInput
                    value={text}
                    onChangeText={setText}
                    placeholder='İsim giriniz...'
                />
            </View>
            <Button
                style={styles.button}
                title='add'
                onPress={handleAdd} />
            <Button 
                style={styles.button}
                title='delete'
                onPress={handleClean} />
        </SafeAreaView>
    )
}

export default First

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    inputView: {
        borderColor: "green",
        borderWidth: 1,
        height: 50,
        width: 350,
        justifyContent: "center",
        padding: 7
    },
    button: {
        height: 100,
        width: 50,
        marginTop: 20
    }
})