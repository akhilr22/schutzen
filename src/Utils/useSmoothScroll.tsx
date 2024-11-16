'use client'
/* eslint-disable @typescript-eslint/no-unused-vars */

import { useEffect } from "react";

const useSmoothScroll = () => {
  useEffect(() => {
    let speed = 0;
    let lastUpdateTime = 0;

    // Handle the wheel event to adjust speed
    const handleWheel = (ev: WheelEvent) => {
      speed += ev.deltaY * 0.15; // Adjust the scrolling speed factor
      ev.preventDefault(); // Prevent default scrolling behavior
    };

    // Update function for smooth scrolling
    const update = (deltaTime: number) => {
      const easingFactor =  0.92; // Smoother easing factor
      speed *= easingFactor; // Gradually slow down speed
    };

    // Render function to scroll
    const render = () => {
      window.scrollBy(0, speed); // Scroll the window by speed value
    };

    // Main loop for smooth scrolling
    const gameLoop = (currentTime: number) => {
      const deltaTime = currentTime - lastUpdateTime;
      update(deltaTime);
      render();
      lastUpdateTime = currentTime;
      requestAnimationFrame(gameLoop);
    };

    // Attach the event listener and start the loop
    window.addEventListener("wheel", handleWheel, { passive: false });
    requestAnimationFrame(gameLoop);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);
};

const SmoothScroll = () => {
  // Call the custom hook in this component
  useSmoothScroll();

  return null; // No UI for this component, just smooth scrolling behavior
};

export default SmoothScroll;
