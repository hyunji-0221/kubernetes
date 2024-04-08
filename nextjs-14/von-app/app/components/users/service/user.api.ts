import { instance } from "@/app/components/common/configs/axios-configs"

export const fetchAllUsersAPI = async (page:number) => {
    try {
        return (await instance.get('/all-users', {
            params: {page, size: 10, limit: 10}
        })).data
    } catch (error) {
        return error
    }
}