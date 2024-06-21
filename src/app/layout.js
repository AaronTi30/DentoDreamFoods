import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
//import Navbar from './components/navbar/Navbar'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
   <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className}bg-gray-50 text-gray-950 pt-28 sm:pt-36`}>
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  );
}
