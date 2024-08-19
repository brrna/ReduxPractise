import { ActivityIndicator, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'

const Loading = ({onPress}) => {
    return (
        <SafeAreaView style={styles.container} >
            <Pressable 
                onPress={onPress}
                style={styles.view} >
                <Text style={styles.text} >X</Text>
            </Pressable>
            <ActivityIndicator
                size={25}
                color={"brown"} />
            <Text>loading...</Text>
        </SafeAreaView>
    )
}

export default Loading

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: hp(100),
        width: wp(100),
        backgroundColor: "violet",
        alignItems: "center",
        position: "absolute"
    },
    view: {
        backgroundColor: "white",
        height: 50,
        width: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 1000,
        marginLeft: wp(80),
        marginBottom: hp(40),
        marginTop: hp(3)
    },
    text: {
        fontWeight: "bold",
        fontSize: 24,
        color: "violet"
    }
})