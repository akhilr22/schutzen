"use client";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Image from 'next/image';
import { validationSchema } from '@/Utils/ValidationSchema';
import React, { useRef } from 'react';
import upload from "@/app/assets/upload.png";


export default function CareersForm() {
  

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const fullNameRef = useRef(null);
  const mobileNumberRef = useRef(null);
  const emailRef = useRef(null);
  const coverLetterRef = useRef(null);
  const resumeRef = useRef(null);

  const handleDivClick = (inputRef) => {
    if (inputRef.current) {

      inputRef.current.focus();

    }
  };

  const onSubmit = (data) => {
    console.log('Form Submitted:', data);
    // Handle form submission logic here (e.g., API call)
  };

  const handleFileUpload = (e, fieldName) => {
    const file = e.target.files[0];
    if (file) {
      setValue(fieldName, file); // Set file into the form state
    }
  };
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="m-20 mx-52">
      <div className="p-[1px] bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] rounded-[50px] h-full">
        <div className="bg-[#fefaf5] dark:bg-black dark:text-white w-full h-full rounded-[50px] p-4 flex flex-col">
          <div className="p-12">
            <h1 className="text-3xl mb-8">Connect with us</h1>

            {/* Full Name Field */}
            <div
              className="p-[1px] bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] rounded-[28px] h-full mb-3 cursor-pointer"
              onClick={() => handleDivClick(fullNameRef)}
            >
              <div className="bg-[#fefaf5] dark:bg-black dark:text-white w-full h-full rounded-[26px] p-4 flex flex-col">
                <label className="text-gray-500 dark:text-gray-300 text-xl">Full name*</label>
                <input
                  type="text"
                  {...register('fullName')}
                  ref={fullNameRef} // Attach the ref to the input field
                  className="bg-transparent border-none outline-none text-black dark:text-white"
                />
                {errors.fullName && <span className="text-red-500 text-sm">{errors.fullName.message}</span>}
              </div>
            </div>

            {/* Mobile Number Field */}
            <div
              className="p-[1px] bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] rounded-[28px] h-full mb-3 cursor-pointer"
              onClick={() => handleDivClick(mobileNumberRef)}
            >
              <div className="bg-[#fefaf5] dark:bg-black dark:text-white w-full h-full rounded-[26px] p-4 flex flex-col">
                <label className="text-gray-500 dark:text-gray-300 text-xl">Mobile Number*</label>
                <input
                  type="text"
                  {...register('mobileNumber')}
                  ref={mobileNumberRef} // Attach the ref to the input field
                  className="bg-transparent border-none outline-none text-black dark:text-white"
                />
                {errors.mobileNumber && <span className="text-red-500 text-sm">{errors.mobileNumber.message}</span>}
              </div>
            </div>

            {/* Email Field */}
            <div
              className="p-[1px] bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] rounded-[28px] h-full mb-3 cursor-pointer"
              onClick={() => handleDivClick(emailRef)}
            >
              <div className="bg-[#fefaf5] dark:bg-black dark:text-white w-full h-full rounded-[26px] p-4 flex flex-col">
                <label className="text-gray-500 dark:text-gray-300 text-xl">Email ID*</label>
                <input
                  type="email"
                  {...register('email')}
                  ref={emailRef} // Attach the ref to the input field
                  className="bg-transparent border-none outline-none text-black dark:text-white"
                />
                {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
              </div>
            </div>

            {/* File Upload: Cover Letter */}
            <div
              className="p-[1px] bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] rounded-[28px] h-full mb-3 cursor-pointer"
              onClick={() => handleDivClick(coverLetterRef)}
            >
              <div className="bg-[#fefaf5] dark:bg-black dark:text-white w-full h-full rounded-[26px] p-4 flex flex-col">
                <label htmlFor="coverLetter" className="text-gray-500 dark:text-gray-300 text-xl">Cover Letter*</label>
                <input
                  type="file"
                  id="coverLetter"
                  className="hidden"
                  ref={coverLetterRef} // Attach the ref to the input field
                  onChange={(e) => handleFileUpload(e, 'coverLetter')}
                />
                <Image src={upload} alt="upload" className="w-7 h-7" />

                {errors.coverLetter && <span className="text-red-500 text-sm">{errors.coverLetter.message}</span>}
              </div>
            </div>

            {/* File Upload: Resume */}
            <div
              className="p-[1px] bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] rounded-[28px] h-full mb-3 cursor-pointer"
              onClick={() => handleDivClick(resumeRef)}
            >
              <div className="bg-[#fefaf5] dark:bg-black dark:text-white w-full h-full rounded-[26px] p-4 flex flex-col">
                <label htmlFor="resume" className="text-gray-500 dark:text-gray-300 text-xl">Resume*</label>
                <input
                  type="file"
                  id="resume"
                  className="hidden"
                  ref={resumeRef} // Attach the ref to the input field
                  onChange={(e) => handleFileUpload(e, 'resume')}
                />
                <Image src={upload} alt="upload" className="w-7 h-7" />
                {errors.resume && <span className="text-red-500 text-sm">{errors.resume.message}</span>}
                          
              </div>
            </div>

            <button type="submit" className="bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] p-2 px-5 mr-3 rounded-full">
              Apply
            </button>
            <button type="button" className="bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] p-2 px-5 rounded-full">
              Book Demo
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
