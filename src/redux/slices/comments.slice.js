import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {usersService} from "../../services";

const initialState = {
    comments: {},
    current: null,
    loading: false,
    error: null
}

const getAll = createAsyncThunk(
    'commentsSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            return await usersService.getComments();
        } catch (e) {
            return rejectWithValue(e);
        }
    }
);

const getByPostId = createAsyncThunk(
    'commentsSlice/getById',
    async (postId, {rejectedWithValue}) => {
        try {
            const {[postId]: comments} = await usersService.getComments(postId);
            return comments;
        } catch (e) {
            rejectedWithValue(e);
        }
    }
);

const commentsSlice = createSlice({
    name: 'commentsSlice',
    initialState,
    reducers: {
        setCurrent: (state, action) => {
            state.current = action.payload
        }
    },
    // extraReducers:{
    //     [getAll.fulfilled]:(state, action)=>{
    //         state.comments = action.payload
    //     },
    // }
    extraReducers: builder =>
        builder
            .addCase(getAll.rejected, (state, action) => {
                state.error = action.payload
                state.loading = false
            })
            .addCase(getAll.fulfilled, (state, action) => {
                state.comments = action.payload;
                state.loading = false
            })
            .addCase(getAll.pending, (state) => {
                state.loading = true
            })
            .addCase(getByPostId.fulfilled, (state, action) => {
                state.current = action.payload
            })
});

const {reducer: commentsReducer} = commentsSlice;

const commentsActions = {
    getAll,
    getByPostId,
}

export {commentsReducer, commentsActions}