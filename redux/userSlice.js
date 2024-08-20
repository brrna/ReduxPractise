import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
//AsyncThunk fonksiyonuncevap gelene kadar beklemesini sağlıyor. 
//Üç seçenek sunuyor; yükleniyor, yüklendi, reddedildi
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const login = createAsyncThunk('user/login', async({email, password}) => {
    try {
        const auth = getAuth();
        const userCredential = await signInWithEmailAndPassword(auth, email, password);

        const user = userCredential.user;
        const token = user.stsTokenManager.accessToken;

        const userData = {
            token, 
            user: user,
        }

        return userData;

    } catch (error) {
        console.log("userSlice 21 line", error)
        throw error
    }
} )

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
    }
})

export const { setEmail, setPassword, setLoading } = userSlice.actions;
export default userSlice.reducer;