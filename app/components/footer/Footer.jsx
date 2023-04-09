import React from "react";
import styles from "./footer.module.css";
import { Rubik_Moonrocks } from "next/font/google";

const rubik_Moonrocks = Rubik_Moonrocks({
  subsets: ["latin"],
  weight: "400",
});
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h1 className={rubik_Moonrocks.className}>HBM</h1>
      <li>Brands</li>
      <li>About us</li>
      <li>Contact us</li>
      <li>Terms and conditions</li>

      <p>
        Made with love ❤️ <span>Anthony</span>
      </p>
    </footer>
  );
};

export default Footer;
