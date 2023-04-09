"use client";
import React, { useEffect } from "react";
import styles from "./product.module.css";
import { useRouter } from "next/navigation";

const Product = () => {
  const rand = Math.floor(Math.random() * 10);
  const price = Math.floor(Math.random() * 500);
  const router = useRouter();
  return (
    <div
      className={styles.product}
      onClick={() => router.push("/home/product")}
    >
      <img src={`/hair/${rand}.jpg`} alt="" />
      <h3>Rondon Avella</h3>
      <span>{price}₦</span>
    </div>
  );
};

export default Product;
