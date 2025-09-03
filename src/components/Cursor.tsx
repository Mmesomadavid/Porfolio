"use client";
import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const Cursor = () => {
  // motion values for smooth animation
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  // spring animation for smooth delay
  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX - 15); // offset half width (30px / 2)
      cursorY.set(e.clientY - 15);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [cursorX, cursorY]);

  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "30px",
        height: "30px",
        border: "3px solid black", // black thick border
        borderRadius: "50%",
        pointerEvents: "none",
        zIndex: 9999,
        x: smoothX,
        y: smoothY,
      }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    />
  );
};

export default Cursor;
