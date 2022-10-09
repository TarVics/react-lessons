import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {carsReducer} from "./slices";

const rootReducer = combineReducers({
    carsReducer,
});

const setupStore = () => configureStore({
    reducer: rootReducer
});

export {
    setupStore
}