"use client";
import "./navbar.css";
import Image from "next/image";
import schutzenImg from "@/app/assets/schutzen-img.png";
// import schutzenLogo from "@/app/assets/schutzen-logo.png";
import MenuBtn from "@/components/buttons/MenuBtn";
import ReqDemoBtn from "@/components/buttons/ReqDemoBtn";
import SlideBar from "@/components/ui/slidemenu/SlideBar";
import { useState } from "react";

export default function Navbar() {
  const [isOpen , setOpen] = useState(false)
  return (
    <>
      <div className="navbar">
        {/* Logo on the left */}
        <div className="nav-icon">
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
              <li>
                <span>Home</span>
              </li>
              <li>
                <span>Solutions</span>
              </li>
              <li>
                <span>About</span>
              </li>
              <li >
                <span>Careers</span>
              </li>
              <li >
                <span>Contact us</span>
              </li>
            </ul>
          </div>
        </div>

        <ReqDemoBtn />
        {/* Sidebar component for mobile */}
        <MenuBtn isOpen={isOpen} setOpen={setOpen} />

        {/* Menu button */}
      </div>
      <div className="mob-nav">
        <SlideBar isOpen={isOpen} setOpen={setOpen} />
      </div>
    </>
  );
}
