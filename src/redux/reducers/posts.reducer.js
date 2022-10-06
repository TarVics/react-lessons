import {GET_POST, SET_POST, SET_POSTS} from "../actions";

const postsReducer = (state = {posts: {}, post: null}, action) => {
    switch (action.type) {
        case SET_POSTS:
            return {...state, posts: {...action.payload}}
        case GET_POST:
            return {...state, post: state.posts[action.payload] || null}
        case SET_POST:
            return {posts: {...state.posts, [action.payload.id]: action.payload}, post: action.payload}
        default:
            return state;
    }
}

export {
    postsReducer
}