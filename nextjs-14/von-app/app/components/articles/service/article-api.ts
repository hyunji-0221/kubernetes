import { instance } from "@/app/components/common/configs/axios-configs"

export const findAllArticlesAPI = async (page:number) => {
    try {
        return (await instance.get('/articles/list', {
            params: {page, size: 10, limit: 10}
        })).data
    } catch (error) {
        return error
    }
}