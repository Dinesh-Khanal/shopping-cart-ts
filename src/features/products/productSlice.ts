import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../app/api";

export interface ProductsState {
  products: { [id: string]: Product };
}
const initialState: ProductsState = {
  products: {},
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
});

export default productSlice.reducer;
