import { Inter } from "next/font/google";
import "./globals.css";
import GlowingCursor from "../components/GlowingCursor";
import Navbar from "../components/navigation/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Yong Zhuo - Aspiring Software Engineer",
  description: "Yong Zhuo's Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlowingCursor />
        <div className="">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
