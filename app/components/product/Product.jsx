"use client";

import React, { useEffect } from "react";
import styles from "./product.module.css";
import { useRouter } from "next/navigation";

const Product = () => {
  const router = useRouter();
  return (
    <div
      className={styles.product}
      onClick={() => router.push("/home/product")}
    >
      <img src={`/hair/3.jpg`} alt="" />
      <h3>Rondon Avella</h3>
      <span>212₦</span>
    </div>
  );
};

export default Product;
