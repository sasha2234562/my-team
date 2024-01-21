import {clearStorage, getPage} from "../local_storage/local_storage";
import {LoginValues, validation} from "../../../api/team";
import {getTeam, preloader} from "./team_reducer";
import {AxiosError, AxiosResponse} from "axios";
import {AUTH, AuthResponse, ERROR, InitialState, LOGIN, LoginAction, LoginResponse, LOGOUT} from "./types_reducers";
import {AppThunkDispatch} from "./store";
import {handleServerNetworkError} from "../../../utils/handle_server_network_error";

const initialState: InitialState = {
    id: null,
    email: '',
    password: '',
    rememberMe: false,
    isAuth: false,
    error: ''
}

export const loginReducer = (state: InitialState = initialState, action: LoginAction): InitialState => {
    switch (action.type) {
        case LOGIN:
            return {...state, id: action.id, isAuth: true}
        case LOGOUT:
            clearStorage()
            return {...state, id: null, isAuth: false}
        case AUTH:
            return {...state, ...action.auth, isAuth: true}
        case ERROR:
            return {...state, error: action.error}
        default:
            return state
    }
}

//actions
export const loginAction = (id: number) => ({type: LOGIN, id} as const)
export const logOut = () => ({type: LOGOUT} as const)
export const isAuth = (auth: AuthResponse) => ({type: AUTH, auth} as const)
export const errorLogin = (error: string) => ({type: ERROR, error} as const)

//thunks
export const authMe = () => async (dispatch: AppThunkDispatch) => {
    try {
        const res = await validation.authMe()
        if (res.data.resultCode === 0) {
            dispatch(isAuth(res.data.data))
            dispatch(getTeam())
        }
    } catch (e) {
        handleServerNetworkError(e, dispatch)
    }
}

export const login = (values: LoginValues) => async (dispatch: AppThunkDispatch) => {
    try {
        dispatch(preloader(true))
        const res: AxiosResponse<LoginResponse> = await validation.login(values)
        if (res.data.resultCode === 0) {
            dispatch(loginAction(res.data.data.userId))
            dispatch(getTeam())
            dispatch(preloader(false))
        }
        dispatch(errorLogin(res.data.messages[0]))
        dispatch(preloader(false))
    } catch (e: any) {
        dispatch(preloader(false))
        handleServerNetworkError(e, dispatch)
    }
}

export const logOutMe = () => async (dispatch: AppThunkDispatch) => {
    try {
        dispatch(preloader(true))
        const res: AxiosResponse<LoginResponse> = await validation.logout()
        dispatch(logOut())
        dispatch(preloader(false))
    } catch (e) {
        dispatch(preloader(false))
        handleServerNetworkError(e, dispatch)
    }
}