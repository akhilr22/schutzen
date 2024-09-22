'use client';

import { MenuBtnProps } from '@/interface';
import React from 'react';


const MenuBtn: React.FC<MenuBtnProps> = ({ isOpen, setOpen }) => {
  return (
    <div className="sm:hidden">
      <button
        className="relative group"
        onClick={(e) => {
          e.preventDefault();
          setOpen(!isOpen);
        }}
      >
        <div className={`nav-btn-sub ${isOpen ? 'ring-4' : ''}`}>
          <div className={`nav-btn-inner ${isOpen ? '-rotate-[45deg]' : ''}`}>
            <div className={`line-1 ${isOpen ? '-rotate-90 h-[1px] -translate-y-[1px]' : ''}`} />
            <div className="line-2" />
            <div className={`line-3 ${isOpen ? '-rotate-90 h-[1px] translate-y-[1px]' : ''}`} />
          </div>
        </div>
      </button>
    </div>
  );
};

export default MenuBtn;
