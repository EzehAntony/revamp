"use client";
import React from "react";
import styles from "./page.module.css";
import { Inspiration, Rubik_Moonrocks } from "next/font/google";
import Product from "../components/product/Product";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const rubik_Moonrocks = Rubik_Moonrocks({
  subsets: ["latin"],
  weight: "400",
});

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.hero}>
        <header>
          <h1 className={rubik_Moonrocks.className}>HBM</h1>

          <div className={styles.buttons}>
            <i class="bi bi-cart4"></i>
            <i class="bi bi-three-dots"></i>
          </div>
        </header>

        <div className={styles.content}>
          <h1>Let's help you discover your taste.</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad
            repellendus
          </p>
          <button>
            <p>Discover</p>
          </button>
        </div>
      </div>

      <div className={styles.posts}>
        <input type="text" placeholder="Search for Product" />

        <div className={styles.category}>
          <h1>Synthetic</h1>
          <Swiper
            className={styles.swiper}
            spaceBetween={0}
            slidesPerView={1.5}
          >
            <SwiperSlide>
              <Product />
            </SwiperSlide>
            <SwiperSlide>
              <Product />
            </SwiperSlide>
            <SwiperSlide>
              <Product />
            </SwiperSlide>
            <SwiperSlide>
              <Product />
            </SwiperSlide>
            <SwiperSlide>
              <Product />
            </SwiperSlide>
            <SwiperSlide>
              <Product />
            </SwiperSlide>
            <SwiperSlide>
              <Product />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className={styles.category}>
          <h1>Bonestraight</h1>
          <Swiper
            className={styles.swiper}
            spaceBetween={0}
            slidesPerView={1.5}
          >
            <SwiperSlide>
              <Product />
            </SwiperSlide>
            <SwiperSlide>
              <Product />
            </SwiperSlide>
            <SwiperSlide>
              <Product />
            </SwiperSlide>
            <SwiperSlide>
              <Product />
            </SwiperSlide>
            <SwiperSlide>
              <Product />
            </SwiperSlide>
            <SwiperSlide>
              <Product />
            </SwiperSlide>
            <SwiperSlide>
              <Product />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className={styles.category}>
          <h1>Monofilament</h1>
          <Swiper
            className={styles.swiper}
            spaceBetween={0}
            slidesPerView={1.5}
          >
            <SwiperSlide>
              <Product />
            </SwiperSlide>
            <SwiperSlide>
              <Product />
            </SwiperSlide>
            <SwiperSlide>
              <Product />
            </SwiperSlide>
            <SwiperSlide>
              <Product />
            </SwiperSlide>
            <SwiperSlide>
              <Product />
            </SwiperSlide>
            <SwiperSlide>
              <Product />
            </SwiperSlide>
            <SwiperSlide>
              <Product />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Home;
