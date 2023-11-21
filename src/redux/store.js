import { configureStore } from "@reduxjs/toolkit";
import wishlistslice from "../slices/wishlistslice";
import cartslice from "../slices/cartslice";

const store = configureStore({
    reducer:{
        wishlistreducer:wishlistslice,
        cartreducer:cartslice

    }
})
export default store