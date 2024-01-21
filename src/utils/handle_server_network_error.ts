import axios from "axios";
import {AppThunkDispatch} from "../components/bll/reducers/store";
import {errorLogin} from "../components/bll/reducers/login_reducer";

export const handleServerNetworkError = (err: unknown, dispatch: AppThunkDispatch): void => {
    // ❗Проверка на наличие axios ошибки
    if (axios.isAxiosError(err)) {
        dispatch(errorLogin(err.response?.data?.error))
    }
};
