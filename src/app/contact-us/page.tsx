import React from "react";
import contactBg from "@/app/assets/contact-gradient.png";
import calenderIcon from "@/app/assets/calendar.png";
import email from "@/app/assets/email-icon.png";
import phone from "@/app/assets/telephone.png";
import Image from "next/image";
import RequestDemo from "@/components/form/RequestDemo";
// import ReqDemoBtn from "@/components/buttons/ReqDemoBtn";
const Page = () => {
  return (
    <>
      <div
        className=" h-3/5 xl:min-h-screen bg-[length:100vw_250px] bg-[position:0_70%]  sm:bg-[length:100vw_310px]  sm:bg-[position:0_45%]   md:bg-[length:100vw_350px]  md:bg-[position:0_80%] xl:bg-[length:100vw_450px]  xl:bg-[position:0_80%] "
        style={{
          backgroundImage: `url(${contactBg.src})`,
          backgroundSize: "cover", // Ensures the image covers the entire area
          backgroundPosition: "center", // Centers the image
          backgroundRepeat: "no-repeat", // Prevents tiling
          width: "100%",
        }}
      >
        <div className="flex-1 text-center mx-auto justify-center sm:mt-20 xl:mt-10 xl:pb-4 w-2/3">
          {/* <h1 className="sm:text-5xl text-xl font-bold sm:font-normal p-4">Get in Touch with Us</h1> */}
          <h1 className="text-2xl md:text-5xl font-bold m-3">Get in Touch with Us</h1>
          <div className=" mx-8 md:w-1/2 text-center md:mx-auto justify-center sm:text-xl text-[13px]">
            <p>
              <span>
                We are here to help you with any questions or inquiries you have about our solutions. Whether you need
                technical support, product information, or a consultation on how our solutions can improve patient care,
                we are ready to assist you.
              </span>
            </p>
          </div>
        </div>

        <div className="flex justify-center mt-10 mx-5 xl:mt-24">
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
              {/* <div className="xl:my-8 my-3">
                <ReqDemoBtn show={true} />
              </div> */}
              <div className=" flex  flex-col gap-3 mx-auto justify-center items-center">
                <div
                  className=" mt-5 w-full xl:w-4/5 sm:h-11 p-[1px] bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] rounded-full scroll_animate"
                  data-aos="fade-right"
                >
                  <div className="w-full h-full bg-black rounded-full flex items-center justify-center text-center overflow-hidden">
                    <Image src={email} alt="email" className="md:w-4 md:h-4 xl:w-6 xl:h-6 w-4 h-4 mr-2" />
                    <span className="text-xl md:text-[18px] xl:text-xl text-white">info@schutzenhealth.com</span>
                  </div>
                </div>

                {/* Phone */}
                <div
                  className=" w-full xl:w-4/5 sm:h-11 p-[1px] bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] rounded-full scroll_animate"
                  data-aos="fade-right"
                >
                  <div className="w-full h-full bg-black rounded-full flex items-center justify-center text-center">
                    <Image src={phone} alt="phone" className="md:w-4 md:h-4 xl:w-6 xl:h-6 w-4 h-4 mr-2" />
                    <span className="text-xl md:text-[18px] xl:text-xl text-white">+91 9025250901</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      <RequestDemo/>
      </div>

      <div className="md:flex justify-between mx-10 mt-8 xl:my-14 xl:mx-40  items-center   ">
        {/* <div className="  w-2/3 md:w-1/2 h-full  mx-auto my-5 xl:px-8 text-start">
          <h1 className="text-[16px] md:text-2xl xl:text-5xl text-center md:text-start">
            Feel free to reach out to us using any of these methods. Our team is always available to offer personalized
            support and guidance.
          </h1>
        </div> */}
        {/* <div className="stripe_line_vertical hidden md:block w-full h-[1px] md:w-[1px]  md:min-h-96"></div> */}
        {/* <div className="stripe_line md:hidden w-full h-[1px] md:w-[1px]  md:min-h-96"></div> */}
        {/* <div className="xl:w-1/2  h-36 px-1  xl:px-8 flex flex-col items-center justify-center gap-4">
         
     
        </div> */}
      </div>

      {/* <div className="flex mx-auto justify-center w-4/5 md:w-5/12 ">
        <span className="text-center text-xl italic">
          We look forward to connecting with you and supporting your journey toward improved patient care. Thank you for
          considering us as your partner in patient monitoring.
        </span>
      </div> */}
    </>
  );
};

export default Page;
