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
        .addCase(findAllArticles.fulfilled,/* ok가 생략 되어 있음  */ (state: any, {payload}: any) => {state.array = payload})
        //switch case ( ) ; return ; / findAllArticles가 fulfilled라면 뒤 로직을 실행하라.
        //payload - 요청한 데이터 , 200 및 respose 볼 수 있지만 딱 자바에 요청했던 데이터만.

        //state.array와 state.article.array의 차이 / article state와 전체 state의 차이. 
    }
})
export const getAllArticles = (state: any) => ( state.article.array ) //리턴이 생략됨.

export const {} = articleSlice.actions

export default articleSlice.reducer;