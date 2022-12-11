import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product, getProducts } from "../../app/api";

export interface ProductsState {
  products: { [id: string]: Product };
  fetchProductState: string;
  errorMessage: string;
}
const initialState: ProductsState = {
  products: {},
  fetchProductState: "READY",
  errorMessage: "",
};
export const fetchProducts = createAsyncThunk("product/fetch", async () => {
  const response = await getProducts();
  return response;
});

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: function (builder) {
    builder.addCase(fetchProducts.pending, (state) => {
      state.fetchProductState = "LOADING";
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.fetchProductState = "READY";
      const products = action.payload;
      products.forEach((product) => {
        state.products[product.id] = product;
      });
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.fetchProductState = "ERROR";
      state.errorMessage = action.error.message || "";
    });
  },
});
export default productSlice.reducer;
