import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../redux/cart/Cartslice';
import productReducer from '../redux/cart/productSlice';
import AuthSlice from "./authSlice";
const store = configureStore({
    reducer: {
        auth:AuthSlice.reducer,
        cart: cartReducer,
        product: productReducer
    },
});

export default store;