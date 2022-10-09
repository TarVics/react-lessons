import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {carsService} from "../../services";

const initialState = {
    items: [],
    prev: null,
    next: null,
    current: {car: null, edit: false},
    loading: false,
    error: null
}

const getAll = createAsyncThunk(
    'carsSlice/getAll',
    async (page, {rejectWithValue}) => {
        try {
            const { data } = await carsService.getAll(page);
            return data;
        } catch (e) {
            return rejectWithValue(e.toString());
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
            rejectedWithValue(e.toString());
        }
    }
);

const attachPhoto = createAsyncThunk(
    'carsSlice/attachPhoto',
    async ({car, file}, {rejectedWithValue, dispatch}) => {
        try {
            const formData = new FormData();
            formData.append('photo', file);
            const {data} = await carsService.addPhotoById(car.id, formData);
            const obj = {...car, photo: URL.createObjectURL(file)}
            dispatch(updateItem(obj));
            dispatch(setCurrent({obj}));
            return data;
        } catch (e) {
            rejectedWithValue(e.toString());
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
                state.error = null;
                state.loading = true;
            })
            .addCase(getAll.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })
            .addCase(getAll.fulfilled, (state, action) => {
                state.loading = false;
                const {payload: {data, prev, next}} = action;
                state.items = data;
                state.prev = prev;
                state.next = next;
                state.current = initialState.current;
            })

            .addCase(create.pending, (state, action) => {
                state.error = null;
            })
            .addCase(create.rejected, (state, action) => {
                state.error = action.payload;
            })

            .addCase(attachPhoto.pending, (state, action) => {
                state.error = null;
            })
            .addCase(attachPhoto.rejected, (state, action) => {
                state.error = action.payload;
            })
});

const {reducer: carsReducer, actions: {setCurrent, appendItem, updateItem}} = carsSlice;

const carsActions = {
    setCurrent,
    getAll,
    create,
    attachPhoto
}

export {carsReducer, carsActions}