import { StyleSheet, TouchableHighlight, View, Text } from 'react-native'
import React from 'react'

const MyButton = ({onPress, text}) => {
  return (
    <View style={styles.frame} >
      <TouchableHighlight
      style={styles.button}
        onPress={onPress} >
            <Text style={styles.text} >{text}</Text>
      </TouchableHighlight>
    </View>
  )
}

export default MyButton

const styles = StyleSheet.create({
    frame: {
        backgroundColor: "lightgreen",
        height: 80,
        width: 80,
        justifyContent: "center",
        alignItems: "center"
    },
    button: {
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontWeight: "bold",
        fontSize: 50
    }
})