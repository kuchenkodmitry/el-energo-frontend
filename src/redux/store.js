import { configureStore } from "@reduxjs/toolkit";
import { postsReducer } from "./slices/posts" 
import { authReducer } from "./slices/auth";
import { examplesReducer } from "./slices/examples";
import { contactReducer } from "./slices/contact";

const store = configureStore({ 
    reducer:{
        posts: postsReducer,
        auth: authReducer,
        examples: examplesReducer,
        contact: contactReducer
    }
})

export default store;