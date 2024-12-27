"use client";
import Image from "next/image";
import React, { useState } from "react";
import schutzenImg from "@/app/assets/schutzen-img.png";
import ReqDemoBtn from "@/components/buttons/ReqDemoBtn";
import "@/components/_partials/footer/footer.css";
import facebookImg from "@/app/assets/facebook.png";
import twitter from "@/app/assets/twitter.png";
import youtube from "@/app/assets/youtube.png";
import insta from "@/app/assets/instagram.png";
import footerBg from "@/app/assets/footer-bg.png";
import Link from "next/link";
export const Footer = () => {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  return (
    <div className="mt-28 md:mt-32">
      <div
        className="bg-cover bg-center "
        style={{
          backgroundImage: `url(${footerBg.src})`,

          backgroundRepeat: "no-repeat",
          width: "100%",
        }}
      >
        <div className="nav-icon flex w-screen  sm:hidden ">
          <Image className="nav-logo mx-auto " src={schutzenImg} alt="Schutzen Logo" width={160} height={80} priority />
        </div>
        <div
          className="stripe_line mx-auto rounded-full my-5 scroll_animate overflow-x-hidden h-[2px] w-2/3 sm:hidden"
          data-aos="fade-right"
        ></div>
        <div className="footer-bottom flex justify-between">
          {/* Logo on the left */}
          <div className="">
            <Image
              className=" hidden sm:block"
              src={schutzenImg}
              alt="Schutzen Logo"
              width={160}
              height={80}
              priority
            />
          </div>

          {/* Centered nav items */}

          <div className="footer-nav-list mx-auto">
            <div className="">
              <ul className=" sm:flex sm:space-x-0 md:space-x-3 custom-md:space-x-5 lg:space-x-10 py-[5px] px-2 justify-center border-2  text-[#56c1af] dark:text-[#56c1af] border-transparent rounded-[28px] text-center ">
                <li>
                  <Link href="/">
                    {" "}
                    <span>Home</span>
                  </Link>
                </li>
                <li className="relative group z-40">
                  <span
                    className="cursor-pointer block hover:text-indigo-400"
                    onClick={() => setSubmenuOpen(!submenuOpen)}
                  >
                    Solutions
                  </span>
                  {/* Submenu */}
                  <ul
                    className={`absolute w-full md:w-56 ${
                      submenuOpen ? "block" : "hidden"
                    } absolute w-48 left-0 mt-1 space-y-2 bg-gray-100 dark:bg-gray-800 p-2 rounded-md shadow-lg  group-hover:block`}
                 >
                    <li className="hover:text-indigo-500 cursor-pointer">
                      <Link href="/patient_monitoring">Patient Monitoring</Link>
                    </li>
                    <li className="hover:text-indigo-500 cursor-pointer">
                      <Link href="/rapid_screening_solution">Rapid Screening Solution</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href={"/about"}>
                    {" "}
                    <span>About</span>{" "}
                  </Link>
                </li>
                <li>
                  <Link href={"/careers"}>
                    {" "}
                    <span>Careers</span>
                  </Link>
                </li>
                <li>
                  <Link href="/contact-us">
                    <span>
                      Contact <span className="hidden custom-md:inline ">us</span>
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="hidden sm:block">
            <ReqDemoBtn />
          </div>
        </div>
        <div
          className="stripe_line mx-auto rounded-full my-5 scroll_animate overflow-x-hidden h-[2px] w-2/3"
          data-aos="fade-right"
        ></div>

        <div className="flex justify-center gap-5 h-20">
          <Image
            src={facebookImg}
            alt="Schutzen Logo"
            width={280}
            height={80}
            priority
            className="w-3 h-4 sm:w-6 sm:h-8"
          />
          <Image
            src={twitter}
            alt="Schutzen Logo"
            width={280}
            height={80}
            priority
            className="w-3 h-4 pt-1 sm:w-6 sm:h-8"
          />
          <Image
            src={youtube}
            alt="Schutzen Logo"
            width={280}
            height={80}
            priority
            className="w-3 h-5 pt-1 sm:w-6 sm:h-8 sm:pt-2"
          />
          <Image
            src={insta}
            alt="Schutzen Logo"
            width={280}
            height={80}
            priority
            className="w-3 h-4 pt-1 sm:w-6 sm:h-8  sm:pt-2"
          />
        </div>
      </div>
    </div>
  );
};
