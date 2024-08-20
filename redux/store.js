import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";

const store = configureStore({
    reducer: {
        user: userSlice
    },
    middleware: (getDefaultMiddlware) => 
        getDefaultMiddlware({serializableCheck: false})
})

export default store