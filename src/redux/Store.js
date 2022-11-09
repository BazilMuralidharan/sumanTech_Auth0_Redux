import {configureStore} from '@reduxjs/toolkit'
import AuthSlice from "./authReducer/AuthSlice";

const Store = configureStore({
    reducer:{
        auth :AuthSlice,
        devtool:true
    }
})

export default Store; 