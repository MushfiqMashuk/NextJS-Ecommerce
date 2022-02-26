import React from "react";
import styles from "../../styles/SearchContainer.module.css";

function ProductSearch() {
  return (
    <>
      <div className={styles.container}>
       <input type="text" placeholder="Search by Category/Product" className={styles.input}/>
      </div>
    </>
  );
}

export default ProductSearch;
