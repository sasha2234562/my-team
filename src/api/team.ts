import {instance} from "./api";
import {getPage} from "../components/bll/local_storage/local_storage";

export let number_of_pages = getPage()

export const team = {
    getTeam(page: number = 1, pageCount: number = number_of_pages) {
        number_of_pages = pageCount
        return instance.get(`users?page=${page}&count=${pageCount}`);
    },
    getPaginator(page: number) {
        return instance.get(`users?page=${page}&count=${number_of_pages}`).then(res => res.data);
    }
}
export const validation = {
    login(values: LoginValues) {
        return instance.post('/auth/login', values)
    },
    logout() {
        return instance.delete('/auth/login')
    },
    authMe() {
        return instance.get('/auth/me')
    }
}

export type LoginValues = {
    email: string,
    password: string
    rememberMe: boolean
}