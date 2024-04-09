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