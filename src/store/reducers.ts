// store/reducers.ts

import { combineReducers } from '@reduxjs/toolkit';
// import yourReducer from './yourReducer'; // Ganti dengan nama reducer Anda
import counterReducer from './features/counterSlice'
import authReducer from './features/authSlice'
import cartReducer from './features/cartSlice'
import userReducer from './features/userSlice'
import {api} from './api'

const rootReducer = combineReducers({
    count : counterReducer,
    auth : authReducer,
    cart : cartReducer,
    user : userReducer,
    [api.reducerPath] : api.reducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
