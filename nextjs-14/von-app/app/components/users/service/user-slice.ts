import { createSlice } from "@reduxjs/toolkit"
import { initialState } from "./user-init"
import { findAllUsers } from "./user-service"

const userThunks = [findAllUsers]

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
        .addCase(findAllUsers.fulfilled, handleFulfilled)
    }
})

export const getAllUsers = (state : any) => {
    console.log('--------------before useSelector--------------')
    console.log(JSON.stringify(state.user.array))
    return state.user.array;
}

export const{} = userSlice.actions
export default userSlice.reducer;