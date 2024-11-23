import React from "react";
import contactBg from "@/app/assets/contact-gradient.png";

const Page = () => {
  return (
    <div
      className="h-screen"
      style={{
        backgroundImage: `url(${contactBg.src})`,
        backgroundSize: "cover", // Ensures the image covers the entire area
        backgroundPosition: "center", // Centers the image
        backgroundRepeat: "no-repeat", // Prevents tiling
        width: "100%",
      }}
    >

<div></div>


    </div>
  );
};

export default Page;
