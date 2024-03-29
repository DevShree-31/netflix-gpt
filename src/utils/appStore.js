import { configureStore } from "@reduxjs/toolkit";
import { useReducer } from "react";
import userReducer from './userSlice.js'
const appStore=configureStore({
    reducer:{
        user:userReducer,
    },
})

export default appStore;