"use client";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

import { Poppins, Rubik_Moonrocks } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
