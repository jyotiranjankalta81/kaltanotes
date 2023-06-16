/* eslint-disable no-empty-pattern */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { serverInstance } from '../../API/ServerInstance'


export const getallorder = createAsyncThunk('main/get-All-order', async ({ }, { rejectWithValue }) => {
    try {
        let response = await serverInstance('main/get-All-order', 'GET')
        return response
    } catch (err) {
        return rejectWithValue(err.response.data)
    }
})

export const getblog = createAsyncThunk('main/mycreate-blog', async ({ }, { rejectWithValue }) => {
    try {
        let response = await serverInstance('main/mycreate-blog', 'GET')
        return response
    } catch (err) {
        return rejectWithValue(err.response.data)
    }
})

const adminSlice = createSlice({
    name: "udata",
    initialState: {
        orderlist: [],
        blogs: [],
        loading: false,
        error: false,
        message: " "
    },
    reducers: {
        getAllOrders: (state, action) => {
            state.orderlist = action.payload
        },
        getBlogs: (state, action) => {
            state.blogs = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getallorder.pending, (state) => {
                state.loading = true;
            })
            .addCase(getallorder.fulfilled, (state, action) => {
                state.loading = false;
                state.error = !action.payload;
                state.message = action.payload.message
                state.orderlist = action.payload.data;
            })
            .addCase(getallorder.rejected, (state, action) => {
                state.loading = false;
                state.error = true;
                state.message = action.payload?.message
            }).addCase(getblog.fulfilled, (state, action) => {
                state.loading = false;
                state.error = !action.payload;
                state.message = action.payload.message
                state.blogs = action.payload.data;
            })
            .addCase(getblog.rejected, (state, action) => {
                state.loading = false;
                state.error = true;
                state.message = action.payload?.message
            })
    }
})

export const { getAllOrders, getBlogs } = adminSlice.actions
export default adminSlice.reducer