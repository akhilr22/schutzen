"use client";
import React from "react";

import upload from "@/app/assets/upload.png";
import Image from "next/image";
export default function CareersForm() {
  const handleFileUpload = () => {
    document?.getElementById("fileInput")?.click();
  };
  return (
    <div className="m-20 mx-52">
      <div className="p-[1px] bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] rounded-[50px] h-full">
        <div className="bg-[#fefaf5]  dark:bg-black dark:text-white w-full h-full rounded-[50px] p-4 flex flex-col">
          <div className="p-12">
          <h1 className="text-3xl mb-8">Connect with us</h1>
            <div className="p-[1px] bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] rounded-[28px] h-full   mb-3">
              <div className="bg-[#fefaf5] dark:bg-black dark:text-white w-full h-full rounded-[26px] p-4 flex flex-col py-5">
              <span className="text-gray-500 dark:text-gray-300 text-xl">Full name*</span>
              
              </div>
            </div>
            <div className="p-[1px] bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] rounded-[28px] h-full mb-3">
              <div className="bg-[#fefaf5] dark:bg-black dark:text-white w-full h-full rounded-[26px] p-4 flex flex-col py-5">
                <span className="text-gray-500 dark:text-gray-300 text-xl"> Mobile Number* </span>
              </div>
            </div>
            <div className="p-[1px] bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] rounded-[28px] h-full mb-3">
              <div className="bg-[#fefaf5] dark:bg-black dark:text-white w-full h-full rounded-[26px] p-4 flex flex-col py-5">
                <span className="text-gray-500 dark:text-gray-300 text-xl"> Email id*</span>
              </div>
            </div>
            <div className="p-[1px] bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] rounded-[28px] h-full mb-3">
              <div
                className="bg-[#fefaf5] dark:bg-black dark:text-white w-full h-full rounded-[26px] p-4 flex flex-col cursor-pointer"
                onClick={handleFileUpload}
              >
                <div className="flex justify-between items-center py-1">
                  {/* Hidden File Input */}
                  <input id="fileInput" type="file" className="hidden" />
                  {/* Placeholder Text */}
                  <span className="text-gray-500 dark:text-gray-300 text-xl">Cover Letter*</span>
                  {/* Upload Icon */}
                  <Image src={upload} alt="upload" className="w-7 h-7" />
                </div>
              </div>
            </div>
            <div className="p-[1px] bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] rounded-[28px] h-full mb-3">
              <div
                className="bg-[#fefaf5] dark:bg-black dark:text-white w-full h-full rounded-[26px] p-4 flex flex-col cursor-pointer"
                onClick={handleFileUpload}
              >
                <div className="flex justify-between items-center py-1">
                  {/* Hidden File Input */}
                  <input id="fileInput" type="file" className="hidden" />
                  {/* Placeholder Text */}
                  <span className="text-gray-500 dark:text-gray-300">Resume*</span>
                  {/* Upload Icon */}
                  <Image src={upload} alt="upload" className="w-7 h-7" />
                </div>
              </div>
            </div>

            <button className="bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] p-2 px-5 mr-3 rounded-full">Apply</button>
            <button className="bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] p-2 px-5 rounded-full">Book Demo</button>
          </div>
        </div>
      </div>
    </div>
  );
}
