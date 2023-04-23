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
import { Navigation, Pagination } from "swiper";
import Snowfall from "react-snowfall";

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
        <Snowfall />
      </div>

      <div className={styles.posts}>
        <div className={styles.input}>
          <h3>Search for items</h3>
          <input type="text" placeholder="Bonestraight" />
        </div>

        <div className={styles.group}>
          <div className={styles.category}>
            <h1>Synthetic</h1>
            <Swiper
              className={styles.swiper}
              centeredSlides={false}
              slidesPerView={"auto"}
              spaceBetween={20}
            >
              <SwiperSlide className={styles.swiperslide}>
                <Product />
              </SwiperSlide>
              <SwiperSlide className={styles.swiperslide}>
                <Product />
              </SwiperSlide>
              <SwiperSlide className={styles.swiperslide}>
                <Product />
              </SwiperSlide>
              <SwiperSlide className={styles.swiperslide}>
                <Product />
              </SwiperSlide>
              <SwiperSlide className={styles.swiperslide}>
                <Product />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className={styles.category}>
            <h1>Bonestraight</h1>
            <Swiper
              className={styles.swiper}
              centeredSlides={false}
              slidesPerView={"auto"}
              spaceBetween={20}
            >
              <SwiperSlide className={styles.swiperslide}>
                <Product />
              </SwiperSlide>
              <SwiperSlide className={styles.swiperslide}>
                <Product />
              </SwiperSlide>
              <SwiperSlide className={styles.swiperslide}>
                <Product />
              </SwiperSlide>
              <SwiperSlide className={styles.swiperslide}>
                <Product />
              </SwiperSlide>
              <SwiperSlide className={styles.swiperslide}>
                <Product />
              </SwiperSlide>
              <SwiperSlide className={styles.swiperslide}>
                <Product />
              </SwiperSlide>
              <SwiperSlide className={styles.swiperslide}>
                <Product />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className={styles.category}>
            <h1>Monofilament</h1>
            <Swiper
              className={styles.swiper}
              centeredSlides={false}
              slidesPerView={"auto"}
              spaceBetween={20}
            >
              <SwiperSlide className={styles.swiperslide}>
                <Product />
              </SwiperSlide>
              <SwiperSlide className={styles.swiperslide}>
                <Product />
              </SwiperSlide>
              <SwiperSlide className={styles.swiperslide}>
                <Product />
              </SwiperSlide>
              <SwiperSlide className={styles.swiperslide}>
                <Product />
              </SwiperSlide>
              <SwiperSlide className={styles.swiperslide}>
                <Product />
              </SwiperSlide>
              <SwiperSlide className={styles.swiperslide}>
                <Product />
              </SwiperSlide>
              <SwiperSlide className={styles.swiperslide}>
                <Product />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
