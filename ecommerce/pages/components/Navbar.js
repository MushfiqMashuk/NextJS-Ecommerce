import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";
import Link from "next/link";
import React from "react";
import styles from "../../styles/Navbar.module.css";

function Navbar() {
  return (
    <>
      <div className={styles.container}>
        <img src="/logo.png" alt="Logo" className={styles.logo} />
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About us</a>
        </Link>
        <Link href="/product">
          <a>Product</a>
        </Link>
        <Link href="/blog">
          <a>Blog</a>
        </Link>

        <Badge color="secondary" badgeContent={3}>
          <ShoppingCartOutlined />
        </Badge>

        <button className={styles.button}>Login</button>
      </div>
    </>
  );
}

export default Navbar;
