import { StyleSheet, Text, SafeAreaView, StatusBar } from 'react-native'
import React, { useState } from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import MyButton from '../component/myButton/MyButton'
import MyInput from '../component/myInput/MyInput'
import Loading from '../component/loading/Loading'
import { useNavigation } from '@react-navigation/native'

const LoginScreen = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container} >
            <StatusBar />

            <Text style={styles.text} >welcome</Text>

            <MyInput
                text={"E-mail"}
                value={email}
                placeholder={"adınızı girin"}
                onChangeText={setEmail}
                inputMode="email" />

            <MyInput
                text={"Password"}
                value={password}
                placeholder={"soyadınızı girin"}
                onChangeText={setPassword}
                secureTextEntry={true} />

            <MyButton
                onPress={() => setLoading(true)}
                buttonName={"save"} />

            <MyButton
                onPress={() => navigation.navigate("SignUp")}
                buttonName={"kaydol"} />

            {
                loading ?
                    <Loading
                        onPress={() => setLoading(false)} />
                    :
                    null
            }



        </SafeAreaView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "pink",
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontSize: hp(4),
        fontWeight: "bold"
    }
})