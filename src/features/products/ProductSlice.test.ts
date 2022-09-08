import productReducer, { setProducts } from "./productSlice";
import Products from "../../../public/products.json";
import { Product } from "../../app/api";

describe("product reducer", () => {
  it("should return the initial state when passed and empty action", () => {
    const initialState = undefined;
    const action = { type: "" };
    const result = productReducer(initialState, action);
    expect(result).toEqual({ products: {} });
  });
  it("should convert the product received into object", () => {
    const initialState = undefined;
    const action = setProducts(Products);
    const result = productReducer(initialState, action);
    expect(Object.keys(result.products).length).toEqual(Products.length);
    Products.forEach((product) => {
      expect(result.products[product.id]).toEqual(product);
    });
  });
  it("should convert the product received into object", () => {
    const initialState = undefined;
    const action = setProducts(Products);
    let result = productReducer(initialState, action);
    expect(Object.keys(result.products).length).toEqual(Products.length);
    Products.forEach((product) => {
      expect(result.products[product.id]).toEqual(product);
    });
    result = productReducer(result, action);
    expect(Object.keys(result.products).length).toEqual(Products.length);
  });
  it("should allow multiple product to add at different times", () => {
    const initialState = undefined;
    const action = setProducts(Products.slice(0, 2));
    let result = productReducer(initialState, action);
    const secondAction = setProducts(Products.slice(2, 4));
    result = productReducer(result, secondAction);
    expect(Object.keys(result.products).length).toEqual(4);
  });
});
