import type { Metadata } from "next";
import "./css/globals.css";
import SmoothScroll from "@/Utils/useSmoothScroll";
import AOSInit from "@/Utils/AOSInit";



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
    <html lang="en" className="dark " style={{scrollBehavior:'smooth'}}>
       <AOSInit />
      <body className={` bg-[#fefaf5] dark:bg-[#000000] dark:text-white `}>
        <SmoothScroll/>
        {children} 
    
      </body>
    </html>
  );  
}
