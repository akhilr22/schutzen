"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AOSInit = () => {
  useEffect(() => {
    AOS.init({
      duration: 500, // Adjust the duration if needed
      // Whether animation should happen only once
    });
  }, []);
  
  return null;
};

export default AOSInit;
