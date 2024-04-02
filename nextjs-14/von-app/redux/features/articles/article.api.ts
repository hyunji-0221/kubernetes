import { instance } from "@/redux/common/configs/axios-configs"


export const fetchAllArticlesAPI = async (page: number) =>{
    try{
        const response = await instance.get('/all-articles',{
            params: {page, limit: 10}
        })
        return response.data
    }catch(error){
        console.log(error)
        return error
    }
    
}

//get이라 headers 없어도 됨, 없으면 default로 들어옴