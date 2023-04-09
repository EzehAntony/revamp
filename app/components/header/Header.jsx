"use client";
import { useState, useLayoutEffect, useRef } from "react";
import styles from "./header.module.css";
import { Rubik_Moonrocks } from "next/font/google";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

const rubik_Moonrocks = Rubik_Moonrocks({
  subsets: ["latin"],
  weight: "400",
});

const Header = () => {
  const ref = useRef(null);
  const g = gsap.utils.selector(ref);
  gsap.registerPlugin(ScrollTrigger);
  const t1 = gsap.timeline();

  useLayoutEffect(() => {
    console.log(g(".headerbar"));
    const ctx = gsap.context(() => {
      t1.to(g(".headerbar"), {
        background: "#07070F",
        transition: 0.4,
        scrollTrigger: {
          trigger: g(".headerbar"),
          start: "bottom 200px",
          end: "bottom 200px",
          scrub: true,
        },
      });
    });
    return () => ctx.revert();
  }, []);

  const [navOpen, setNavOpen] = useState(false);
  const navCheck = () => {
    if (navOpen) {
      setNavOpen(false);
    } else {
      setNavOpen(true);
    }
  };
  return (
    <>
      <header
        ref={ref}
        id={"header"}
        class="headerbar"
        className={styles.header}
      >
        <h1>HBM</h1>
        <div className={styles.buttons}>
          <i class="bi bi-cart4"></i>
          <i class="bi bi-three-dots" onClick={() => navCheck()}></i>
        </div>
      </header>
      {navOpen && (
        <nav className={styles.nav}>
          <i class="bi bi-x-circle" onClick={() => navCheck()}></i>

          <ul>
            <li>
              <h3>Brands</h3>
            </li>
            <li>
              <h3>Products</h3>
            </li>
            <li>
              <h3>Revamp</h3>
            </li>
            <li>
              <h3>About us</h3>
            </li>
            <li>
              <h3>contact us</h3>
            </li>
          </ul>

          <p>© 2023 UI design by Anthony. All rights reserved</p>
        </nav>
      )}
    </>
  );
};

export default Header;
