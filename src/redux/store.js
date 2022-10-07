import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {commentsReducer, postsReducer, usersReducer} from "./slices";

const rootReducer = combineReducers({
    postsReducer,
    usersReducer,
    commentsReducer
});

const setupStore = () => configureStore({
    reducer: rootReducer
});

export {
    setupStore
}