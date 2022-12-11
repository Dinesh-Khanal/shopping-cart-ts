import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Products } from "./features/products/Products";
import Layout from "./features/layout/Layout";
import { Cart } from "./features/cart/Cart";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

function Home() {
  return (
    <main className="page">
      <h1>Welcome to the Store</h1>
      <figure>
        <img src="/store.jpg" alt="A large old storefront" width="800" />
        <figcaption>Gary Houston, CC0, via Wikimedia Commons</figcaption>
      </figure>
    </main>
  );
}
