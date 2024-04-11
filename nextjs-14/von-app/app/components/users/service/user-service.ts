import { createAsyncThunk } from "@reduxjs/toolkit";
import { countUsersAPI, deleteUserByIdAPI, findAllUsersAPI, findUserByIdAPI, modifyUserByIdAPI } from "./user-api";
import exp from "constants";

export const findAllUsers : any = createAsyncThunk(
    'users/findAllUsers',
    async(page:number)=>{
        console.log('findAllUsers page : '+ page)
        const data : any = await findAllUsersAPI(1)

        return data
    }
)

export const findUserById : any = createAsyncThunk(
    'users/findUserById',
    async(id:number)=>(findUserByIdAPI(id))
)

export const countUsers : any = createAsyncThunk(
    'users/countUsers',
    async() => (await countUsersAPI())
)

export const deleteUserById : any = createAsyncThunk(
    'users/deleteUserById',
    async(id:number) => (await deleteUserByIdAPI(id))
)

export const modifyUserById : any = createAsyncThunk(
    'users/modifyUserById',
    async(getUser:any) => (await modifyUserByIdAPI(getUser))
)