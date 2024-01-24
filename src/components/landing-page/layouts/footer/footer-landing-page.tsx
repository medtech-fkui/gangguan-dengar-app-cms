import Image from "next/image";
import React from "react";

export const FooterLandingPage = () => {
  return (
    <footer className="bg-[#3E3E4A] w-full p-6 px-8 md:px-16">
      <div className="max-w-7xl w-full flex flex-wrap-reverse gap-4 items-center justify-center md:justify-between mx-auto">
        <div className="w-32 relative h-16">
          <Image
            src={"/logos/logo-light.svg"}
            alt={"Logo Telinga Kecilku"}
            fill
            className="select-none"
          />
        </div>
        <div className="flex flex-wrap gap-8 justify-center">
          <a href="#tentang" className="text-gray-400 text-sm">
            Tentang
          </a>
          <a href="#pengguna" className="text-gray-400 text-sm">
            Pengguna
          </a>
          <a href="#video-penggunaan" className="text-gray-400 text-sm">
            Video Penggunaan
          </a>
          <a href="#tim-peneliti" className="text-gray-400 text-sm">
            Tim Peneliti
          </a>
        </div>
      </div>
    </footer>
  );
};
