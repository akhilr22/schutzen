/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { Resolver, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import { validationSchema } from "@/Utils/ValidationSchema";
import React, { useRef, useState } from "react";
import upload from "@/app/assets/upload.png";
import { ref, uploadBytesResumable, getDownloadURL, UploadTask } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';
import { db,storage } from "@/Firebase/config"; // Adjust path as needed

// Define the form data structure
interface FormData {
  fullName: string;
  mobileNumber: string;
  email: string;
  coverLetter?: File; // Optional
  resume?: File; // Required by validation schema
}

export default function CareersForm() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(validationSchema) as unknown as Resolver<FormData>, // Ensure proper typing
  });
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [resume, setResume] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const fullNameRef = useRef<HTMLInputElement | null>(null);
  const mobileNumberRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const coverLetterRef = useRef<HTMLInputElement | null>(null);
  const resumeRef = useRef<HTMLInputElement | null>(null);

  const handleDivClick = (inputRef: React.RefObject<HTMLInputElement>) => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };



 
  


  const onSubmit = (data: FormData) => {
  
    if (!resume) {
      alert("Please upload a resume");
      return;
    }
  
    try {
      // Create a storage reference
      const storageRef = ref(storage, `resumes/${Date.now()}-${resume.name}`);
      const uploadTask: UploadTask = uploadBytesResumable(storageRef, resume);
  
      // Monitor upload progress
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress: number = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setUploadProgress(progress);
        },
        (error: Error) => {
          console.error("Upload error:", error);
          alert("Error uploading file");
        },
        async () => {
          // Get file download URL
          const downloadURL: string = await getDownloadURL(uploadTask.snapshot.ref);
  
          // Save metadata to Firestore
          await addDoc(collection(db, "careers"), {
            name,
            email,
            resumeURL: downloadURL,
            timestamp: new Date(),
          });
  
          alert("Resume uploaded successfully!");
          setName("");
          setEmail("");
          setResume(null);
          setUploadProgress(0);
        }
      );
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to upload resume");
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, fieldName: keyof FormData) => {
    const file = e.target.files?.[0];
    if (file) {
      setValue(fieldName, file); // Set file into the form state
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="m-5 mx-10 md:m-20 md:mx-52  xl:m-20 xl:mx-52">
      <div className="p-[1px] bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] rounded-[50px] h-full">
        <div className="bg-[#fefaf5] dark:bg-black dark:text-white w-full h-full rounded-[50px] p-4 flex flex-col">
          <div className="p-0">
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
                  {...register("fullName")}
                  ref={fullNameRef}
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
                  {...register("mobileNumber")}
                  ref={mobileNumberRef}
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
                  {...register("email")}
                  ref={emailRef}
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
              <div className="bg-[#fefaf5] dark:bg-black dark:text-white w-full h-full rounded-[26px] p-4 flex items-center">
                <label htmlFor="coverLetter" className="text-gray-500 dark:text-gray-300 text-xl">
                  Cover Letter*
                </label>
                <input
                  type="file"
                  id="coverLetter"
                  className="hidden"
                  ref={coverLetterRef}
                  onChange={(e) => handleFileUpload(e, "coverLetter")}
                />
                <Image src={upload} alt="upload" className="w-7 h-7 ml-auto" />
                {errors.coverLetter && <span className="text-red-500 text-sm">{errors.coverLetter.message}</span>}
              </div>
            </div>

            {/* File Upload: Resume */}
            <div
              className="p-[1px] bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] rounded-[28px] h-full mb-3 cursor-pointer"
              onClick={() => handleDivClick(resumeRef)}
            >
              <div className="bg-[#fefaf5] dark:bg-black dark:text-white w-full h-full rounded-[26px] p-4 flex items-center">
                <label htmlFor="resume" className="text-gray-500 dark:text-gray-300 text-xl">
                  Resume*
                </label>
                <input
                  type="file"
                  id="resume"
                  className="hidden"
                  ref={resumeRef}
                  onChange={(e) => handleFileUpload(e, "resume")}
                />
                <Image src={upload} alt="upload" className="w-7 h-7 ml-auto" />
                {errors.resume && <span className="text-red-500 text-sm">{errors.resume.message}</span>}
              </div>
            </div>

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
  );
}
