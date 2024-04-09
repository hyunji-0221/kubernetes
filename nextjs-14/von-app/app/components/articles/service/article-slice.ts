import { createSlice } from "@reduxjs/toolkit";
import { initialState } from './article-init';
import { findAllArticles } from './article-service';

const articleThunks = [findAllArticles]

const status = {
    pending: 'pending',
    fulfilled: 'fulfilled',
    rejected: 'rejected'
}



const handlePending = (state: any) => {
  //진행중
}

const handleRejected = (state: any) => {
  //실패
}



export const articleSlice = createSlice({
    name: "articles",
    initialState,
    reducers: {},
    extraReducers: builder => {
        const {pending, rejected} = status;

        builder
        .addCase(findAllArticles.fulfilled, (state: any, {payload}: any) => {state.array = payload})

    }
})
export const getAllArticles = (state: any) => ( state.article.array) //리턴이 생략됨.

export const {} = articleSlice.actions

export default articleSlice.reducer;