import { StyleSheet, Text, SafeAreaView, StatusBar } from 'react-native'
import React, { useState } from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import MyButton from '../component/myButton/MyButton'
import MyInput from '../component/myInput/MyInput'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../redux/userSlice'

const LoginScreen = () => {

    const navigation = useNavigation();
    const dispatch = useDispatch();

    const loading = useSelector((state) => state.user);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const girisYap = () => {
        dispatch(login({email, password}));
        navigation.navigate("HomeScreen")
    }

    return (
        <SafeAreaView style={styles.container} >
            <StatusBar />

            <Text style={styles.text} >welcome</Text>

            <MyInput
                text={"E-mail"}
                value={email}
                placeholder={"adınızı girin"}
                onChangeText={(text) => setEmail(text)}
                inputMode="email" />

            <MyInput
                text={"Password"}
                value={password}
                placeholder={"soyadınızı girin"}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry={true} />

            <MyButton
                onPress={girisYap}
                buttonName={"giriş yap"} />

            <MyButton
                onPress={() => navigation.navigate("SignUp")}
                buttonName={"kayıt ol"} />


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