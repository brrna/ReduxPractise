import { createSlice } from "@reduxjs/toolkit";

const Slice = createSlice({

    //isim verildi
    name: "counter", 

    //global stateler belirlendi
    initialState: { 
        count: 0,
        person: {
            name: "Berna",
            surname: "Varol"
        }
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
        },

        //action; statein yeni bilgilerini taşıyan payload içerir
        //payload 
        setPerson(state, action) {
            const name = action.payload.name;
            const surname = action.payload.surname;

            state.person.name = name;
            state.person.surname = surname;
        }
    }
});

//actionsları kullanıma açtık
export const {increase, decrease, refresh, setPerson} = Slice.actions;

//Slice ı dışarıya açtık
export default Slice;