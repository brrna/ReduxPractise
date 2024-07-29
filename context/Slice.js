import { createSlice } from "@reduxjs/toolkit";

const Slice = createSlice({

    //isim verildi
    name: "counter", 

    //global stateler belirlendi
    initialState: { 
        count: 0
    },

    //stateleri manipüle edecek olan actionslar belirlendi
    reducers: {
        increase(state) {
            state.count++;
        },
        decrease(state) {
            state.count--;
        },
        refresh(state) {
            state.count = 0;
        }
    }
});

//actionsları kullanıma açtık
export const {increase, decrease, refresh} = Slice.actions;

//Slice ı dışarıya açtık
export default Slice;