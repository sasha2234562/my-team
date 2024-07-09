import axios from "axios";


export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "bc4a865c-4106-4255-904e-7a0e58e814e6",
        "Authorization": "64f3949c-36c7-4c05-9d59-c35be1178596"
    },
})