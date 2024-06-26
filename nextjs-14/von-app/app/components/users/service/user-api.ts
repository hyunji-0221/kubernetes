import { instance } from "@/app/components/common/configs/axios-configs"
import { IUser } from "../model/user-model"

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

export const modifyUserByIdAPI = async (getUser:IUser) => {
    try{
        console.log('Modify API '+JSON.stringify(getUser))
        return (await instance.put('/users/modify',getUser)).data
    }
    catch(error){
        return error
    }
}

//post 방식으로 body를 보내는 것이기 때문에 key(params)가 필요 없음.
//requsetBody는 하나의 객체로 보내고, resquestParam은 key와 value 형태로 보냄.
export const loginAPI = async (user :IUser) => {
    try{
        console.log('api '+JSON.stringify(user))
        //자바에서 Messanger.message 에 값을 담았으니 data.message로 return 한다.
        return (await instance.post('/users/login',user)).data.message
    }catch(error){
        return error
    }
}