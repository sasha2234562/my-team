import {teamReducer} from "./team_reducer";
import {loginReducer} from "./login_reducer";
import {userReducer} from "./user_reducer";
import {AnyAction, applyMiddleware, combineReducers, legacy_createStore} from "redux";
import thunkMiddleware, {ThunkDispatch} from "redux-thunk";
import {useDispatch} from "react-redux";

const rootReducer = combineReducers({
    team: teamReducer,
    login: loginReducer,
    user: userReducer
})
export const store = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type AppStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunkDispatch = ThunkDispatch<AppStore, never, AnyAction>

export const useAppDispatch = () => useDispatch<AppThunkDispatch>();