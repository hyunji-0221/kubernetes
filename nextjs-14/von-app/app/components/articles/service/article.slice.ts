import { createSlice } from "@reduxjs/toolkit";
import { initialState } from './article.init';
import { fetchAllArticles } from './article.service';

const articleThunks = [fetchAllArticles]

const status = {
    pending: 'pending',
    fulfilled: 'fulfilled',
    rejected: 'rejected'
}

const handleFulfilled =  (state: any, {payload}: any) => {
    console.log('------------------ conclusion ---------------')
    state.array = payload
    console.log(state.array)
//성공
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
        .addCase(fetchAllArticles.fulfilled, handleFulfilled)

    }
})
export const getAllArticles = (state: any) => {
    console.log('------------------ Before useSelector ---------------')
    // console.log(JSON.stringify(state.article.array.result))
    return state.article.array.result;
}

export const {} = articleSlice.actions

export default articleSlice.reducer;