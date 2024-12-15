import type { Metadata } from "next";
import "./css/globals.css";
// import SmoothScroll from "@/Utils/useSmoothScroll";
import AOSInit from "@/Utils/AOSInit";
import { Footer } from "@/components/_partials/footer/Footer";
import Navbar from "@/components/_partials/navbar/Navbar";
import VantaBackground from "@/components/ui/Backgrounds/VantaBackground";

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
    <html lang="en" className="dark">
      <AOSInit />
      <body className={`relative  dark:bg-[#000000] dark:text-white`}>
        {/* Background */}
    

        {/* Main Content */}
        <div className="relative z-10">
          <div className="sm:mx-12 overflow-x-hidden">
            <Navbar />
          </div>
          <div className="absolute top-0 left-0 w-full bottom-0 -z-10">
          <VantaBackground />
        </div>
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
