import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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
  reducers: {
    setProducts(state, action: PayloadAction<Product[]>) {
      const products = action.payload;
      products.forEach((product) => {
        state.products[product.id] = product;
      });
    },
  },
});
export const { setProducts } = productSlice.actions;
export default productSlice.reducer;
