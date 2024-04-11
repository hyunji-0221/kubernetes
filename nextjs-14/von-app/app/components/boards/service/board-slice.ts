import { createSlice } from "@reduxjs/toolkit"
import { initialState } from "./board-init"
import { countBoards, findAllBoards, findBoardById } from "./board-service"
import { retry } from "@reduxjs/toolkit/query"

const userThunks = [findAllBoards]

const status = {
    pending : 'pending',
    fulfilled : 'fulfilled',
    rejected : 'rejected'
}

export const boardSlice = createSlice({
    name : "boards",
    initialState,
    reducers : {},
    extraReducers : builder => {
        const {pending, rejected} = status;

        builder
        .addCase(findAllBoards.fulfilled, (state : any, {payload} : any)=>{ state.array = payload })
        .addCase(findBoardById.fulfilled, (state : any, {payload} : any)=>{ state.json = payload })
        .addCase(countBoards.fulfilled, (state : any, {payload}:any)=>{ state.number=payload })
    }
})

export const getAllBoards = (state : any) => {
    console.log('--------------before useSelector--------------')
    console.log(JSON.stringify(state.board.array))
    return state.board.array
}

export const getAllBoardsById = (state :any) => (state.board.json)

export const getCountsBoards = (state:any) => (state.board.number)


export const{} = boardSlice.actions
export default boardSlice.reducer;