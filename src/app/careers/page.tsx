import React from "react";
import bg from "@/app/assets/careersbg.png";
import CareersForm from "@/components/form/CarrersForm";
export default function page() {
  return (
    <div
      className="min-h-screen"
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "cover", // Ensures the image covers the entire area
        backgroundPosition: "center", // Centers the image
        backgroundRepeat: "no-repeat", // Prevents tiling
        width: "100%",
      }}
    >
      <div className="justify-center text-center mt-5 xl:mt-32">
        <h1 className="text-2xl md:text-5xl font-bold m-3">Join the Transformation</h1>
        <p className="flex mx-auto md:text-xl w-3/4 md:w-2/4 text-center justify-center">
          <span>
            At Schutzen Healthtech, we&apos;re committed to transforming healthcare through innovation. Let&apos;s bring
            this change together
          </span>
        </p>
      </div>
      <CareersForm/>
    </div>
  );
}
