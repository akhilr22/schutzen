"use client";
import { MenuBtnProps } from "@/interface";
import schutzenImg from "@/app/assets/schutzen-img.png";
import Image from "next/image";
import { redirect } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const SlideBar: React.FC<MenuBtnProps> = ({ isOpen, setOpen }) => {
  const sidebarRef = useRef<HTMLDivElement>(null);

  // Handle outside click
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as Element;

      // Prevent closing if clicking on the toggle button
      if (target.closest(".sidebar-toggle")) {
        return;
      }

      // Close sidebar if clicking outside of it
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, setOpen]);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  return (
    <>
      <div className="sm:hidden bg-gray-100">
        {/* Sidebar Toggle Button */}

        {/* Sidebar  -translate-x-full*/}
        <div
          ref={sidebarRef}
          className={`absolute bg-zinc-900 text-white w-56 min-h-screen overflow-y-auto transition-transform transform ${
            isOpen ? "" : "-translate-x-full"
          } ease-in-out duration-300`}
          id="sidebar"
        >
          {/* Sidebar Content */}
          <div className="p-4">
            <Image className="nav-logo" src={schutzenImg} alt="Schutzen Logo" width={150} height={50} priority />
            <ul className="mt-4">
              <li
                className="mb-2"
                onClick={() => {
                  setOpen(false);
                  redirect("/");
                }}
              >
                <a className="block hover:text-indigo-400">Home</a>
              </li>
              <li className="mb-2 relative">
                <a className="block cursor-pointer hover:text-indigo-400" >
                  Solutions
                </a>

                {/* Submenu */}
                <ul
                  className={`${
                    submenuOpen ? "block" : "hidden"
                  } mt-2 space-y-2 bg-gray-800 p-2 rounded-md shadow-lg`}
                >
                  <li
                    className="hover:text-indigo-500 cursor-pointer text-sm"
                    onClick={() => {
                      redirect("/rapid_screening_solution");
                      setSubmenuOpen(!submenuOpen)
                    }}
                  >
                    Rapid Screening Solution
                  </li>
                  <li
                    className="hover:text-indigo-500 cursor-pointer text-sm"
                    onClick={() => {
                      redirect("/patient_monitoring");
                      setSubmenuOpen(!submenuOpen)
                    }}
                  >
                    Patient Monitoring
                  </li>
                </ul>
              </li>
              <li
                className="mb-2"
                onClick={() => {
                  setOpen(false);
                  redirect("/about");
                }}
              >
                <a className="block hover:text-indigo-400">About</a>
              </li>
              <li
                className="mb-2"
                onClick={() => {
                  setOpen(false);
                  redirect("/careers");
                }}
              >
                <a className="block hover:text-indigo-400">Careers</a>
              </li>
              <li
                className="mb-2"
                onClick={() => {
                  setOpen(false);
                  redirect("/contact-us");
                }}
              >
                <a className="block hover:text-indigo-400">Contact us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SlideBar;
