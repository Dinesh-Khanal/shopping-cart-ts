import cartReducer, {
  addToCart,
  removeFromCart,
  updateQuantity,
} from "./cartSlice";

describe("cartSlice", () => {
  test("add empty item", () => {
    const initialState = undefined;
    const action = { type: "" };
    const state = cartReducer(initialState, action);
    expect(state).toEqual({
      checkoutState: "READY",
      errorMessage: "",
      items: {},
    });
  });
  test("AddToCArt", () => {
    const initialState = undefined;
    const action = addToCart("abc");
    let state = cartReducer(initialState, action);
    expect(state).toEqual({
      checkoutState: "READY",
      errorMessage: "",
      items: { abc: 1 },
    });
    state = cartReducer(state, action);
    state = cartReducer(state, action);
    expect(state).toEqual({
      checkoutState: "READY",
      errorMessage: "",
      items: { abc: 3 },
    });
  });
  test.todo("removeFromCart");
  test.todo("updateQuantity");
});
