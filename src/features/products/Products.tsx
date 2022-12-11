import React, { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { fetchProducts } from "./productSlice";
import { addToCart } from "../../features/cart/cartSlice";
import styles from "./Products.module.css";

export function Products() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  const products = useAppSelector((state) => state.products.products);
  const state = useAppSelector((state) => state.products.fetchProductState);
  const fetchError = useAppSelector((state) => state.products.errorMessage);
  if (state === "LOADING") return <div>Loading...</div>;
  return (
    <main className="page">
      {fetchError && <div style={{ color: "red" }}>Error: {fetchError}</div>}
      <ul className={styles.products}>
        {Object.values(products).map((product) => (
          <li key={product.id}>
            <article className={styles.product}>
              <figure>
                <img src={product.imageURL} alt={product.imageAlt} />
                <figcaption className={styles.caption}>
                  {product.imageCredit}
                </figcaption>
              </figure>
              <div>
                <h1>{product.name}</h1>
                <p>{product.description}</p>
                <p>${product.price}</p>
                <button onClick={() => dispatch(addToCart(product.id))}>
                  Add to Cart 🛒
                </button>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </main>
  );
}
