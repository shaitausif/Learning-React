import { configureStore } from "@reduxjs/toolkit"
// This is the method which is responsible to do majority of the things
import todoReducer from "../features/todo/todoSlice"

export const store = configureStore({
    reducer : todoReducer,
})

