import {RootState} from "../hook";

export const isAuthSelector = (state: RootState) => state.login.isAuth;
export const errorSelector = (state: RootState) => state.login.error;
