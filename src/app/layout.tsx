import type { Metadata } from "next";
import "./css/globals.css";
// import SmoothScroll from "@/Utils/useSmoothScroll";
import AOSInit from "@/Utils/AOSInit";
import { Footer } from "@/components/_partials/footer/Footer";
import Navbar from "@/components/_partials/navbar/Navbar";

export const metadata: Metadata = {
  title: "Schutzen Website",
  description: "Schutzen Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark ">
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
