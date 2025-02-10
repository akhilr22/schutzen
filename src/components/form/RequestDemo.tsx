/* eslint-disable @typescript-eslint/no-unused-vars */

"use client";
import axios from "axios";
import React, { useState } from "react";

interface FormData {
  name: string;
  companyName: string;
  email: string;
  phoneNumber: string;
  country: string;
  preferredSolution: string;
  description: string;
}

export default function RequestDemo(): JSX.Element {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    companyName: "",
    email: "",
    phoneNumber: "",
    country: "",
    preferredSolution: "",
    description: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear error for the field
  };

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.companyName.trim()) newErrors.companyName = "Company name is required.";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Valid email is required.";
    if (!formData.phoneNumber.trim() || !/^\d{10,15}$/.test(formData.phoneNumber))
      newErrors.phoneNumber = "Valid phone number (10-15 digits) is required.";
    if (!formData.country.trim()) newErrors.country = "Country/Region is required.";
    if (!formData.preferredSolution.trim()) newErrors.preferredSolution = "Please select a preferred solution.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      try {
        const res = await axios.post(`/api/contactus`, formData);
        alert("Form submitted successfully!");
        setFormData({
          name: "",
          companyName: "",
          email: "",
          phoneNumber: "",
          country: "",
          preferredSolution: "",
          description: "",
        });
      } catch (error) {
        console.error(error);
      }
    } else {
      console.error("Validation failed:", errors);
    }
  };

  return (
    <div>
      <form
        className=""
        encType="multipart/form-data"
        onSubmit={handleSubmit}
      >
        <div className="p-[1px] bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] rounded-[50px] h-full">
          <div className="bg-[#fefaf5] dark:bg-black dark:text-white w-full h-full rounded-[50px] p-4 flex flex-col">
            <div className="p-0">
              <h1 className="text-3xl mb-8">Connect with us</h1>

              {[
                { label: "Name", name: "name", type: "text", required: true },
                { label: "Company Name", name: "companyName", type: "text", required: true },
                { label: "Email ID", name: "email", type: "email", required: true },
                { label: "Phone Number", name: "phoneNumber", type: "text", required: true },
                { label: "Country/Region", name: "country", type: "text", required: true },
              ].map((field) => (
                <div
                  key={field.name}
                  className="p-[1px] bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] rounded-[28px] h-full mb-3"
                >
                  <div className="bg-[#fefaf5] dark:bg-black dark:text-white w-full h-full rounded-[26px] p-4 flex flex-col">
                    <label className="text-gray-500 dark:text-gray-300 text-xl">
                      {field.label} {field.required && "*"}
                    </label>
                    <input
                      type={field.type}
                      className="bg-transparent border-none outline-none text-black dark:text-white"
                      id={field.name}
                      name={field.name}
                      value={formData[field.name as keyof FormData]}
                      onChange={handleChange}
                    />
                    {errors[field.name as keyof FormData] && (
                      <span className="text-red-500 text-sm">{errors[field.name as keyof FormData]}</span>
                    )}
                  </div>
                </div>
              ))}

              {/* Preferred Solution Field */}
              <div className="p-[1px] bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] rounded-[28px] h-full mb-3">
                <div className="bg-[#fefaf5] dark:bg-black dark:text-white w-full h-full rounded-[26px] p-4 flex flex-col">
                  <label className="text-gray-500 dark:text-gray-300 text-xl">Which Solution Do You Prefer? *</label>
                  <div className="flex-1">
                    {[
                      { id: "RapidScreeningSolution", label: "Rapid Screening Solution" },
                      { id: "PatientMonitoringSolution", label: "Patient Monitoring Solution" },
                    ].map((option) => (
                      <div key={option.id} className="mr-4">
                        <input
                          type="radio"
                          id={option.id}
                          name="preferredSolution"
                          value={option.label}
                          checked={formData.preferredSolution === option.label}
                          onChange={handleChange}
                        />
                        <label htmlFor={option.id} className="ml-2">
                          {option.label}
                        </label>
                      </div>
                    ))}
                  </div>
                  {errors.preferredSolution && <span className="text-red-500 text-sm">{errors.preferredSolution}</span>}
                </div>
              </div>

              {/* Description Field */}
              <div className="p-[1px] bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] rounded-[28px] h-full mb-3">
                <div className="bg-[#fefaf5] dark:bg-black dark:text-white w-full h-full rounded-[26px] p-4 flex flex-col">
                  <label className="text-gray-500 dark:text-gray-300 text-xl">Description</label>
                  <textarea
                    className="bg-transparent border-none outline-none text-black dark:text-white"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button type="submit" className="bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] p-2 px-5 mr-3 rounded-full">
                Apply
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
