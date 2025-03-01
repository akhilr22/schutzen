import type { Metadata } from "next";
import "./css/globals.css";
// import SmoothScroll from "@/Utils/useSmoothScroll";
import AOSInit from "@/Utils/AOSInit";
import { Footer } from "@/components/_partials/footer/Footer";
import Navbar from "@/components/_partials/navbar/Navbar";


// export const metadataConfig: Metadata = metadata;
export const metadata: Metadata = {
  title: "Schutzen Health - Advanced Remote Patient Monitoring",
  description:
    "Schutzen Health revolutionizes patient care with AI-driven remote monitoring, wearable biosensors, and real-time vital tracking. Enhance safety, reduce ICU readmissions, and streamline workflows with our cloud-integrated solution.",
  keywords: [
    "Remote Patient Monitoring",
    "Wearable Biosensor",
    "Healthcare Technology",
    "AI-Driven Health Solutions",
    "EHR Integration",
    "Vital Sign Monitoring",
    "Smart Hospital Solutions",
    "Schutzen",
   "Schutzen Health",
   "Advanced Remote Patient Monitoring"
  ],
  icons:{
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Schutzen Health - Redefining Healthcare with Smart Monitoring",
    description:
      "Our wearable biosensor and cloud integration enable real-time patient monitoring, enhancing safety and efficiency in hospitals, homes, and ambulances.",
    url: "https://schutzenhealth.com",
    type: "website",
    images: [
      {
        url: "https://schutzenhealth.com/assets/schutzen-img.png",
        width: 1200,
        height: 630,
        alt: "Schutzen Health Wearable Remote Monitoring System",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Schutzen Health - Transforming Healthcare with AI-Driven Monitoring",
    description:
      "Real-time remote patient monitoring with AI-driven biosensors, EHR integration, and instant alerts—enhancing patient safety and efficiency.",
    images: ["https://schutzenhealth.com/assets/schutzen-img.png"],
  },
  alternates: {
    canonical: "https://schutzenhealth.com",
  },
};



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
