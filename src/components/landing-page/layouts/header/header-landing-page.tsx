"use client";
import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import clsx from "clsx";

export const HeaderLandingPage = () => {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const handleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-white px-8 lg:px-16 w-full justify-between items-center mx-auto hidden lg:flex">
        <div className="w-40 relative h-20">
          <Image
            src={"/logos/logo-dark.svg"}
            alt={"Logo Telinga Kecilku"}
            fill
            className="select-none"
          />
        </div>
        <nav className="flex gap-8 justify-center items-center">
          <a
            href="#"
            className="text-gray-400 text-sm"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
          >
            Beranda
          </a>
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
        </nav>
        <Button onClick={() => router.push("/login")}>Masuk</Button>
      </header>

      <header className="absolute top-0 z-50 px-8 w-full flex justify-between items-center mx-auto lg:hidden">
        <div className="flex gap-4 items-center">
          <div className="w-8 relative h-8">
            <Image
              src={"/components/hamburger-menu.svg"}
              alt={"Hamburger Menu"}
              fill
              className="select-none cursor-pointer"
              onClick={handleDrawer}
            />
          </div>

          <div className="w-32 relative h-16">
            <Image
              src={"/logos/logo-light.svg"}
              alt={"Logo Telinga Kecilku"}
              fill
              className="select-none"
            />
          </div>

          <div
            className={clsx(
              "flex flex-col fixed top-0 left-0 h-full w-full bg-transparent transition-transform duration-300 z-10 motion-reduce:transition-none",
              { ["-translate-x-full"]: !open },
            )}
          >
            <nav className="w-1/2 h-full flex flex-col gap-6 bg-white text-left p-8 drop-shadow-2xl">
              <a
                href="#"
                className="text-gray-400 text-sm"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  handleDrawer();
                }}
              >
                Beranda
              </a>
              <a
                href="#tentang"
                className="text-gray-400 text-sm"
                onClick={handleDrawer}
              >
                Tentang
              </a>
              <a
                href="#pengguna"
                className="text-gray-400 text-sm"
                onClick={handleDrawer}
              >
                Pengguna
              </a>
              <a
                href="#video-penggunaan"
                className="text-gray-400 text-sm"
                onClick={handleDrawer}
              >
                Video Penggunaan
              </a>
              <a
                href="#tim-peneliti"
                className="text-gray-400 text-sm"
                onClick={handleDrawer}
              >
                Tim Peneliti
              </a>
              <Button className="mt-auto" onClick={handleDrawer}>
                Tutup
              </Button>
            </nav>
          </div>
        </div>

        <Button onClick={() => router.push("/login")}>Masuk</Button>
      </header>
    </>
  );
};
