import { createSlice } from "@reduxjs/toolkit"
import { initialState } from "./user-init"
import { countUsers, deleteUserById, findAllUsers, findUserById } from "./user-service"

const userThunks = [findAllUsers]

const status = {
    pending : 'pending',
    fulfilled : 'fulfilled',
    rejected : 'rejected'
}


export const userSlice = createSlice({
    name : "users",
    initialState,
    reducers : {
        passwordHandler:(state:any,{payload}) => {state.json.password = payload},
        phoneHandler:(state:any,{payload}) => {state.json.phone = payload},
        jobHandler:(state:any,{payload}) => {state.json.job = payload},

    },
    extraReducers : builder => {
        const {pending, rejected} = status;

        builder
        .addCase(findAllUsers.fulfilled, (state : any, {payload} : any)=>{state.array = payload})
        .addCase(findUserById.fulfilled, (state : any, {payload} : any)=>{state.json = payload})
        .addCase(countUsers.fulfilled, (state : any, {payload} : any)=>{state.number = payload})
        .addCase(deleteUserById.fulfilled, (state : any, {payload} : any)=>{state.message = payload})
    }
})

export const getAllUsers = (state : any) => {
    console.log('--------------before useSelector--------------')
    console.log(JSON.stringify(state.user.array))
    return state.user.array;
}

export const getUserById = ( state : any ) => ( state.user.json )
export const getCountsUsers = ( state : any ) => ( state.user.number )
export const getDeleteResult = ( state : any ) => ( state.user.message )

export const{ passwordHandler, phoneHandler, jobHandler } = userSlice.actions
export default userSlice.reducer;