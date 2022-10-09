import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {carsService} from "../../services";

const initialState = {
    items: [],
    current: {car: null, edit: false},
    loading: false,
    error: null
}

const getAll = createAsyncThunk(
    'carsSlice/getAll',
    async (_, {rejectWithValue, getState}) => {
        const state = getState();
        console.log(state);
        try {
            const { data } = await carsService.getAll();
            return data.sort((a, b) => b.id - a.id);
        } catch (e) {
            return rejectWithValue(e);
        }
    }
);

const getById = createAsyncThunk(
    'carsSlice/getById',
    async (id, {rejectedWithValue, dispatch}) => {
        try {
            const { data } = await carsService.getById(id);
            dispatch(setCurrent({car: data}));
            return data;
        } catch (e) {
            rejectedWithValue(e);
        }
    }
);

const create = createAsyncThunk(
    'carsSlice/create',
    async (car, {rejectedWithValue, dispatch}) => {
        try {
            const {data} = await carsService.create(car);
            dispatch(appendItem(data));
            dispatch(setCurrent({car: data}));
            return data;
        } catch (e) {
            rejectedWithValue(e);
        }
    }
);

const updateById = createAsyncThunk(
    'carsSlice/updateById',
    async (car, {rejectedWithValue, dispatch, getState}) => {
        try {
            const { data } = await carsService.updateById(car.id, car);
            dispatch(updateItem(data));
            dispatch(setCurrent({car: data}));
            return data;
        } catch (e) {
            rejectedWithValue(e);
        }
    }
);

const deleteById = createAsyncThunk(
    'carsSlice/deleteById',
    async (id, {rejectedWithValue, dispatch}) => {
        try {
            await carsService.deleteById(id);
            dispatch(deleteItemById(id));
            dispatch(setCurrent());
            return id;
        } catch (e) {
            rejectedWithValue(e);
        }
    }
);

const carsSlice = createSlice({
    name: 'carsSlice',
    initialState,
    reducers: {
        setCurrent: (state, action) => {
            const {car = null, edit = false} = action.payload || initialState.current;
            state.current = {car, edit};
        },

        appendItem: (state, action) => {
            state.items.unshift(action.payload);
        },

        updateItem: (state, action) => {
            const {payload: item} = action;
            const editItem = state.items.find(val => val.id === item.id);
            if (editItem) Object.assign(editItem, item);
        },

        deleteItemById: (state, action) => {
            const {payload: id} = action;
            const index = state.items.findIndex(item => item.id === id);
            if(~index) state.items.splice(index, 1);
        },

    },
    // extraReducers:{
    //     [getAll.fulfilled]:(state, action)=>{
    //         state.cars = action.payload
    //     },
    // }
    extraReducers: builder =>
        builder
            // .addCase(getAll.fulfilled, (state, action) => {
            //     state.cars = action.payload
            //     state.loading = false
            // })

            .addCase(getAll.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getAll.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })
            .addCase(getAll.fulfilled, (state, action) => {
                state.items = action.payload;
                state.current = initialState.current;
                state.loading = false;
            })

            .addCase(getById.rejected, (state, action) => {
                state.current = initialState.current;
                state.error = action.payload;
            })

            .addCase(create.rejected, (state, action) => {
                state.error = action.payload;
            })

            .addCase(updateById.rejected, (state, action) => {
                state.error = action.payload;
            })

            .addCase(deleteById.rejected, (state, action) => {
                state.error = action.payload;
            })
});

const {reducer: carsReducer, actions: {setCurrent, appendItem, updateItem, deleteItemById}} = carsSlice;

const carsActions = {
    setCurrent,
    getAll,
    getById,
    create,
    updateById,
    deleteById
}

export {carsReducer, carsActions}