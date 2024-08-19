import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: null,
    password: null,
    loading: false,
    isAuth: false,
    users: {
        userEmail: "test@test.com",
        userPassword: "123456"
    }
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
        },
        setLogin(state) {
            if((state.email === state.users.userEmail) && (state.password === state.users.userPassword)) {
                state.isAuth = true
                console.log(true)
            } else{
                console.log(false)
            }
        }
    }
})

export const { setEmail, setPassword, setLoading, setLogin } = userSlice.actions;
export default userSlice.reducer;