import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

const MyButton = ({ onPress }) => {
  return (
    <View style={styles.container} >
      <Pressable
        style={({ pressed }) =>
          [{
            backgroundColor: pressed ? "white" : "brown"
          }, styles.pressable]}
        onPress={onPress} >
        <Text>save</Text>
      </Pressable>
    </View>
  )
}

export default MyButton

const styles = StyleSheet.create({
  container: {
    width: wp(100),
    height: hp(15),
    justifyContent: "center",
    alignItems: "center"
  },
  pressable: {
    backgroundColor: "white",
    height: hp(8),
    width: wp(50),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8
  }
})