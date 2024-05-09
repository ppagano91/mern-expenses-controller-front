import {createSlice} from "@reduxjs/toolkit";

const authSlice = createSlice({
    name:'auth',
    initialState:{
        user:null,
    },
    reducer:{
        loginAction: (state, action) => {
            state.user = action.payload;
        },
        logoutAction: (state, action) => {
            state.user = null;
        },

    }
})

export const {loginAction, logoutAction} = authSlice.actions;
const authReducer = authSlice.reducer

export default authReducer;
