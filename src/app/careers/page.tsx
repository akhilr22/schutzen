import React from "react";
import bg from "@/app/assets/careersbg.png";
// import CareersForm from "@/components/form/CarrersForm";
// import calenderIcon from "@/app/assets/calendar.png";
import email from "@/app/assets/email-icon.png";
import phone from "@/app/assets/telephone.png";
// import ReqDemoBtn from "@/components/buttons/ReqDemoBtn";
import Image from "next/image";
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
      {/* <div className="flex justify-center mt-10 mx-5 xl:mt-24">
          <div
            className=" sm:w-4/5 md:w-3/5 xl:w-1/3 sm:h-96 p-[1px] bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] rounded-[80px] scroll_animate "
            data-aos="zoom-in"
          >
            <div className="w-full h-full bg-black rounded-[80px] px-7 py-7 md:px-12 md:py-16">
            <div className="mx-3"> 
                <Image src={calenderIcon} alt="calender" className="w-7 h-7" />
              <h1 className="text-xl font-bold md:font-normal sm:text-2xl md:text-4xl py-2">Schedule a demo</h1>
              <p>
                <span className=" text-sm md:text-xl">
                  Talk to an expert on your needs.Discuss your needs, learn about the solutions or request a product
                  demo
                </span>
              </p>
             </div>
              <div className="xl:my-8 my-3">
                <ReqDemoBtn show={true} />
              </div>
            </div>
          </div>
        </div> */}

        {/* <h1 className="w-full mx-auto flex justify-center text-xl my-5 font-bold sm:text-3xl md:text-4xl xl:text-5xl">Share Your CV </h1> */}

        <div className="md:flex justify-between mx-10 mt-8 xl:my-14 xl:mx-40  items-center   ">
        <div className="  w-2/3 md:w-1/2 h-full  my-5 xl:px-8 text-start  ">
          <h1 className="text-[16px] md:text-2xl xl:text-5xl text-center xl:text-start ">
            Feel free to reach out to us using any of these methods. Our team is always available to offer personalized
            support and guidance.
          </h1>
        </div>
        <div className="stripe_line_vertical hidden md:block w-full h-[1px] md:w-[1px]  md:min-h-96"></div>
        <div className="stripe_line md:hidden w-full h-[1px] md:w-[1px]  md:min-h-96"></div>
        <div className="xl:w-1/2  h-36 px-1  xl:px-8 flex flex-col items-center justify-center gap-4">
          {/* Email */}
          <div
            className=" w-full xl:w-4/5 sm:h-11 p-[1px] bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] rounded-full scroll_animate"
            data-aos="fade-right"
          >
            <div className="w-full h-full sm:px-3  rounded-full flex items-center justify-center text-center overflow-hidden">
              <Image src={email} alt="email" className="md:w-4 md:h-4 xl:w-6 xl:h-6 w-4 h-4 mr-2" />
              <span className="text-xl md:text-[18px] xl:text-2xl text-white ">info@schutzenhealth.com</span>
            </div>
          </div>

          {/* Phone */}
          <div
            className=" w-full xl:w-4/5 sm:h-11 p-[1px] bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] rounded-full scroll_animate"
            data-aos="fade-right"
          >
            <div className="w-full h-full  rounded-full flex items-center justify-center text-center">
              <Image src={phone} alt="phone" className="md:w-4 md:h-4 xl:w-6 xl:h-6 w-4 h-4 mr-2" />
              <span className="text-xl md:text-[18px] xl:text-3xl text-white">+91 9025250901</span>
            </div>
          </div>
        </div>
      </div>
      {/* <CareersForm/> */}
    </div>
  );
}
