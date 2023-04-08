import "./globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Poppins, Rubik_Moonrocks } from "next/font/google";

export const metadata = {
  title: "Revamp",
  description: "Reliable hair plug",
  themeColor: "#07070f",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const rubik_Moonrocks = Rubik_Moonrocks({
  subsets: ["latin"],
  weight: "400",
});
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
        <footer>
          <h1 className={rubik_Moonrocks.className}>HBM</h1>
          <li>Brands</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Terms and conditions</li>

          <p>
            Made with love ❤️ <span>Anthony</span>
          </p>
        </footer>
      </body>
    </html>
  );
}
