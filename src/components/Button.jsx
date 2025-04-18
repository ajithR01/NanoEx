import React from "react";

export default function Button({ textContent, type = "1" }) {
  const isBorderOnly = type == 2;
  return (
    <>
      {/* desktop */}
      <button
        className={`hidden md:flex ${
          isBorderOnly
            ? "border-4 !border-teal-300/50 text-white bg-transparent"
            : "bg-gradient-to-r from-yellow-400 to-green-400 text-black"
        } font-bold !text-[10px] rounded-full items-center gap-2 hover:brightness-110 transition px-4 py-2`}
      >
        {textContent}
      </button>

      {/* mobile */}
      <button
        className={`md:hidden flex justify-center font-bold !text-[18px] rounded-full items-center gap-2 hover:brightness-110 transition w-[12rem] h-[3rem] ${
          isBorderOnly
            ? "border-4 !border-teal-300/50 text-white bg-transparent"
            : "bg-gradient-to-r from-yellow-400 to-green-400 text-black"
        }`}
      >
        {textContent}
      </button>
    </>
  );
}
