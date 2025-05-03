
import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";


const counterSlice = createSlice(
    {
        name:'counter',
        initialState:{
            value:0
        },
        reducers:{
            increment: (state) => {
                state.value += 1;
            },
            decrement: (state) => {
                state.value -= 1;
            },
        }
    }
);

export const {increment, decrement} =    counterSlice.actions;



export default counterSlice.reducer;

export const  useCounter = () => useSelector((state) => state.counter);
