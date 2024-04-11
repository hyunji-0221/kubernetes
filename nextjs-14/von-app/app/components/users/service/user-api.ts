import { instance } from "@/app/components/common/configs/axios-configs"

export const findAllUsersAPI = async (page:number) => {
    try {
        return (await instance.get('/users/list', {
            params: {page, size: 10, limit: 10}
        })).data
    } catch (error) {
        return error
    }
}


export const findUserByIdAPI = async (id:number) => {
    try {
        return (await instance.get('/users/detail', { params : {id} })).data
    } catch (error) {
        return error
    }
}

export const countUsersAPI = async() => {
    try{
        return (await instance.get('/users/count')).data
    }catch(error){
        return error
    }
}

export const deleteUserByIdAPI = async(id:number) => {
    try{
        return (await instance.delete('/users/delete',{ params : {id} })).data
    }catch(error){
        return error
    }
}

export const modifyUserByIdAPI = async (getUser:any) => {
    try{
        return (await instance.put('/users/modify',{ params : {getUser}})).data
    }
    catch(error){
        return error
    }
}