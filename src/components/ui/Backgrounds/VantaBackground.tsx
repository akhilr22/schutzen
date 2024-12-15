/* eslint-disable @next/next/no-before-interactive-script-outside-document */
"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";

const VantaBackground = () => {
  const vantaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const setVantaEffect = () => {
      if (window?.VANTA && vantaRef.current) {
        window?.VANTA.NET?.({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0x6fff3f,
          backgroundColor: 0x0,
          showDots: false
        });
      }
    };

    setVantaEffect();

    return () => {
      // Clean up the Vanta effect when the component unmounts
      if (window.VANTA && window.VANTA.current) {
        window.VANTA.current.destroy();
      }
    };
  }, []);

  return (
    <>
      {/* Dynamically Load the Required Scripts */}
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.birds.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js"
          strategy="beforeInteractive"
      />
      
      <div
        ref={vantaRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          zIndex: -1,
        }}
      />
    </>
  );
};

export default VantaBackground;
