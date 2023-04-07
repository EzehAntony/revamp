"use client";
import React from "react";
import styles from "./page.module.css";
import { Inspiration, Rubik_Moonrocks } from "next/font/google";

const inspiration = Inspiration({ subsets: ["latin"], weight: "400" });
const rubik_Moonrocks = Rubik_Moonrocks({
  subsets: ["latin"],
  weight: "400",
});

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.hero}>
        <header>
          <h1 className={rubik_Moonrocks.className}>Revamp</h1>

          <div className={styles.buttons}>
            <i class="bi bi-cart4"></i>
            <i class="bi bi-three-dots"></i>
          </div>
        </header>

        <div className={styles.content}>
          <h1>Let's help you discover your taste.</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad
            repellendus quasi at et sit cum rerum officiis eius? Laborum,
            dignissimos.
          </p>
          <button>Discover</button>
        </div>
      </div>

      <div className={styles.posts}>
        <input type="text" placeholder="Search for Product" />
      </div>
    </div>
  );
};

export default Home;
