import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { serverInstance } from '../../API/ServerInstance'

const initialState = {
    token: null,
    role: null,
    sessionID: null,
    loading: false,
    error: false,
    message: "",
    userdetalis:null
}

export const userLogin = createAsyncThunk('authentication/login', async (data, { rejectWithValue }) => {
    try {
        let response = await serverInstance('user/login', 'POST', data.data)
        return response
    } catch (err) {
        return rejectWithValue(err.response.data)
    }
})

export const getuserdetails = createAsyncThunk('main/userdetails', async (data,{ rejectWithValue }) => {
    try {
        let response = await serverInstance('main/userdetails', 'GET');
        return response

    } catch (err) {
        return rejectWithValue(err.response.data)

    }
})


export const userRegister = createAsyncThunk('authentication/register', async (data, { rejectWithValue }) => {
    try {
        let response = await serverInstance('user/register', 'POST', data.data)
        return response
    } catch (err) {
        return rejectWithValue(err.response.data)
    }
})

export const authenticationSlice = createSlice({
    name: "authentication",
    initialState,
    reducers: {
        resetAuthNotification: (state) => {
            state.error = false
            state.message = null
        },
        getuserdetailsAction: (state, action) => {
            state.userdetalis = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(userLogin.pending, (state) => {
                state.loading = true;
            })
            .addCase(userLogin.fulfilled, (state, action) => {
                state.loading = false;
                state.error = !action.payload.success;
                state.message = action.payload.message
                state.token = action.payload.data.tokens
                state.role = action.payload.data.userrole
                state.sessionID = action.payload.data.sessionid
                if (action.payload.success) {
                    localStorage.setItem("token", JSON.stringify(action.payload.data.tokens));
                    localStorage.setItem("user_role", action.payload.data.userrole);
                    window.location.reload();
                }
            })
            .addCase(userLogin.rejected, (state, action) => {
                state.loading = false;
                state.error = true;
                state.message = action.payload.message
            })
            .addCase(userRegister.pending, (state) => {
                state.loading = true;
            })
            .addCase(userRegister.fulfilled, (state, action) => {
                state.loading = false;
                state.error = !action.payload.success;
                state.message = action.payload.message
                action.meta.arg.navigate('/login')
            })
            .addCase(userRegister.rejected, (state, action) => {
                state.loading = false;
                state.error = true;
                state.message = action.payload.message
            }).addCase(getuserdetails.fulfilled, (state, action) => {
                state.loading = false;
                state.error = !action.payload.success;
                // state.message = action.payload.message;
                state.userdetalis = action.payload.data;
            }).addCase(getuserdetails.rejected, (state, action) => {
                state.loading = false;
                state.error = true;
            })
    }
})

export const selectAuthErrorStatus = (state) => state.auth.error
export const selectAuthMessage = (state) => state.auth.message
export const selectAuthToken = (state) => state.auth?.token?.access?.token
export const selectUserRole = (state) => state.auth.role
export const selectuserDetails = (state) => state.auth.userdetalis

export const { resetAuthNotification,getuserdetailsAction } = authenticationSlice.actions;
export default authenticationSlice.reducer;