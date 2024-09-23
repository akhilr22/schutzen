import type { Metadata } from "next";
import "./css/globals.css";

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
    <html lang="en" className="">
      <body className={` bg-[#fefaf5] dark:bg-[#181817] `}>
        
         
        {children} 
    
      </body>
    </html>
  );  
}
