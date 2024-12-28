import React from "react";
import bg from "@/app/assets/aboutUs_bg.png";
import bg2 from "@/app/assets/aboutBg-2.png";
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
        <div className="flex justify-center w-9/12 mx-auto mt-14 sm:mt-0">
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
     
      <div className="mt-16 md:mt-28 flex justify-center items-center">
          
          </div>
      {/* <div className="flex justify-center w-9/12 mx-auto mt-14 sm:mt-0">
        <div className="text-start w-3/5 my-auto">
          <h1 className="font-bold text-xl md:text-2xl xl:text-5xl mb-5">
            Collaborating with Pioneering Solution Providers
          </h1>
          <span className="text-sm md:text-xl  xl:text-2xl ">
            We collaborate with the world&apos;s most innovative medical technology companies to bring tailored
            solutions to hospitals. Our extensive network allows us to
          </span>
        </div>
        <div className="stripe_line_vertical w-[1px] min-h-72 mx-5"></div>

        <div className="text-[#3fc4ae] w-3/12 my-auto">
          <h1 className="mb-3 text-[10px] sm:text-[13px]  md:text-[18px]">
            Identify and address specific pain points and challenges
          </h1>
          <h1 className="mb-3 text-[10px]  sm:text-[13px] md:text-[18px]">
            {" "}
            Introduce latest advancements in medical devices and software
          </h1>
          <h1 className="mb-3 text-[10px] sm:text-[13px] md:text-[18px] ">
            Foster a culture of continuous improvement and innovation
          </h1>
        </div>
      </div> */}
      {/* <div
        className="stripe_line mx-auto rounded-full my-5 scroll_animate overflow-x-hidden h-[2px] w-2/3 mt-20"
        data-aos="fade-right"
      ></div> */}
      {/* <div className="text-center justify-between w-2/3 mx-auto pt-10 sm:pt-20 md:pt-32">
        <h1 className="text-xl font-bold sm:font-normal sm:text-2xl md:text-3xl xl:text-5xl mb-2">
          Customized Solutions for Enhanced Care
        </h1>
        <div className="md:w-2/3 text-center mx-auto">
          {" "}
          <span className="text-sm md:text-xl ">
            Our expert team works closely with hospitals to understand their unique needs and requirements.
          </span>
        </div>
      </div> */}

      {/* <div
        className=" h-3/5 xl:min-h-screen bg-[length:100vw_250px] bg-[position:0_70%]  sm:bg-[length:100vw_310px]  sm:bg-[position:0_45%]   md:bg-[length:100vw_350px]  md:bg-[position:0_80%] xl:bg-[length:100vw_450px]  xl:bg-[position:0_80%] "
        style={{
          backgroundImage: `url(${bg2.src})`,
          backgroundRepeat: "no-repeat", // Prevents tiling
        }}
      >
        <div className="flex justify-around text-start mt-10">
          {" "}
          <div className="md:w-1/4 italic text-sm md:text-[16px] text-[#2ccdb5] flex">
          <div className="bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] min-w-5 max-w-5 min-h-5 max-h-5  rounded-full mr-3 "></div>
          <span>Personalized solutions to streamline operations and reduce workload</span>{" "}
          </div>
          <div></div>
        </div>
        <div
          className=" stripe_full mx-auto rounded-full scroll_animate overflow-x-hidden h-[1px] w-full mt-4"
          data-aos="fade-right"
        ></div>{" "}
        <div className="flex justify-center text-start ">
          {" "}
          <div className="md:w-1/4 italic text-sm md:text-[16px] text-[#2ccdb5] flex my-5">
          <div className="bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] min-w-5 max-w-5 min-h-5 max-h-5 rounded-full mr-3 "></div>
          <span>Advanced diagnostic and therapeutic technologies for improved patient outcomes</span>{" "}
          </div>
        </div>
        <div
          className="stripe_full mx-auto rounded-full scroll_animate overflow-x-hidden h-[1px] w-full mt-4"
          data-aos="fade-right"
        ></div>{" "}
        <div className="flex justify-around text-start ">
          {" "}
          <div></div>
          <div className="md:w-1/4 italic text-sm md:text-[16px] text-[#2ccdb5] flex my-5">
          <div className="bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] min-w-5 max-w-5 min-h-5 max-h-5 rounded-full mr-3 "></div>
          <span>Seamless integration with existing systems for effortless adoption</span>{" "}
          </div>
        </div>
        <div
          className="stripe_full mx-auto rounded-full scroll_animate overflow-x-hidden h-[1px] w-full mt-4"
          data-aos="fade-right"
        >
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
      </div> */}
    </div>
  );
}
