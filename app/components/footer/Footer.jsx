"use client";

import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./footer.module.css";

const Footer = () => {
  const router = useRouter();
  const path = usePathname();

  return (
    <div className={styles.footer}>
      <div onClick={() => router.push("/home")}>
        {path === "/home" ? (
          <i class="bi bi-house-fill"></i>
        ) : (
          <i class="bi bi-house"></i>
        )}
      </div>

      <div className={styles.cart} onClick={() => router.push("/home/wallet")}>
        {path === "/home/wallet" ? (
          <i class="bi bi-cart2"></i>
        ) : (
          <i class="bi bi-cart2"></i>
        )}

        <div className="count">
          <h3>0</h3>
        </div>
      </div>
      <div onClick={() => router.push("/home/profile")}>
        {path === "/home/profile" ? (
          <i class="bi bi-person-fill"></i>
        ) : (
          <i class="bi bi-person"></i>
        )}
      </div>
    </div>
  );
};

export default Footer;
