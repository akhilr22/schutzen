import type { Metadata } from "next";
import "./css/globals.css";
// import SmoothScroll from "@/Utils/useSmoothScroll";
import AOSInit from "@/Utils/AOSInit";
import { Footer } from "@/components/_partials/footer/Footer";
import Navbar from "@/components/_partials/navbar/Navbar";
import { metadata } from "./metadata";
// import { Inter } from 'next/font/google'

export const metadataConfig: Metadata = metadata;


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark ">
        <head>
        {/* Next.js will automatically use the metadata here */}
      </head>
      <AOSInit />
      <body className={` bg-[#fefaf5] dark:bg-[#000000] dark:text-white `}>
        
        <div className=" sm:mx-12 overflow-x-hidden">
          <Navbar />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
