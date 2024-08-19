import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'

const MyInput = ({ placeholder, onChangeText, text, value, secureTextEntry, inputMode }) => {
    return (
        <View style={styles.container} >
            <Text>{text}</Text>
            <TextInput
                style={styles.input}
                value={value}
                placeholder={placeholder}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
                inputMode={inputMode} />
        </View>
    )
}

export default MyInput

const styles = StyleSheet.create({
    container: {
        width: wp(100),
        height: hp(13),
        justifyContent: "center",
        alignItems: "center"
    },
    input: {
        backgroundColor: "white",
        width: wp(94),
        height: hp(8),
        borderRadius: 8,
        borderWidth: 2,
        borderColor: "brown",
        padding: 10
    }
})