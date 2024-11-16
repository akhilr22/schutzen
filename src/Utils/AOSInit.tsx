"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AOSInit = () => {
  useEffect(() => {
    // Initialize AOS with adjusted options for iOS
    AOS.init({
      duration: 500, // Adjust duration as needed
      offset: 50,
      // once: true, // Ensures animations happen only once for better performance
      useClassNames: true, // Adds class names rather than inline styles
    });

    // Refresh AOS on each scroll event for iOS compatibility
    const handleScroll = () => AOS.refresh();
    window.addEventListener("scroll", handleScroll);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return null;
};

export default AOSInit;
