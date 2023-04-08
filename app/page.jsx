"use client";
import { useEffect, useLayoutEffect, useRef } from "react";
import styles from "./page.module.css";
import gsap from "gsap";
import { useRouter } from "next/navigation";
import { Rubik_Moonrocks } from "next/font/google";


const rubik_Moonrocks = Rubik_Moonrocks({ subsets: ["latin"], weight: "400" });

const Splash = () => {
  const ref = useRef(null);
  const g = gsap.utils.selector(ref);
  const t1 = gsap.timeline({ duration: 2 });
  const router = useRouter();
  const sendHome = () => {
    router.push("/home");
  };
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      t1.to(g("#splash *"), { visibility: "visible" })
        .to(g("#splash div:nth-of-type(3)"), {
          height: "0",
        })
        .to(
          g("#splash div:nth-of-type(2)"),
          {
            height: "0",
          },
          "<+.2"
        )
        .to(
          g("#splash div:nth-of-type(1)"),
          {
            height: "0vh",
          },
          "<+.2"
        )
        .from(g("#splash h1"), {
          opacity: 0,
          y: 50,
        })
        .from(
          g("#splash i"),
          {
            opacity: 0,
            x: 50,
            onComplete: () => sendHome(),
          },
          "<+.1"
        );
    });

    return () => ctx.revert();
  }, []);

  return (
    <main ref={ref} id="splash" className={styles.main}>
      <h1 className={rubik_Moonrocks.className}>HBM</h1>
      <i class="bi bi-hearts"></i>
      <div></div>
      <div></div>
      <div></div>
    </main>
  );
};

export default Splash;
