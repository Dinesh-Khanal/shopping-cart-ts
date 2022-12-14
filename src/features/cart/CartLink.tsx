import React from "react";
import { getMemoizedItems } from "./cartSlice";
import { useAppSelector } from "../../app/hooks";
import { Link } from "react-router-dom";
import styles from "./CartLink.module.css";

export function CartLink() {
  const numItems = useAppSelector(getMemoizedItems);
  return (
    <Link to="/cart" className={styles.link}>
      <span className={styles.text}>
        🛒&nbsp;&nbsp;{numItems ? numItems : "Cart"}
      </span>
    </Link>
  );
}
