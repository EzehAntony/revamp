"use client";
import Header from "@/app/components/header/Header";
import styles from "./product.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Product from "@/app/components/product/Product";
const product = () => {
  return (
    <div className={styles.product}>
      <Header />
      <img src="/hair/6.jpg" className={styles.mainImg} alt="" />

      <div className={styles.swiper}>
        <img src="/hair/2.jpg" alt="" />
        <img src="/hair/4.jpg" alt="" />
        <img src="/hair/5.jpg" alt="" />
        <img src="/hair/6.jpg" alt="" />
      </div>

      <div className={styles.title}>
        <h3>Atlas Crosspin wine </h3>
        <button>
          <p>buy</p>
          <i class="bi bi-cart4"></i>
        </button>
      </div>

      <h3 className={styles.description}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
        reprehenderit magnam laborum nihil praesentium, vel vero ut distinctio
        veritatis et officiis nostrum error assumenda itaque illum? Illo quaerat
        id debitis?
      </h3>

      <div className={styles.category}>
        <h1>More from this category</h1>

        <Swiper slidesPerView={1.5}>
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
  );
};

export default product;
