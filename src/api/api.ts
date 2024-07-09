import axios from "axios";


export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '02801dc9-c643-40b7-9ded-224fb486763d',
        "Authorization": "Bearer 8bdba674-1a3d-4ea5-a543-f143be76efbd"
    }
})