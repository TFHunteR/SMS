import axiosClient from "../AxiosClient"

export const loadStudents = async () => {
    
    const data = await axiosClient.get('/students')
    const students = data.data.data
    const pagerLinks = data.data.links

    return {students, pagerLinks}
    

}