import { createSlice } from "@reduxjs/toolkit"
import { initialState } from "./user.init"
import { fetchAllUsers } from "./user.service"

const userThunks = [fetchAllUsers]

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

export const userSlice = createSlice({
    name : "users",
    initialState,
    reducers : {},
    extraReducers : builder => {
        const {pending, rejected} = status;

        builder
        .addCase(fetchAllUsers.fulfilled, handleFulfilled)
    }
})

export const getAllUsers = (state : any) => {
    console.log('--------------before useSelector--------------')
    console.log(JSON.stringify(state.user.array.result))
    return state.user.array.result;
}

export const{} = userSlice.actions
export default userSlice.reducer;