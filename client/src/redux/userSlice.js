import {createSlice}from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState:{
        currentUser: null,
        isFatching: false,
        error: false
    },
    reducers: {
        loginStart: (state)=>{
            state.isFatching = true
        },
        loginSuccess: (state, action)=>{
            state.isFatching = false;
            state.currentUser = action.payload;
        },
        loginFailure: (state, action)=>{
            state.isFatching = false;
            state.error = true;
        },
        logOut: (state, action)=>{
            state.isFatching = false;
            state.error = false;
            state.currentUser = null;
        },
        registerStart: (state)=>{
            state.isFatching = true
        },
        registerSuccess: (state, action)=>{
            state.isFatching = false;
            state.currentUser = action.payload;
        },
        registerFailure: (state, action)=>{
            state.isFatching = false;
            state.error = true;
        },
    }
});

export const {loginStart, loginSuccess, loginFailure, logOut, registerStart, registerSuccess, registerFailure} = userSlice.actions;
export default userSlice.reducer;