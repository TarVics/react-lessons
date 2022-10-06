import {GET_POST_COMMENTS, SET_COMMENTS, SET_POST_COMMENTS} from "../actions";

const commentsReducer = (state = {comments: [], postComments: null}, action) => {
    let res;
    switch (action.type) {
        case SET_COMMENTS:
            return {...state, comments: [...action.payload]}
        case GET_POST_COMMENTS:
            res = state.comments.find(val => action.payload === val.post.id) || null;
            return {...state, postComments: res}
        case SET_POST_COMMENTS:
            res = state.comments.filter(val => action.payload.post.id !== val.post.id).concat(action.payload);
            return {...state, comments: res, postComments: action.payload}
        default:
            return state;
    }
}

export {
    commentsReducer
}