import {instance} from "./api";
import {getPage} from "../components/bll/local_storage/local_storage";

export let number_of_pages = 8
export const team = {
    getTeam(page: number = 8) {
        number_of_pages = getPage()
        return instance.get(`users?page=${page}&count=${page}`);
    },
    getPaginator(page: number) {
        return instance.get(`users?page=${page}&count=${8}`).then(res => res.data);
    }
}
export const validation = {
    login(values: LoginValues) {
        return instance.post('/auth/login', values)
    },
    logout() {
        return instance.delete('/auth/login')
    },
    authMe(){
        return instance.get('/auth/me')
    }
}

export type LoginValues = {
    email: string,
    password: string
    rememberMe: boolean
}