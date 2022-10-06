import {GET_USER, SET_USER, SET_USERS} from "../actions";

const usersReducer = (state = {users: {}, user: null}, action) => {
    switch (action.type) {
        case SET_USERS:
            return {...state, users: {...action.payload}}
        case GET_USER:
            return {...state, user: state.users[action.payload] || null}
        case SET_USER:
            return {users: {...state.users, [action.payload.id]: action.payload}, user: action.payload}
        default:
            return state;
    }
}

export {
    usersReducer
}