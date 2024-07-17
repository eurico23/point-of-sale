import {configureStore} from "@reduxjs/toolkit";
import CartReducer from "./src/redux/CartReducer";
import ProductReducer from "./src/redux/ProductReducer";

export default configureStore({
    reducer:{
        cart:CartReducer,
        product:ProductReducer
    }
})