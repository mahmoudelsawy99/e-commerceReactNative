import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const GetProducts = createAsyncThunk('product/getproducts', async () => {
    let response = await axios.get('https://dummyjson.com/products');
    return response.data.products
});

const ProductSlice = createSlice({
    name: 'product',
    initialState: {
        products: [],
        cart: []
    },
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload;
            const index = state.cart.findIndex(cartItem => cartItem.id === item.id);

            if (index === -1) {
                state.cart.push({ ...item, quantity: 1 });
            } else {
                state.cart[index].quantity++;
            }
        },
    },
    extraReducers: {
        [GetProducts.fulfilled]: (state, action) => {
            state.products = action.payload
        }
    }
});

export const { addToCart } = ProductSlice.actions
export default ProductSlice.reducer;