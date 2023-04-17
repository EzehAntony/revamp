"use client";
import React, { useRef } from "react";
import styles from "./page.module.css";
import {} from "next/font/google";
import Product from "../components/product/Product";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

const Home = () => {
  const ref = useRef(null);
  const g = gsap.utils.selector(ref);
  gsap.registerPlugin(ScrollTrigger);
  const t1 = gsap.timeline();

  return (
    <div className={styles.home} id="home" ref={ref}>
      <div id="hero" className={styles.hero}>
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
            slidesPerView={3}
            spaceBetween={0}
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
