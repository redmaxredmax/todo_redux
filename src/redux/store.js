import { configureStore } from "@reduxjs/toolkit";
import countSlice from "./reducer/count-reducer";
import todoSlice from "./reducer/todo-reducer"


export const store=configureStore({
    reducer:{
        count:countSlice,
        todo:todoSlice,
    }
})