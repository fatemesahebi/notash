import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import apiClient from "utils/apiClient";

const url=apiClient.defaults.authUrl;
export const login = createAsyncThunk(
    "post/login",
    async (values, getState) => {
        const data = apiClient.post(`https://api.m3o.com/v1/user/Login`,values ).catch((e)=>{
            return e
        })
        return data
    }
);
//created: "1656252089"
// expires: "1656856889"
// id: "1pfUhrvrhK1dtNUkQXmDhh0OwCjD66OL285OP3xEppAGN54AnljPRASHCDt6eb6E8b6pOAZvT0ZlaqJblXnCWyyRHhmQQIccqdKFhiIdCJU9RqfvOuXDC8lQ88yy2Kgv"
// userId: "5e3a27c6-cd96-4dbb-af25-25af77482780"


export const create = createAsyncThunk(
    "post/create",
    async (values, getState) => {
        const data =     apiClient.post(`https://api.m3o.com/v1/user/Create`,values ).catch((e)=>{
            return e
        })
        return data
    }
);

//created: "1656251809"
// email: "alireza@gmail.com"
// id: "5e3a27c6-cd96-4dbb-af25-25af77482780"
// profile: {}
// updated: "1656251809"
// username: "alireza"
// verification_date: "0"
// verified: false


export const logOut = createAsyncThunk(
    "post/logOut",
    async (values, getState) => {
        const data =  apiClient.post(`https://api.m3o.com/v1/user/Logout`,values ).catch((e)=>{
            return e
        })
        return data
    }
);
const loginSlice= createSlice({
    name: "login",
    initialState: {
        userInfo: {},
        loading: false,
        error: null,
    },
    reducers: {
        setUserInfo:(state,action)=>{
            state.userInfo=action.payload
        }
    },
    extraReducers: {
        [login.fulfilled]: (state, action) => {
            state.userInfo = action.payload?.data?.session;
            state.loading = false;
            state.error = null;
        },
        [login.pending]: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        [login.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        [create.fulfilled]: (state, action) => {
            state.userInfo = action.payload?.data?.account;
            state.loading = false;
            state.error = null;
        },
        [create.pending]: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        [create.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        [logOut.fulfilled]: (state, action) => {
            state.userInfo = action.payload?.data;
            state.loading = false;
            state.error = null;
        },
        [logOut.pending]: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        [logOut.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        },
});
export const { setUserInfo } = loginSlice.actions;

export default loginSlice.reducer;