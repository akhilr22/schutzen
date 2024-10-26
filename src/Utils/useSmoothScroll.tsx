'use client'
/* eslint-disable @typescript-eslint/no-unused-vars */

import { useEffect } from "react";

const useSmoothScroll = () => {
  useEffect(() => {
    let speed = 0;
    let lastUpdateTime = 0;
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    let lastTouchY: number | null = null;

    // Adjust scrolling speed based on wheel or touch movement
    const handleScroll = (deltaY: number) => {
      speed += deltaY * 0.15; // Adjust the scrolling speed factor
    };

    // Handle the wheel event (desktop)
    const handleWheel = (ev: WheelEvent) => {
      handleScroll(ev.deltaY);
      ev.preventDefault(); // Prevent default scrolling behavior
    };

    // Handle touchmove event (mobile)
    const handleTouchMove = (ev: TouchEvent) => {
      if (ev.touches.length > 1) return; // Ignore multi-touch

      const currentTouchY = ev.touches[0].clientY;
      const deltaY = lastTouchY !== null ? currentTouchY - lastTouchY : 0;
      handleScroll(-deltaY); // Invert deltaY for smooth upward scrolling
      lastTouchY = currentTouchY;
    };

    // Update function for smooth scrolling
    const update = (deltaTime: number) => {
      const easingFactor = 0.80; // Smoother easing factor
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

    // Attach the event listeners
    if (isTouchDevice) {
      window.addEventListener("touchmove", handleTouchMove, { passive: false });
    } else {
      window.addEventListener("wheel", handleWheel, { passive: false });
    }
    
    requestAnimationFrame(gameLoop);

    // Cleanup event listeners on unmount
    return () => {
      if (isTouchDevice) {
        window.removeEventListener("touchmove", handleTouchMove);
      } else {
        window.removeEventListener("wheel", handleWheel);
      }
    };
  }, []);
};

const SmoothScroll: React.FC = () => {
  // Call the custom hook in this component
  useSmoothScroll();

  return null; // No UI for this component, just smooth scrolling behavior
};

export default SmoothScroll;
