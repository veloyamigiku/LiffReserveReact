import { configureStore } from "@reduxjs/toolkit";

import axiosReducer from './axiosSlice';
import counterReducer from './counterSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        axios: axiosReducer,
    },
});
