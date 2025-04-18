import React from "react";

import image1 from "../assets/NRWATokenImages/NanoEX_Rectang.png";
import bgImg from "../assets/NRWATokenImages/bg_img1.png";

import Button from "./Button";

export default function NRWAToken() {
  return (
    <div
      className="w-full min-h-screen bg-cover bg-black text-white relative overflow-hidden"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundPosition: "center top -100px",
      }}
    >
      <div className="container mx-auto px-4 pt-10 md:pt-30 flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2 z-10 order-2 md:order-1">
          <div className="">
            <h1 className="font-bold text-5xl mb-2">
              <span className="text-blue-300">n</span>
              <span className="text-teal-300">RWA</span> Token
            </h1>
            <div className="max-w-[24rem]">
              <h2 className="text-2xl mb-4 font-semibold ">
                Powering the Future of Real-World Asset Tokenization
              </h2>
              <p className="text-[11px] mb-6">
                The NanoEx RWA ecosystem, powered by nRWA Token, revolutionizes
                how real-world assets are tokenized, traded, and managed on the
                blockchain. Through a transparent tokenization framework, we
                enable fractional ownership, enhanced liquidity, and secure
                investments in traditionally illiquid assets like real estate,
                fine art, and infrastructure. Join the Future of Asset
                Tokenization Today!
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4 mt-4 w-full">
              <Button textContent={"Whitepaper"} type="1" />
              <Button textContent={"How to  buy"} type="2" />
            </div>
          </div>
        </div>

        <div className="w-full md:w-3/5 relative h-64 md:h-80 order-1 ">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="rounded-full overflow-hidden border-4 sm:border-6 border-teal-300/50 p-1 sm:p-2 bg-black/40 max-w-[60%] sm:max-w-[70%]">
              <img
                src={image1}
                alt="Blockchain visualization"
                className="object-contain w-full h-full max-h-50 md:max-h-72"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
