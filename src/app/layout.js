import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar/Navbar";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sabr IT Consult",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <Navbar />
        {children}
        </body>
    </html>
  );
}


