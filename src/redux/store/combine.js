import {combineReducers} from "redux";

import {postsReducer, usersReducer, commentsReducer} from "../reducers";

const reducer = combineReducers({
    usersReducer,
    postsReducer,
    commentsReducer
});

export {
    reducer
}
