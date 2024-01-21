import {team} from "../../../api/team";
import {AppDispatch, AppThunkDispatch} from "./store";
import {InitialUserState, LIKE, PAGINATOR, PRELOADER, TeamActions, USERS} from "./types_reducers";
import {getLike, setLike} from "../local_storage/local_storage";

const initialState: InitialUserState = {
    items: [],
    pageSize: 11,
    totalCount: 4,
    error: '',
    currentPage: 1,
    preloader: false,
    pageCount: 8
}

export const teamReducer = (state: InitialUserState = initialState, action: TeamActions): InitialUserState => {
    switch (action.type) {
        case USERS:
            return {
                ...state,
                totalCount: action.users.totalCount,
                items: action.users.items.map(i => ({
                    ...i,
                    like: !!getLike(i.id)
                }),)
            }
        case PAGINATOR:
            return {
                ...state,
                totalCount: action.users.totalCount,
                currentPage: action.page,
                items: action.users.items.map(i => ({
                    ...i,
                    like: !!getLike(i.id)
                }),)
            }
        case LIKE:
            setLike(action.likeId, action.like)
            return {
                ...state, items: state.items.map(l =>
                    l.id === action.likeId ?
                        ({...l, like: action.like})
                        : l)
            }
        case PRELOADER:
            return {...state, preloader: action.preloader}
        default:
            return state
    }
}

//actions
export const getMyTeam = (users: InitialUserState, page?: number) => ({type: USERS, users, page} as const)
export const liked = (likeId: number | null, like: boolean) => ({type: LIKE, likeId, like} as const)
export const pagination = (users: InitialUserState, page: number) => ({type: PAGINATOR, users, page} as const)
export const preloader = (preloader: boolean) => ({type: PRELOADER, preloader} as const)

//thunks
export const getTeam = (page?: number, pageCount?: number) => {
    return async (dispatch: AppThunkDispatch) => {
        dispatch(preloader(true))
        try {
            const res = await team.getTeam(page, pageCount)
            dispatch(getMyTeam(res.data, page))
            dispatch(preloader(false))
        } catch (e: any) {
            return e
        }
    };
}

export const getPaginator = (page: number) => async (dispatch: AppDispatch) => {
    try {
        dispatch(preloader(true))
        const res = await team.getPaginator(page)
        dispatch(pagination(res, page))
        dispatch(preloader(false))
    } catch (e) {
        return e
    }
}