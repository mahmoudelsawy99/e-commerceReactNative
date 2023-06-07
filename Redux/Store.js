import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from './Slices/PrdSlice'
export const Store = configureStore({
    reducer: {
        ProductSlice
    }
})