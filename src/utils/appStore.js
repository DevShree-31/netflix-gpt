import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice.js'
import moviesReducer from "./moviesSlice.js";
import gptReducer from "./gptSlice.js";
import appconfigReducer from "./appconfigSlice.js";
const appStore=configureStore({
    reducer:{
        user:userReducer,
        movies:moviesReducer,
        gpt:gptReducer,
        config:appconfigReducer,
    },
})

export default appStore;