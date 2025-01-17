import React from "react";

export default function RequestDemo() {
  return (
    <div>
      {" "}
      <form className="m-5 mx-10 md:m-20 md:mx-52  xl:m-20 xl:mx-52" encType="multipart/form-data">
        <div className="p-[1px] bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] rounded-[50px] h-full">
          <div className="bg-[#fefaf5] dark:bg-black dark:text-white w-full h-full rounded-[50px] p-4 flex flex-col">
            <div className="p-0">
              <h1 className="text-3xl mb-8">Connect with us</h1>

              {/* Full Name Field */}
              <div className="p-[1px] bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] rounded-[28px] h-full mb-3 cursor-pointer">
                <div className="bg-[#fefaf5] dark:bg-black dark:text-white w-full h-full rounded-[26px] p-4 flex flex-col">
                  <label className="text-gray-500 dark:text-gray-300 text-xl">Full name*</label>
                  <input
                    type="text"
                    className="bg-transparent border-none outline-none text-black dark:text-white"
                    id="fullName"
                    name="fullName" // Add this
                  />
                </div>
              </div>

              {/* Mobile Number Field */}
              <div className="p-[1px] bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] rounded-[28px] h-full mb-3 cursor-pointer">
                <div className="bg-[#fefaf5] dark:bg-black dark:text-white w-full h-full rounded-[26px] p-4 flex flex-col">
                  <label className="text-gray-500 dark:text-gray-300 text-xl">Mobile Number*</label>
                  <input
                    type="text"
                    className="bg-transparent border-none outline-none text-black dark:text-white"
                    id="mobileNumber"
                    name="mobileNumber" // Add this
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="p-[1px] bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] rounded-[28px] h-full mb-3 cursor-pointer">
                <div className="bg-[#fefaf5] dark:bg-black dark:text-white w-full h-full rounded-[26px] p-4 flex flex-col">
                  <label className="text-gray-500 dark:text-gray-300 text-xl">Email ID*</label>
                  <input
                    type="email"
                    className="bg-transparent border-none outline-none text-black dark:text-white"
                    id="email"
                    name="email" // Add this
                  />
                </div>
              </div>

              {/* File Upload: Cover Letter */}

              <button type="submit" className="bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] p-2 px-5 mr-3 rounded-full">
                Apply
              </button>
              {/* <button type="button" className="bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] p-2 px-5 rounded-full">
        Book Demo
      </button> */}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
