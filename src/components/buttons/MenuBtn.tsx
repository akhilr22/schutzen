"use client";

import { MenuBtnProps } from "@/interface";
import React from "react";

const MenuBtn: React.FC<MenuBtnProps> = ({ isOpen, setOpen }) => {
  return (
    <div className="sm:hidden close">
      <button
        className="relative group close sidebar-toggle"
        onClick={(e) => {
          e.preventDefault();

          setOpen(!isOpen);
        }}
      >
        <div className={`nav-btn-sub ${isOpen ? "ring-4" : ""} close`}>
          <div className={`nav-btn-inner ${isOpen ? "-rotate-[45deg]" : ""} close`}>
            <div className={`line-1 ${isOpen ? "-rotate-90 h-[1px] -translate-y-[1px]" : ""} close`} />
            <div className="line-2" />
            <div className={`line-3 ${isOpen ? "-rotate-90 h-[1px] translate-y-[1px]" : ""} close`} />
          </div>
        </div>
      </button>
    </div>
  );
};

export default MenuBtn;
