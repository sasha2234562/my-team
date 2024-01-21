import {USER, UserAction, Users} from "./types_reducers";

const initialState: Users = {
    name: '',
    id: 0,
    uniqueUrlName: null,
    like: false,
    photos: {
        small: null,
        large: null,
    },
    status: null,
    followed: false,
}

export const userReducer = (state: Users = initialState, action: UserAction): Users => {
    switch (action.type) {
        case USER:
            console.log(action.user)
            return {...action.user}
        case "Back":
            return {...state, id: null}
        default:
            return state
    }
}


//actions
export const userCreator = (user: Users) => ({type: USER, user} as const)
export const back = () => ({type: "Back"} as const)
