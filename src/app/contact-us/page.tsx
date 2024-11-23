import React from "react";
import contactBg from "@/app/assets/contact-gradient.png";
import calenderIcon from "@/app/assets/calendar.png";
import email from "@/app/assets/email-icon.png";
import phone from "@/app/assets/telephone.png";
import Image from "next/image";
import ReqDemoBtn from "@/components/buttons/ReqDemoBtn";
const Page = () => {
  return (
    <>
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
        <div className="flex-1 text-center mx-auto justify-center mt-32 pb-4">
          <h2 className="text-5xl p-4">Get in Touch with Us</h2>
          <div className=" w-1/2 text-center mx-auto justify- text-xl">
            <p>
              <span>
                we&apos;re here to help you with any questions or inquiries you have about our solutions. Whether you
                need technical support, product information, or a consultation on how our solutions can improve patient
                care, we are ready to assist you.
              </span>
            </p>
          </div>
        </div>

        <div className="flex justify-center mt-24">
          <div
            className="w-20 h-20 sm:w-1/3 sm:h-96 p-[1px] bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] rounded-[80px] scroll_animate "
            data-aos="zoom-in"
          >
            <div className="w-full h-full bg-black rounded-[80px] px-12 py-16">
              <Image src={calenderIcon} alt="calender" className="w-7 h-7 " />
              <h1 className="text-4xl py-2">Schedule a demo</h1>
              <p>
                <span className="text-xl">
                  Talk to an expert on your needs.Discuss your needs, learn about the solutions or request a product
                  demo
                </span>
              </p>
              <div className="my-8">
                <ReqDemoBtn />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between my-14 mx-40  items-center  ">
        <div className="  w-1/2 h-full   px-8 text-start">
          <h1 className="text-5xl">
            Feel free to reach out to us using any of these methods. Our team is always available to offer personalized
            support and guidance.
          </h1>
        </div>
        <div className="stripe_line_vertical w-[1px] min-h-96"></div>
        <div className="w-1/2 h-36 px-8 flex flex-col items-center justify-center gap-4">
          {/* Email */}
          <div
            className="w-20 h-20 sm:w-4/5 sm:h-11 p-[1px] bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] rounded-full scroll_animate"
            data-aos="fade-right"
          >
            <div className="w-full h-full bg-black rounded-full flex items-center justify-center text-center">
              <Image src={email} alt="email" className="w-6 h-6 mr-2" />
              <span className="text-3xl text-white">hasan@schutzenhealth.com</span>
            </div>
          </div>

          {/* Phone */}
          <div
            className="w-20 h-20 sm:w-4/5 sm:h-11 p-[1px] bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] rounded-full scroll_animate"
            data-aos="fade-right"
          >
            <div className="w-full h-full bg-black rounded-full flex items-center justify-center text-center">
              <Image src={phone} alt="phone" className="w-6 h-6 mr-2" />
              <span className="text-3xl text-white">+91 9025250901</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex mx-auto justify-center w-5/12 ">
        <span className="text-center text-xl">
          We look forward to connecting with you and supporting your journey toward improved patient care. Thank you for
          considering us as your partner in patient monitoring.
        </span>
      </div>
    </>
  );
};

export default Page;
