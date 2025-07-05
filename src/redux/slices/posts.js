import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios/axios";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async() =>{
const {data} = await axios.get('/posts') // Вытаскиваем из аксиоса дату при его выполнении (Функция будет выполнять запрос гет (Вставить в диспатч в хоум(В том компаненте, где требудется получить посты(инфу))))
return data
})

export const fetchTags = createAsyncThunk("posts/fetchTags", async() =>{
    const {data} = await axios.get('/tags') // Запрос на получение тегов
    return data
    })

export const fetchPostRemove = createAsyncThunk("posts/fetchPostRemove", async (id) =>{
    const {data} = await axios.delete(`/posts/${id}`) // Запрос на удаление статьи 
    return data.doc
    })

const initialState = {
    posts: {
        items: [],
        status: 'loading'
    },
    tags: {
        items: [],
        status: 'loading'
    }
}

const postsSlice = createSlice({
    name: "posts",
    initialState,

    //методы, которые позволяют обновлять state
    reducers: {},

    extraReducers: (builder) => {
        builder.addCase(fetchPosts.pending, (state) => {
            state.posts.status = 'loading';
            state.posts.items = [];
        });

        builder.addCase(
            fetchPosts.fulfilled,
            (state, action) => { //Если загрузилось, то прописываем в айтемст, что есть action.payload fullfieled если успешно все загрузилось 
                state.posts.items = action.payload;
                state.posts.status = 'loaded';
            }
        );

        builder.addCase(fetchPosts.rejected, (state) => { // rejected - если ошибка
            state.posts.items = [];
            state.posts.status = 'error';
        });

        builder.addCase(fetchTags.pending, (state) => {
            state.tags.status = 'loading';
            state.tags.items = [];
        });

        builder.addCase(
            fetchTags.fulfilled,
            (state, action) => { //Если загрузилось, то прописываем в айтемст, что есть action.payload fullfieled если успешно все загрузилось 
                state.tags.items = action.payload;
                state.tags.status = 'loaded';
            }
        );

        builder.addCase(fetchTags.rejected, (state) => { // rejected - если ошибка
            state.tags.items = [];
            state.tags.status = 'error';
        });

        builder.addCase(fetchPostRemove.pending, (state, action) => {
            console.log(action.meta.arg)
            state.posts.items = state.posts.items.filter((obj) => obj._id !== action.meta.arg)
        });
    }
})



export const postsReducer = postsSlice.reducer; //Вытащили редусер из постс слайс