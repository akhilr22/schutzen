'use client'
/* eslint-disable @typescript-eslint/no-unused-vars */

import { useEffect } from "react";

const useSmoothScroll = () => {
  useEffect(() => {
    let speed = 0;
    let lastUpdateTime = performance.now();
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    let lastTouchY: number | null = null;

    const handleScroll = (deltaY: number) => {
      speed += deltaY * 0.1; // Adjust the scrolling speed factor
    };

    const handleWheel = (ev: WheelEvent) => {
      handleScroll(ev.deltaY);
      ev.preventDefault();
    };

    const handleTouchMove = (ev: TouchEvent) => {
      if (ev.touches.length > 1) return;

      const currentTouchY = ev.touches[0].clientY;
      const deltaY = lastTouchY !== null ? currentTouchY - lastTouchY : 0;
      handleScroll(-deltaY);
      lastTouchY = currentTouchY;
    };

    const update = (deltaTime: number) => {
      const easingFactor = 0.85; // More gradual easing
      speed *= easingFactor;
    };

    const render = () => {
      const currentScroll = window.scrollY;
      window.scrollTo({
        top: currentScroll + speed,
        behavior: 'auto'
      });
    };

    const gameLoop = (currentTime: number) => {
      const deltaTime = currentTime - lastUpdateTime;
      update(deltaTime);
      render();
      lastUpdateTime = currentTime;
      requestAnimationFrame(gameLoop);
    };

    if (isTouchDevice) {
      window.addEventListener("touchmove", handleTouchMove, { passive: false });
    } else {
      window.addEventListener("wheel", handleWheel, { passive: false });
    }

    requestAnimationFrame(gameLoop);

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
  useSmoothScroll();
  return null;
};

export default SmoothScroll;
