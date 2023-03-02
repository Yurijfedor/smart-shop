import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://fakestoreapi.com/products";

export const fetchCategory = createAsyncThunk(
  "products/fetcCategory",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        `/categories`
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchProductsByCategory = createAsyncThunk(
  "products/fetchProductsByCategory",
  async (category, thunkAPI) => {
    try {
      const response = await axios.get(
        `/category/${category}`
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);



