import { AUTH_TOGGLE } from "./type";
export const AuthReducer =(state, action) => {
    const {type} = action

    switch(type){
        case AUTH_TOGGLE:
            return !state
        default:
            return state
    }
}