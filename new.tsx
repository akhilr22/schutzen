import React from "react";
import bg from "@/app/assets/aboutUs_bg.png";
// import bg2 from "@/app/assets/aboutBg-2.png";
// import boxIcon from "@/app/assets/box-cornner.png";
// import Image from "next/image";
export default function page() {
  return (
    <div>
      <div
        className="h-3/5 xl:min-h-screen bg-[length:100vw_250px] bg-[position:0_20%]  sm:bg-[length:100vw_310px]  sm:bg-[position:0_45%]   md:bg-[length:100vw_350px]  md:bg-[position:0_80%] xl:bg-[length:100vw_450px]  xl:bg-[position:0_80%]"
        style={{
          backgroundImage: `url(${bg.src})`,
          backgroundRepeat: "no-repeat", // Prevents tiling
        }}
      >
        <div className="text-center justify-between w-2/3 mx-auto pt-10 sm:pt-14 md:pt-20 xl:pt-32 sm:mb-14">
          <h1 className="text-xl md:text-5xl font-bold  mb-6">Transforming Healthcare through Innovation</h1>
          <span className="text-[14px] md:text-[24px] leading-tight">
            At Schutzen Healthtech, we&apos;re driven by a singular mission, to revolutionize healthcare delivery
            through cutting-edge technology. We believe that innovation and compassion go hand-in-hand, and our goal is
            to empower hospitals to provide exceptional patient care.
          </span>
        </div>
        <div className="mt-16 md:mt-28 flex justify-center items-center">
          <div
            className=" w-5/6 sm:w-3/5 sm:h-80 p-[1px] bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] rounded-[60px] scroll_animate mx-auto"
            data-aos="fade-right"
          >
            <div className="w-full h-full bg-black rounded-[60px] flex flex-col items-center justify-center p-5 sm:p-0">
              <div className="text-center mx-auto">
                <div className="pt-4">
                  <span className="text-xl xl:text-5xl font-bold block mb-1">Empowering Healthcare Excellence</span>
                </div>
                <span className="text-sm xl:text-2xl w-4/5 xl:w-full  block mx-auto">
                  By leveraging technology and innovation, we enable hospitals to
                </span>
              </div>

              <div className="mt-6 w-full flex justify-center">
                <div className="ml-6 text-[#2ccdb5] text-[12px] xl:text-2xl">
                  <div className="flex items-center">
                  <div className="bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] w-5 h-5 rounded-full mr-3 "></div>
                    <p>Enhance patient experiences and satisfaction</p>
                  </div>
                  <div className="flex items-center mt-2">
                  <div className="bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] w-5 h-5 rounded-full mr-3 "></div>
                    <p>Improve operational efficiency and reduce costs</p>
                  </div>
                  <div className="flex items-center mt-2">
                  <div className="bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] w-5 h-5 rounded-full mr-3 "></div>
                    <p>Stay ahead of the curve in an ever-evolving healthcare landscape.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center justify-between w-5/6 md:w-2/3   mx-auto pt-10 sm:pt-14 md:pt-20 xl:pt-10 sm:mb-14">
          <h1 className="text-3xl md:text-5xl font-bold  mb-6">Vision</h1>
          <span className="text-[14px] md:text-[24px] leading-tight"> 
            Our goal is to lead the transformation of healthcare by developing innovative technological solutions that
            empower individuals to manage and improve their health. We envision a future where we benefit both
            healthcare providers and patients, driving efficiency and enhancing the quality of care provided.
          </span>
        </div>
        <div
          className="stripe_line h-[2px] w-5/6 md:w-2/3  mx-auto rounded-full my-5 scroll_animate overflow-x-hidden aos-init aos-animate"
          data-aos="fade-right"
        ></div>
        <div className="text-center justify-between w-5/6 md:w-2/3  mx-auto pt-10 sm:pt-14 md:pt-20 xl:pt-10 sm:mb-14">
          <h1 className="text-3xl md:text-5xl font-bold  mb-6">Mission</h1>
          <span className="text-[14px] md:text-[24px] leading-tight">
            Our mission is to advance healthcare through the commercialization of innovative technologies that deliver
            tangible clinical outcomes. We aim to achieve this by collaborating with the right partners to identify
            critical gaps in care and address them with precision.
          </span>
        </div>
    </div>
  );
}
