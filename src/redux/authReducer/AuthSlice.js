import {createSlice} from '@reduxjs/toolkit'

const AuthReducerSlice = createSlice({
    name:'authReducer',
    initialState:{
        user:null
    },
    reducers:{
        loginUserDetail:(state, action)=>{
            state.user = action.payload
        },
        logoutUserDetail:(state,action)=>{
            state.user = null
        }
    }
})
export const {loginUserDetail, logoutUserDetail} = AuthReducerSlice.actions
export default AuthReducerSlice.reducer;