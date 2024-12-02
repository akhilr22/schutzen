import React from "react";
import bg from "@/app/assets/aboutUs_bg.png";
export default function page() {
  return (
    <div>
      <div
        className="min-h-screen bg-[length:100vw_450px]  bg-[position:0_80%]"
        style={{
          backgroundImage: `url(${bg.src})`,
          backgroundRepeat: "no-repeat", // Prevents tiling
        }}
      >
        <div className="text-center justify-between w-2/3 mx-auto pt-32">
          <h1 className="text-5xl mb-6">Transforming Healthcare through Innovation</h1>
          <span className="text-2xl">
            At Schutzen Healthtech, we&apos;re driven by a singular mission, to revolutionize healthcare delivery
            through cutting-edge technology. We believe that innovation and compassion go hand-in-hand, and our goal is
            to empower hospitals to provide exceptional patient care.
          </span>
        </div>
      </div>
      <div className="flex justify-center w-9/12 mx-auto">
        <div className="text-start w-3/5 my-auto">
          <h1 className="text-5xl mb-5">Collaborating with Pioneering Solution Providers</h1>
          <span className="text-2xl ">
            We collaborate with the world&apos;s most innovative medical technology companies to bring tailored
            solutions to hospitals. Our extensive network allows us to
          </span>
        </div>
        <div className="stripe_line_vertical w-[1px] min-h-72 mx-5"></div>

        <div className="text-[#3fc4ae] w-3/12 my-auto">
          <h1 className="mb-8 text-xl">Identify and address specific pain points and challenges</h1>
          <h1 className="mb-8 text-xl"> Introduce latest advancements in medical devices and software</h1>
          <h1 className="mb-8 text-xl">Foster a culture of continuous improvement and innovation</h1>
        </div>
      </div>
      <div
        className="stripe_line mx-auto rounded-full my-5 scroll_animate overflow-x-hidden h-[2px] w-2/3 mt-20"
        data-aos="fade-right"
      ></div>
      <div className="text-center justify-between w-2/3 mx-auto pt-32">
        <h1 className="text-5xl mb-6">Customized Solutions for Enhanced Care</h1>
        <div className="w-2/3 text-center mx-auto">
          {" "}
          <span className="text-2xl ">
            Our expert team works closely with hospitals to understand their unique needs and requirements.
          </span>
        </div>
      </div>

      <div className="mt-10">
        <div className="flex justify-around text-start ">
          {" "}
          <div className="w-1/4 text-xl">
            <span>Personalized solutions to streamline operations and reduce workload</span>{" "}
          </div>
          <div></div>
        </div>
        <div
          className="stripe_line mx-auto rounded-full scroll_animate overflow-x-hidden h-[1px] w-full mt-4"
          data-aos="fade-right"
        ></div>{" "}
        <div className="flex justify-center text-start ">
          {" "}
          <div className="w-1/4 text-xl">
            <span>Personalized solutions to streamline operations and reduce workload</span>{" "}
          </div>
        </div>
        <div
          className="stripe_line mx-auto rounded-full scroll_animate overflow-x-hidden h-[1px] w-full mt-4"
          data-aos="fade-right"
        ></div>{" "}
        <div className="flex justify-around text-start ">
          {" "}
          <div></div>
          <div className="w-1/4 text-xl">
            <span>Personalized solutions to streamline operations and reduce workload</span>{" "}
          </div>
        </div>
        <div
          className="stripe_line mx-auto rounded-full scroll_animate overflow-x-hidden h-[1px] w-full mt-4"
          data-aos="fade-right"
        ></div>{" "}
      </div>
    </div>
  );
}
