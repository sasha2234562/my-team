// userReducer types

import {getMyTeam, liked, pagination, preloader} from "./team_reducer";
import {errorLogin, isAuth, loginAction, logOut} from "./login_reducer";
import {back, userCreator} from "./user_reducer";

export type InitialUserState = {
    items: Users[]
    pageSize: number
    totalCount: number
    error: string
    currentPage: number
    preloader: boolean
}
export type Users = {
    name: string;
    id: number | null
    uniqueUrlName: string | null;
    like: boolean
    photos: {
        small: string | null;
        large: string | null;
    }
    status: string | null;
    followed: boolean;
}

export type  TeamActions = ReturnType<typeof getMyTeam>
    | ReturnType<typeof liked>
    | ReturnType<typeof pagination>
    | ReturnType<typeof preloader>

export const LIKE = "LIKE"
export const USERS = "USERS"
export const PAGINATOR = "PAGINATOR"
export const PRELOADER = "PRELOADER"

// loginReducer types

export type InitialState = {
    id: null | number
    email: string
    password: string
    rememberMe: boolean
    isAuth: boolean
    error: string
}

export type LoginAction =
    ReturnType<typeof loginAction>
    | ReturnType<typeof logOut>
    | ReturnType<typeof isAuth>
    | ReturnType<typeof errorLogin>

export const LOGIN = "LOGIN"
export const LOGOUT = "LOGOUT"
export const AUTH = "AUTH"
export const ERROR = "ERROR"

export type LoginResponse = {
    data: {
        userId: number
    },
    resultCode: number
    messages: string[]
}

// userReducer types

export type InitialStateUser = {
    id: number | null,
    email: string,
    first_name: string,
    last_name: string,
    avatar: string,
    like: boolean
}
export type UserAction = ReturnType<typeof userCreator> | ReturnType<typeof back>