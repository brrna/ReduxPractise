import { StyleSheet, Text, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import MyButton from '../component/myButton/MyButton'
import MyInput from '../component/myInput/MyInput'
import Loading from '../component/loading/Loading'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { setEmail, setLoading, setPassword, setLogin } from '../redux/userSlice'

const LoginScreen = () => {

    const navigation = useNavigation();
    const dispatch = useDispatch();

    const {email, password, loading} = useSelector((state) => state.user);

    return (
        <SafeAreaView style={styles.container} >
            <StatusBar />

            <Text style={styles.text} >welcome</Text>

            <MyInput
                text={"E-mail"}
                value={email}
                placeholder={"adınızı girin"}
                onChangeText={(email) => dispatch(setEmail(email))}
                inputMode="email" />

            <MyInput
                text={"Password"}
                value={password}
                placeholder={"soyadınızı girin"}
                onChangeText={(password) => dispatch(setPassword(password))}
                secureTextEntry={true} />

            <MyButton
                onPress={() => dispatch(setLogin(true))}
                buttonName={"giriş yap"} />

            <MyButton
                onPress={() => navigation.navigate("SignUp")}
                buttonName={"kayıt ol"} />

            {
                loading ?
                    <Loading
                        onPress={() => dispatch(setLoading(false))} />
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