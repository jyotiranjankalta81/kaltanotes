import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// import * as api from '../../Axios/axiosInstance'
import * as api from "../../API/ApiEndPoint"
import axiosInstance from '../../API/axiosInstance'
import { serverInstance } from '../../API/ServerInstance'

export const getBlog = createAsyncThunk('main/blogs', async ({ }, { rejectWithValue }) => {
    try {
        let response = await serverInstance('main/blogs', 'GET');
        return response.data

    } catch (err) {
        return rejectWithValue(err.response.data)

    }
})

export const getComments = createAsyncThunk('comments/getComment', async ({ }, { rejectWithValue }) => {
    try {
        let response = await api.getComment()
        return response.data

    } catch (err) {
        return rejectWithValue(err.response.data)


    }
})

export const postContactDetail = createAsyncThunk('contact/postcontact', async ({ data, toast }, { rejectWithValue }) => {
    try {
        let response = await api.postContactDetails(data);
        toast.success('Your message has been sent successfully')
        return response.data
    } catch (err) {
        return rejectWithValue(err.response.data)

    }
})

export const postPartnerDetails = createAsyncThunk('partner-us/postpartner-us', async ({ data, toast }, { rejectWithValue }) => {
    try {
        let response = await api.postPartnerDetails(data);
        toast.success('Your message has been sent successfully')
        return response.data
    } catch (err) {
        return rejectWithValue(err.response.data)
    }
})

const commonSlice = createSlice({
    name: "blog",
    initialState: {
        blog: [],
        comments: [],
        loading: false,
        error: false,
        message: " "
    },
    reducers: {
        getAllBlog: (state, action) => {
            state.blog = action.payload
        },
        getAllComments: (state, action) => {
            state.comments = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getBlog.pending, (state) => {
                state.loading = true;
            })
            .addCase(getBlog.fulfilled, (state, action) => {
                state.loading = false;
                state.error = !action.payload;
                state.message = action.payload.message
                state.blog = action.payload;
            })
            .addCase(getBlog.rejected, (state, action) => {
                state.loading = false;
                state.error = true;
                state.message = action.payload?.message
            })
            .addCase(getComments.pending, (state) => {
                state.loading = true;
            })
            .addCase(getComments.fulfilled, (state, action) => {
                state.loading = false;
                state.error = !action.payload;
                state.message = action.payload.message
                state.comments = action.payload;
            })
            .addCase(getComments.rejected, (state, action) => {
                state.loading = false;
                state.error = true;
                state.message = action.payload.message
            })
            .addCase(postContactDetail.pending, (state) => {
                state.loading = true;
            })
            .addCase(postContactDetail.fulfilled, (state, action) => {
                state.loading = false;
                state.error = !action.payload;
                state.message = action.payload.message
            })
            .addCase(postContactDetail.rejected, (state, action) => {
                state.loading = false;
                state.error = true;
                state.message = action.payload.message
            })
            .addCase(postPartnerDetails.pending, (state) => {
                state.loading = true;
            })
            .addCase(postPartnerDetails.fulfilled, (state, action) => {
                state.loading = false;
                state.error = !action.payload;
                state.message = action.payload.message
            })
            .addCase(postPartnerDetails.rejected, (state, action) => {
                state.loading = false;
                state.error = true;
                state.message = action.payload.message
            })
    }
})

export const { getAllBlog, getAllComments } = commonSlice.actions
export default commonSlice.reducer