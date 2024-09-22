"use client";
import { MenuBtnProps } from '@/interface';
import schutzenImg from "@/app/assets/schutzen-img.png";
import Image from 'next/image';


const SlideBar:React.FC<MenuBtnProps> = ({isOpen})=>{

  return (
    <>
      <div className="sm:hidden bg-gray-100">
        {/* Sidebar Toggle Button */}

        {/* Sidebar  -translate-x-full*/}
        <div
          className={`absolute bg-black  text-white w-56 min-h-screen overflow-y-auto transition-transform transform ${isOpen ? '':'-translate-x-full '}  ease-in-out duration-300`}
          id="sidebar"
        >
          {/* Sidebar Content */}
          <div className="p-4">
         
            <Image
            className="nav-logo"
            src={schutzenImg}
            alt="Schutzen Logo"
            width={150}
            height={50}
            priority
          />
            <ul className="mt-4">
              <li className="mb-2">
                <a href="#" className="block hover:text-indigo-400">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="block hover:text-indigo-400">
                Solutions
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="block hover:text-indigo-400">
                About
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="block hover:text-indigo-400">
                Careers
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="block hover:text-indigo-400">
                Contact us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default SlideBar