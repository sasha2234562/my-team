import axios from "axios";


export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "50659ead-1a5f-4716-a050-11b2b876ac95",
        "Authorization": "64f3949c-36c7-4c05-9d59-c35be1178596"
    },
})