import {createAsyncThunk, createSlice, current} from "@reduxjs/toolkit";

import {usersService} from "../../services";

const initialState = {
    users: {},
    current: null,
    loading: false,
    error: null
}

const getAll = createAsyncThunk(
    'usersSlice/getAll',
    async (_, {rejectWithValue, dispatch, getState}) => {
        const state = getState();
        console.log(state);
        try {
            const users = await usersService.getUsers();
            dispatch(getAllWithDispatch(users));
        } catch (e) {
            return rejectWithValue(e);
        }
    }
);

const getById = createAsyncThunk(
    'usersSlice/getById',
    async (id, {rejectedWithValue}) => {
        try {
            const {[id]: user} = await usersService.getUsers(id);
            return user;
        } catch (e) {
            rejectedWithValue(e);
        }
    }
);

const usersSlice = createSlice({
    name: 'usersSlice',
    initialState,
    reducers: {
        // getAll: (state, action) => {
        //     state.users = action.payload
        // },
        getAllWithDispatch: (state, action) => {
            state.users = action.payload
        },
        setCurrentUser: (state, action) => {
            state.current = action.payload
        },
        deleteById: (state, action) => {
            const index = state.users.findIndex(user => user.id === action.payload);
            state.users.splice(index, 1)
            console.log(current(state.users));

        }
    },
    // extraReducers:{
    //     [getAll.fulfilled]:(state, action)=>{
    //         state.users = action.payload
    //     },
    // }
    extraReducers: builder =>
        builder
            // .addCase(getAll.fulfilled, (state, action) => {
            //     state.users = action.payload
            //     state.loading = false
            // })
            .addCase(getAll.rejected, (state, action) => {
                state.error = action.payload
                state.loading = false
            })
            .addCase(getAll.fulfilled, (state, action) => {
                state.loading = false
            })
            .addCase(getAll.pending, (state, action) => {
                state.loading = true
            })
            .addCase(getById.fulfilled, (state, action) => {
                state.current = action.payload
            })
});

const {reducer: usersReducer, actions: {setCurrentUser, deleteById, getAllWithDispatch}} = usersSlice;

const usersActions = {
    deleteById,
    getAll,
    getById,
    setCurrentUser
}

export {usersReducer, usersActions}