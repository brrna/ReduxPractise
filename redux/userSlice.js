import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
//AsyncThunk fonksiyonuncevap gelene kadar beklemesini sağlıyor. 
//Üç seçenek sunuyor; yükleniyor, yüklendi, reddedildi
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, signInWithEmailAndPassword, signOut } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const login = createAsyncThunk('user/login', async({email, password}) => {
    try {
        const auth = getAuth();
        const userCredential = await signInWithEmailAndPassword(auth, email, password);

        const user = userCredential.user;
        const token = user.stsTokenManager.accessToken;

        const userData = {
            token, 
            user: user,
        };

        await AsyncStorage.setItem("userToken", token);

        return userData;

    } catch (error) {
        console.log("userSlice 21 line", error)
        throw error
    }
} )

//kullanıcı otomatik giriş işlermleri
export const autoLogin = createAsyncThunk('user/autoLogin', async() => {
    try {
        const token = await AsyncStorage.getItem("userToken")
        if (token) {
            return token
        } else {
            throw new Error("user not found")
        }
    } catch (error) {
        throw error
    }
})

//kullanıcı çıkış işlemleri
export const logout = createAsyncThunk('user/logout', async() => {
    try {
        const auth = getAuth()
        await signOut(auth)

        await AsyncStorage.removeItem("userToken")
        return null;
    } catch (error) {
        throw error
    }
})

//kayıt işlemi
export const register = createAsyncThunk('user/register', async({email, password}) => {
    try {
        const auth = getAuth();
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);

        const user = userCredential.user
        const token = user.stsTokenManager.accessToken;

        await sendEmailVerification(user)

        await AsyncStorage.setItem("userToken", token)
        return token;
    } catch (error) {
        throw error
    }
})

const initialState = {
    loading: false,
    isAuth: false,
    token: null,
    user: null,
    error : null
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setEmail(state, action) {
            const lowerCaseEmail = action.payload.toLowerCase();
            state.email = lowerCaseEmail;
        },
        setPassword(state, action) {
            state.password = action.payload;
        },
        setLoading(state, action) {
            state.loading = action.payload;
        }
    },

    extraReducers: (builder) => {
        builder
            //login
            .addCase(login.pending, (state) => {
                state.loading = true;
                state.isAuth = false;
            } )
            .addCase(login.fulfilled, (state, action) => {
                state.loading = false;
                state.isAuth = true;
                state.user = action.payload.user;
                state.token = action.payload.user;
            })
            .addCase(login.rejected, (state, action) => {
                state.loading = false;
                state.isAuth = false;
                state.error = action.error.message;
            })

            //autologin
            .addCase(autoLogin.pending, (state) =>{
                state.loading = true;
                state.isAuth = false;
            })
            .addCase(autoLogin.fulfilled, (state, action) =>{
                state.loading = false;
                state.isAuth = true;
                state.token = action.payload;
            })
            .addCase(autoLogin.rejected, (state, action) =>{
                state.loading = false;
                state.isAuth = false;
                state.token = null;
            })

            //logout
            .addCase(logout.pending, (state) => {
                state.loading = true;
            })
            .addCase(logout.fulfilled, (state, action) => {
                state.loading = false;
                state.isAuth = false;
                state.token = null;
                state.error = null;
            })
            .addCase(logout.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            //register
            .addCase(register.pending, (state) => {
                state.loading = true;
                state.isAuth = false;
            })
            .addCase(register.fulfilled, (state, action) => {
                state.loading = false;
                state.isAuth = true;
                state.token = action.payload;
            })
            .addCase(register.rejected, (state) => {
                state.loading = false;
                state.isAuth = false;
                state.error = "invalid email or password"
            })
    }
})

export const { setEmail, setPassword, setLoading } = userSlice.actions;
export default userSlice.reducer;