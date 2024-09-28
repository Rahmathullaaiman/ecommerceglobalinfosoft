import { configureStore } from "@reduxjs/toolkit";
import cartslice from "../slices/cartslice";

const store = configureStore({
    reducer:{
        cartreducer:cartslice

    }
})
export default store