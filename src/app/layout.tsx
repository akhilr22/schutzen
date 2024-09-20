import type { Metadata } from "next";
import "./css/globals.css";
import Navbar from "@/components/navbar/Navbar";
import Home from "./page";



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
    <html lang="en">
      <body
        className={` antialiased`}
      >
         <Navbar />
         <Home/>
        {children}
      </body>
    </html>
  );
}
