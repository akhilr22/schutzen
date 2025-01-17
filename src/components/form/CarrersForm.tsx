/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import Image from "next/image";
import React, { useRef, useState } from "react";
import upload from "@/app/assets/upload.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import { BlobServiceClient } from "@azure/storage-blob";
import { CosmosClient } from "@azure/cosmos";
import axios from "axios";
import Loader from "@/components/ui/loader/Loader";
// Define the form data structure
interface FormData {
  fullName: string;
  mobileNumber: string;
  email: string;
  coverLetter?: File; // Optional
  resume?: File; // Required by validation schema
}

const onClickFocus = (inputRef: React.RefObject<HTMLInputElement>) => {
  if (inputRef.current) {
    inputRef.current.focus();
  }
};

// Validation Schema
const validationSchema = Yup.object({
  fullName: Yup.string().required("Full name is required").min(3, "Full name must be at least 3 characters"),
  mobileNumber: Yup.string()
    .required("Mobile number is required")
    .matches(/^[0-9]{10}$/, "Enter a valid 10-digit mobile number"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  coverLetter: Yup.mixed()
    .notRequired()
    .test(
      "fileSize",
      "File size is too large (max 5MB)",
      (value) => !value || (value instanceof File && value.size <= 5 * 1024 * 1024)
    )
    .test(
      "fileType",
      "Unsupported file format",
      (value) => !value || (value instanceof File && ["application/pdf", "application/msword"].includes(value.type))
    ),
  resume: Yup.mixed()
    .required("Resume is required")
    .test(
      "fileSize",
      "File size is too large (max 5MB)",
      (value) => value instanceof File && value.size <= 5 * 1024 * 1024
    )
    .test(
      "fileType",
      "Unsupported file format",
      (value) => value instanceof File && ["application/pdf", "application/msword"].includes(value.type)
    ),
});

export default function CareersForm() {
  const fullNameRef = useRef<HTMLInputElement | null>(null);
  const mobileNumberRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const [isLoader, setIsLoader] = useState(false);
  const formik = useFormik({
    initialValues: {
      fullName: "",
      mobileNumber: "",
      email: "",
      coverLetter: null as File | null,
      resume: null as File | null,
    },
    validationSchema,
    onSubmit: async (values) => {
      setIsLoader(true);
      try {
        const uploadFile = async (file: File, containerName: string, blobName: string) => {
          const response = await axios.post(`/api/generateSASToken`, { containerName, blobName });
          const { url, sasToken } = response.data;
          try {
            const uploadResponse = await axios.put(url, file, {
              headers: {
                "x-ms-blob-type": "BlockBlob", // Required by Azure Blob Storage
                "Content-Type": file.type, // Ensure the content type matches the file
              },
            });
            console.log("File uploaded successfully:", uploadResponse.status);
          } catch (error) {
            setIsLoader(false);
            console.error("Error uploading file:", error);
          }
          return url; // Return the uploaded file URL
        };
        let coverLetterUrl = "null";
        if (values.coverLetter) {
          coverLetterUrl = values.coverLetter
            ? await uploadFile(values.coverLetter, "coverletter", `${values.fullName}_coverLetter`)
            : "null";
        }

        const resumeUrl = values.resume
          ? await uploadFile(values.resume, "resume", `${values.fullName}_resume`)
          : "null";

        const data = {
          name: values.fullName,
          email: values.email,
          phone: values.mobileNumber,
          resumeUrl: resumeUrl,
          coverLetterUrl: coverLetterUrl,
        };

        try {
          const res = await axios.post(`/api/cosmos`, data);
          setIsLoader(false);
          alert("Application submitted successfully");
          formik.resetForm();
        } catch (error) {
          setIsLoader(false);

          console.error("Error submitting application:", error);
        }

        console.log("Files uploaded successfully:", { resumeUrl, coverLetterUrl });
      } catch (error) {
        setIsLoader(false);

        console.error("Error submitting application:", error);
      }
    },
  });

  return (
    <>
      {isLoader && <Loader />}
      <form
        onSubmit={formik.handleSubmit}
        className="m-5 mx-10 md:m-20 md:mx-52  xl:m-20 xl:mx-52"
        encType="multipart/form-data"
      >
        <div className="p-[1px] bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] rounded-[50px] h-full">
          <div className="bg-[#fefaf5] dark:bg-black dark:text-white w-full h-full rounded-[50px] p-4 flex flex-col">
            <div className="p-0">
              <h1 className="text-3xl mb-8">Connect with us</h1>

              {/* Full Name Field */}
              <div
                className="p-[1px] bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] rounded-[28px] h-full mb-3 cursor-pointer"
                onClick={() => onClickFocus(fullNameRef)}
              >
                <div className="bg-[#fefaf5] dark:bg-black dark:text-white w-full h-full rounded-[26px] p-4 flex flex-col">
                  <label className="text-gray-500 dark:text-gray-300 text-xl">Full name*</label>
                  <input
                    type="text"
                    className="bg-transparent border-none outline-none text-black dark:text-white"
                    ref={fullNameRef}
                    id="fullName"
                    name="fullName" // Add this
                    value={formik.values.fullName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.fullName && formik.errors.fullName && (
                    <p className="text-red-500 text-sm">{formik.errors.fullName}</p>
                  )}
                </div>
              </div>

              {/* Mobile Number Field */}
              <div
                className="p-[1px] bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] rounded-[28px] h-full mb-3 cursor-pointer"
                onClick={() => onClickFocus(mobileNumberRef)}
              >
                <div className="bg-[#fefaf5] dark:bg-black dark:text-white w-full h-full rounded-[26px] p-4 flex flex-col">
                  <label className="text-gray-500 dark:text-gray-300 text-xl">Mobile Number*</label>
                  <input
                    type="text"
                    className="bg-transparent border-none outline-none text-black dark:text-white"
                    ref={mobileNumberRef}
                    id="mobileNumber"
                    name="mobileNumber" // Add this
                    value={formik.values.mobileNumber}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.mobileNumber && formik.errors.mobileNumber && (
                    <p className="text-red-500 text-sm">{formik.errors.mobileNumber}</p>
                  )}
                </div>
              </div>

              {/* Email Field */}
              <div
                className="p-[1px] bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] rounded-[28px] h-full mb-3 cursor-pointer"
                onClick={() => onClickFocus(emailRef)}
              >
                <div className="bg-[#fefaf5] dark:bg-black dark:text-white w-full h-full rounded-[26px] p-4 flex flex-col">
                  <label className="text-gray-500 dark:text-gray-300 text-xl">Email ID*</label>
                  <input
                    type="email"
                    className="bg-transparent border-none outline-none text-black dark:text-white"
                    id="email"
                    name="email" // Add this
                    ref={emailRef}
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <p className="text-red-500 text-sm">{formik.errors.email}</p>
                  )}
                </div>
              </div>

              {/* File Upload: Cover Letter */}
              <label htmlFor="coverLetter" className="w-full h-full">
                <div className="p-[1px] bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] rounded-[28px] h-full mb-3 cursor-pointer">
                  <div className="bg-[#fefaf5] dark:bg-black dark:text-white w-full h-full rounded-[26px] p-4 flex items-center">
                    <span className="text-gray-500 dark:text-gray-300 text-xl">
                      {formik.values.coverLetter?.name || "Cover Letter*"}
                    </span>
                    <input
                      type="file"
                      id="coverLetter"
                      className="hidden"
                      name="coverLetter"
                      onChange={(e) => {
                        if (e.target.files && e.target.files[0]) {
                          formik.setFieldValue("coverLetter", e.target.files[0]);
                        }
                      }}
                    />
                    <Image src={upload} alt="upload" className="w-7 h-7 ml-auto" />
                  </div>
                </div>
              </label>

              {formik.touched.coverLetter && formik.errors.coverLetter && (
                <p className="text-red-500 text-sm">{formik.errors.coverLetter}</p>
              )}

              {/* File Upload: Resume */}
              <label htmlFor="resume" className="text-gray-500 dark:text-gray-300 text-xl">
                <div className="p-[1px] bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] rounded-[28px] h-full mb-3 cursor-pointer">
                  <div className="bg-[#fefaf5] dark:bg-black dark:text-white w-full h-full rounded-[26px] p-4 flex items-center">
                    {formik.values.resume?.name || "Resume*"}
                    <input
                      type="file"
                      id="resume"
                      className="hidden"
                      name="resume" // Add this
                      onChange={(e) => {
                        if (e.target.files && e.target.files[0]) {
                          formik.setFieldValue("resume", e.target.files[0]);
                        }
                      }}
                    />
                    <Image src={upload} alt="upload" className="w-7 h-7 ml-auto" />
                  </div>
                </div>
              </label>
              {formik.touched.resume && formik.errors.resume && (
                <p className="text-red-500 text-sm">{formik.errors.resume}</p>
              )}

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
    </>
  );
}
