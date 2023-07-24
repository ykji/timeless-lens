"use client";

import React, { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

const DarkModeToggle = () => {
  const { toggle, mode } = useContext(ThemeContext);

  return (
    <div
      className="w-12 h-7 border border-[#bdc253] rounded-2xl flex justify-between items-center px-1 cursor-pointer relative"
      onClick={toggle}
    >
      <div className="text-xs">🌙</div>
      <div className="text-sm">🔆</div>
      <div
        className="rounded-full w-4 h-4 bg-[#bdc253] absolute"
        style={mode === "light" ? { left: "4px" } : { right: "4px" }}
      />
    </div>
  );
};

export default DarkModeToggle;
