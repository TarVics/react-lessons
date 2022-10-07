import {createAsyncThunk, createSlice, current} from "@reduxjs/toolkit";

import {usersService} from "../../services";

const initialState = {
    posts: {},
    current: null,
    loading: false,
    error: null
}

const getAll = createAsyncThunk(
    'postsSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const posts = await usersService.getPosts();
            return posts;
        } catch (e) {
            return rejectWithValue(e);
        }
    }
);

const getById = createAsyncThunk(
    'postsSlice/getById',
    async (id, {rejectedWithValue}) => {
        try {
            const {[id]: post} = await usersService.getPosts(id);
            return post;
        } catch (e) {
            rejectedWithValue(e);
        }
    }
);

const postsSlice = createSlice({
    name: 'postsSlice',
    initialState,
    reducers: {
        setCurrentPost: (state, action) => {
            state.current = action.payload
        },
        deleteById: (state, action) => {
            const index = state.posts.findIndex(post => post.id === action.payload);
            state.posts.splice(index, 1)
            console.log(current(state.users));
        }
    },
    // extraReducers:{
    //     [getAll.fulfilled]:(state, action)=>{
    //         state.posts = action.payload
    //     },
    // }
    extraReducers: builder =>
        builder
            // .addCase(getAll.fulfilled, (state, action) => {
            //     state.posts = action.payload
            //     state.loading = false
            // })
            .addCase(getAll.rejected, (state, action) => {
                state.error = action.payload
                state.loading = false
            })
            .addCase(getAll.fulfilled, (state, action) => {
                state.posts = action.payload;
                state.loading = false
            })
            .addCase(getAll.pending, (state, action) => {
                state.loading = true
            })
            .addCase(getById.fulfilled, (state, action) => {
                state.current = action.payload
            })
});

const {reducer: postsReducer, actions: {setCurrentPost, deleteById}} = postsSlice;

const postsActions = {
    deleteById,
    getAll,
    getById,
    setCurrentPost
}

export {postsReducer, postsActions}