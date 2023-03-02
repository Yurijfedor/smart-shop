import { createSlice } from "@reduxjs/toolkit";
import {
  fetchCategory,
  fetchProductsByCategory,
} from "./operation";

const productsInitialState = {
  categories: [],
  products:[],
  isLoading: false,
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState: productsInitialState,
   reducers: {
     setProducts(state, action) {
       state.items =  action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.categories = action.payload
      })

      .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.products = action.payload
      })

      .addCase(fetchCategory.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(fetchCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
     
      .addCase(fetchProductsByCategory.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(fetchProductsByCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
  },
});

export const {  setProducts } = productsSlice.actions;
export const productsReducer = productsSlice.reducer;
