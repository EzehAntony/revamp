import "./globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Poppins,  } from "next/font/google";

export const metadata = {
  title: "Revamp",
  description: "Reliable hair plug",
  themeColor: "#07070f",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
