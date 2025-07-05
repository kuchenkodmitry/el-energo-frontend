import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios/axios";

export const fetchContact = createAsyncThunk("contact/fetchcontact", async () => {
    const { data } = await axios.get('/contact') // Вытаскиваем из аксиоса дату при его выполнении (Функция будет выполнять запрос гет (Вставить в диспатч в хоум(В том компаненте, где требудется получить посты(инфу))))
    return data
})

export const fetchPatchContact = createAsyncThunk("contact/fetchPatchContact", async (id) => {
    const { data } = await axios.patch(`/contact/${id}`)
    return data
})

// export const fetchPostRemove = createAsyncThunk("contact/fetchPostRemove", async (id) => {
//     const { data } = await axios.delete(`/contact/${id}`) // Запрос на удаление статьи 
//     return data.doc
// })

const initialState = {
    contact: {
        items: [],
        status: 'loading'
    }
}

const contactSlice = createSlice({
    name: "contact",
    initialState,

    //методы, которые позволяют обновлять state
    reducers: {},

    extraReducers: (builder) => {
        builder.addCase(fetchContact.pending, (state) => {
            state.contact.status = 'loading';
            state.contact.items = [];
        });

        builder.addCase(
            fetchContact.fulfilled,
            (state, action) => { //Если загрузилось, то прописываем в айтемст, что есть action.payload fullfieled если успешно все загрузилось 
                state.contact.items = action.payload;
                state.contact.status = 'loaded';
            }
        );

        builder.addCase(fetchContact.rejected, (state) => { // rejected - если ошибка
            state.contact.items = [];
            state.contact.status = 'error';
        });

        // builder.addCase(fetchTags.pending, (state) => {
        //     state.tags.status = 'loading';
        //     state.tags.items = [];
        // });

        // builder.addCase(
        //     fetchTags.fulfilled,
        //     (state, action) => { //Если загрузилось, то прописываем в айтемст, что есть action.payload fullfieled если успешно все загрузилось 
        //         state.tags.items = action.payload;
        //         state.tags.status = 'loaded';
        //     }
        // );

        // builder.addCase(fetchTags.rejected, (state) => { // rejected - если ошибка
        //     state.tags.items = [];
        //     state.tags.status = 'error';
        // });

        // builder.addCase(fetchPostRemove.pending, (state, action) => {
        //     console.log(action.meta.arg)
        //     state.contact.items = state.contact.items.filter((obj) => obj._id !== action.meta.arg)
        // });
    }
})



export const contactReducer = contactSlice.reducer; //Вытащили редусер из постс слайс