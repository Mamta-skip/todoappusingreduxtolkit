import { configureStore } from "@reduxjs/toolkit";
import { todoslice } from "../feature/todo/todoslice";
export const store = configureStore({
    reducer: todoslice
})
