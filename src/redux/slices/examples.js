import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios/axios";

export const fetchexamples = createAsyncThunk("example/fetchexamples", async() =>{
const {data} = await axios.get('/example') // Вытаскиваем из аксиоса дату при его выполнении (Функция будет выполнять запрос гет (Вставить в диспатч в хоум(В том компаненте, где требудется получить посты(инфу))))
return data
})

export const fetchTags = createAsyncThunk("example/fetchTags", async() =>{
    const {data} = await axios.get('/tags') // Запрос на получение тегов
    return data
    })

export const fetchExampleRemove = createAsyncThunk("example/fetchExampleRemove", async (id) =>{
    const {data} = await axios.delete(`/example/${id}`) // Запрос на удаление статьи 
    return data.doc
    })

const initialState = {
    examples: {
        items: [],
        status: 'loading'
    },
    tags: {
        items: [],
        status: 'loading'
    }
}

const examplesSlice = createSlice({
    name: "examples",
    initialState,

    //методы, которые позволяют обновлять state
    reducers: {},

    extraReducers: (builder) => {
        builder.addCase(fetchexamples.pending, (state) => {
            state.examples.status = 'loading';
            state.examples.items = [];
        });

        builder.addCase(
            fetchexamples.fulfilled,
            (state, action) => { //Если загрузилось, то прописываем в айтемст, что есть action.payload fullfieled если успешно все загрузилось 
                state.examples.items = action.payload;
                state.examples.status = 'loaded';
            }
        );

        builder.addCase(fetchexamples.rejected, (state) => { // rejected - если ошибка
            state.examples.items = [];
            state.examples.status = 'error';
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

        builder.addCase(fetchExampleRemove.pending, (state, action) => {
            console.log(action.meta.arg)
            state.examples.items = state.examples.items.filter((obj) => obj._id !== action.meta.arg)
        });
    }
})



export const examplesReducer = examplesSlice.reducer; //Вытащили редусер из постс слайс