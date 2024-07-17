import { createSlice } from "@reduxjs/toolkit";

export const ProductSlice = createSlice({
  name: "product",
  initialState: {
    product: [],
  },
  reducers: {
    getProducts: (state, action) => {
      const newProduct = {
        ...action.payload,
        quantity: 0,
        initialPrice: action.payload.price, // Store the initial price separately
        currentPrice: action.payload.price, // Initialize current price with the initial price
      };
      state.product.push(newProduct); // Add products from ProductsDummy
    },
    incrementQty: (state, action) => {
      const itemPresent = state.product.find((item) => item.id === action.payload.id); // Check if item present inside the cart
      if (itemPresent) {
        itemPresent.quantity++;
        itemPresent.currentPrice = itemPresent.initialPrice * itemPresent.quantity; // Calculate current price based on initial price
      }
    },
    decrementQty: (state, action) => {
      const itemPresent = state.product.find((item) => item.id === action.payload.id); // Check if item present inside the cart
      if (itemPresent) {
        if (itemPresent.quantity === 1) { // If item quantity equals to 1
          itemPresent.quantity = 0; // Set item quantity equal to 0
          itemPresent.currentPrice = itemPresent.initialPrice; // Reset the current price to the initial price
        } else {
          itemPresent.quantity--;
          itemPresent.currentPrice = itemPresent.initialPrice * itemPresent.quantity; // Calculate current price based on initial price
        }
      }
    }
  }
});

export const { getProducts, incrementQty, decrementQty } = ProductSlice.actions;

export default ProductSlice.reducer;
