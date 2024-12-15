"use client";
import "./navbar.css";
import Image from "next/image";
import schutzenImg from "@/app/assets/schutzen-img.png";
// import schutzenLogo from "@/app/assets/schutzen-logo.png";
import MenuBtn from "@/components/buttons/MenuBtn";
import ReqDemoBtn from "@/components/buttons/ReqDemoBtn";
import SlideBar from "@/components/ui/slidemenu/SlideBar";
import { useState } from "react";
import { redirect } from 'next/navigation'

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className="navbar mt-8">
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
              <li  onClick={()=> redirect('/')}>
                <span>Home</span>
              </li>
              <li onClick={()=> redirect('/solutions')}>
                <span>Solutions</span>
              </li>
              <li onClick={()=> redirect('/about')}>
                <span>About</span>
              </li>
              <li onClick={()=> redirect('/careers')}>
                <span>Careers</span>
              </li>
              <li onClick={()=> redirect('/contact-us')} >
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
