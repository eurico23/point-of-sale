import {createSlice} from "@reduxjs/toolkit";

export const CartSlice = createSlice({
    name: "cart",
    initialState:{
        cart:[],
    },
    reducers:{
        addToCart:(state, action) => {
            const itemPresent = state.cart.find((item) => item.id === action.payload.id); // check if item present inside the cart
            if(itemPresent){ // if item present increase quantity
                itemPresent.quantity++ 
            }else{
                state.cart.push({...action.payload, quantity:1}) // add item to cart and and initialise quantity to be 1
            }
        },
        removeFromCart:(state, action) => {
            const removeItem = state.cart.filter((item) => item.id !== action.payload.id); // if item not equal to payload
            state.cart = removeItem;
        },

        incrementQuantity:(state, action) => {
            const itemPresent = state.cart.find((item) => item.id === action.payload.id); // check if item present inside the cart
            itemPresent.quantity++ 
        },

        decrementQuantity:(state, action) => {
            const itemPresent = state.cart.find((item) => item.id === action.payload.id); // check if item present inside the cart
            if(itemPresent.quantity == 1){ // if item equals to 1
                itemPresent.quantity = 0; //set item quantity equal to 0
                const removeItem = state.cart.filter((item) => item.id !== action.payload.id); // check if item present inside the cart
                state.cart = removeItem;
            }else{
                itemPresent.quantity--;
            }
        }
    }

})

export const {addToCart,removeFromCart, incrementQuantity, decrementQuantity} = CartSlice.actions;

export default CartSlice.reducer;