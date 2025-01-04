"use client";
import "./navbar.css";
import Image from "next/image";
import schutzenImg from "@/app/assets/schutzen-img.png";
// import schutzenLogo from "@/app/assets/schutzen-logo.png";
import MenuBtn from "@/components/buttons/MenuBtn";
import ReqDemoBtn from "@/components/buttons/ReqDemoBtn";
import SlideBar from "@/components/ui/slidemenu/SlideBar";
import { useState } from "react";
import { redirect } from "next/navigation";

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div className="navbar mt-8 mb-16">
        {/* Logo on the left */}
        <div className="nav-icon" onClick={() => {
                  redirect("/");
                }}>
          <Image
            className="nav-logo hidden sm:block"
            src={schutzenImg}
            alt="Schutzen Logo"
            width={150}
            height={50}
            priority
          />
          <Image
            className="nav-logo-sm block sm:hidden"
            src={schutzenImg}
            alt="Schutzen Logo"
            width={150}
            height={50}
            priority
          />
        </div>

        {/* Centered nav items */}
        <div className="nav-list">
          <div className="gradient-border">
            <ul>
              <li
                onClick={() => {
                  setMenuOpen(false);
                  redirect("/");
                }}
              >
                <span>Home</span>
              </li>
              <li className="relative group">
                <span
                  className="cursor-pointer md:inline-block block text-sm font-medium"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  Solutions
                </span>
                <div
                  className={`absolute w-full md:w-56 ${
                    menuOpen ? "block" : "hidden"
                  } mt-2 group-hover:block py-2 px-4 justify-center hidden border-2 bg-[#fefaf5] dark:bg-[#181817] text-[#56c1af] dark:text-[#56c1af] border-transparent rounded-lg md:mt-[4px]`}
                >
                  <div
                    onClick={() => {
                      setMenuOpen(false);
                      redirect("/patient_monitoring");
                    }}
                    className="text-xs md:text-sm hover:bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] px-2 py-1 hover:text-white hover:drop-shadow-3xl rounded-md duration-300 ease-in-out transform hover:-translate-y-[2px] cursor-pointer dark:hover:text-white dark:text-[#60dbd9]"
                  >
                    Patient Monitoring
                  </div>
                  <div
                    className="text-xs md:text-sm hover:bg-gradient-to-r from-[#6dbd49] to-[#3bc2d6] px-2 py-1 hover:text-white hover:drop-shadow-3xl rounded-md duration-300 ease-in-out transform hover:-translate-y-[2px] cursor-pointer dark:hover:text-white dark:text-[#60dbd9]"
                    onClick={() => {
                      setMenuOpen(false);
                      redirect("/rapid_screening_solution");
                    }}
                  >
                    Rapid Screening Solution
                  </div>
                </div>
              </li>

              <li
                onClick={() => {
                  setMenuOpen(false);
                  redirect("/about");
                }}
              >
                <span>About</span>
              </li>
              <li
                onClick={() => {
                  setMenuOpen(false);
                  redirect("/careers");
                }}
              >
                <span>Careers</span>
              </li>
              <li
                onClick={() => {
                  setMenuOpen(false);
                  redirect("/contact-us");
                }}
              >
                <span>
                  Contact <span className="hidden custom-md:inline ">us</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <ReqDemoBtn />
        {/* Sidebar component for mobile */}
        <MenuBtn isOpen={isOpen} setOpen={setOpen} />

        {/* Menu button */}
      </div>
      <div className="mob-nav z-20 ">
        <SlideBar isOpen={isOpen} setOpen={setOpen} />
      </div>
    </>
  );
}
