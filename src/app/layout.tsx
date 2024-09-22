import type { Metadata } from "next";
import "./css/globals.css";
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
    <html lang="en" className="dark">
      <body className={` bg-[#fefaf5] dark:bg-[#181817] `}>
        
         
        {children} 
    
      </body>
    </html>
  );
}
