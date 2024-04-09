import { createSlice } from "@reduxjs/toolkit"
import { initialState } from "./board-init"
import { findAllBoards, findBoardById } from "./board-service"

const userThunks = [findAllBoards]

const status = {
    pending : 'pending',
    fulfilled : 'fulfilled',
    rejected : 'rejected'
}

const handleFulfilled = (state : any, {payload} : any)=>{
    console.log('-------------- 자바 다녀온 객체 --------------')
    state.array = payload
    console.log(state.array)
}

export const boardSlice = createSlice({
    name : "boards",
    initialState,
    reducers : {},
    extraReducers : builder => {
        const {pending, rejected} = status;

        builder
        .addCase(findAllBoards.fulfilled, handleFulfilled)
        .addCase(findBoardById.fulfilled, handleFulfilled)
    }
})

export const getAllBoards = (state : any) => {
    console.log('--------------before useSelector--------------')
    console.log(JSON.stringify(state.board.array))
    return state.board.array;
}

export const getAllBoardsById = (state :any) => {
    console.log('==== get All Boards By id ====')
    console.log(state.board.array)
    return state.board.array;
}

export const{} = boardSlice.actions
export default boardSlice.reducer;