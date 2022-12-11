import React from "react";
import { Outlet } from "react-router-dom";
import { CartLink } from "../cart/CartLink";
import { Link } from "react-router-dom";
import styles from "../../App.module.css";
const Layout = () => {
  return (
    <main>
      <div className={styles.app}>
        <header className={styles.header}>
          <nav>
            <Link className={styles.navLink} to="/">
              Home
            </Link>
            <Link className={styles.navLink} to="/products">
              Products
            </Link>
            <CartLink />
          </nav>
        </header>
      </div>
      <Outlet />
    </main>
  );
};

export default Layout;
