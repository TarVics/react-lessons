import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {combineReducers, createStore} from "redux";

import App from './App';


export const SET_USERS = "SET_USERS";
export const GET_USER = "GET_USER";
export const SET_USER = "SET_USER";
export const SET_POSTS = "SET_POSTS";
export const GET_POST = "GET_POST";
export const SET_POST = "SET_POST";
export const SET_COMMENTS = "SET_COMMENTS";
export const SET_POST_COMMENTS = "SET_POST_COMMENTS";
export const GET_POST_COMMENTS = "GET_POST_COMMENTS";

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
};

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
};

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
};

const reducer = combineReducers({usersReducer, postsReducer, commentsReducer});

const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
);
