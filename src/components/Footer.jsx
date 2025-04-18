import React from "react";

//icons
import twitterIcon from "../assets/FooterImages/NanoEX_image_2.png";
import telegramIcon from "../assets/FooterImages/NanoEX_image_5.png";
import youtubeIcon from "../assets/FooterImages/NanoEX_image_4.png";
import redditIcon from "../assets/FooterImages/NanoEX_image_3.png";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-20 flex flex-col items-center gap-4">
      <div className="flex gap-6 text-2xl text-[#C1F7D5]">
        <img
          src={twitterIcon}
          alt="Twitter"
          className="hover:scale-110 transition-transform cursor-pointer w-8 h-8"
        />
        <img
          src={telegramIcon}
          alt="Telegram"
          className="hover:scale-110 transition-transform cursor-pointer w-8 h-8"
        />
        <img
          src={youtubeIcon}
          alt="YouTube"
          className="hover:scale-110 transition-transform cursor-pointer w-8 h-8"
        />
        <img
          src={redditIcon}
          alt="Reddit"
          className="hover:scale-110 transition-transform cursor-pointer w-8 h-8"
        />
      </div>

      <p className="text-sm text-white text-center">
        2025© <span className="text-[#C1F7D5] font-semibold">NanoEx RWA</span> |
        All Rights Reserved
      </p>

      <p className="text-sm text-center text-[#C1F7D5] max-w-md">
        Empowering the Future of Finance with RWA Tokenization & Blockchain
        Innovation
      </p>
    </footer>
  );
}
