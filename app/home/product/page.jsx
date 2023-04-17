"use client";
import styles from "./product.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Product from "@/app/components/product/Product";
import { useRouter } from "next/navigation";
const product = () => {
  const router = useRouter();
  return (
    <div className={styles.product}>
      <img src="/hair/6.jpg" className={styles.mainImg} alt="" />

      <div className={styles.swiper}>
        <img src="/hair/2.jpg" alt="" />
        <img src="/hair/4.jpg" alt="" />
        <img src="/hair/5.jpg" alt="" />
        <img src="/hair/6.jpg" alt="" />
      </div>

      <div className={styles.title}>
        <h3>Atlas Crosspin wine </h3>
        <button onClick={() => router.push("/home/product/buy")}>
          <i class="bi bi-bag"></i>
          <h3>buy</h3>
        </button>
      </div>

      <h3 className={styles.description}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
        reprehenderit magnam laborum.
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
