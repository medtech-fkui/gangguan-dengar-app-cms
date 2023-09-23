"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavbarMenuItems = () => {
  const pathName = usePathname();

  return (
    <section
      id="menu-items"
      className="flex flex-row items-center gap-x-4 text-sm text-slate-500"
    >
      <Link
        href="/users"
        className={`${
          pathName === "/users" && "text-primary font-semibold"
        } hover:text-slate-600 cursor-pointer`}
      >
        Users
      </Link>
      <Link
        href="/childs"
        className={`${
          pathName === "/childs" && "text-primary font-semibold"
        } hover:text-slate-600 cursor-pointer`}
      >
        Childs
      </Link>
      <Link
        href="/detections"
        className={`${
          pathName === "/detections" && "text-primary font-semibold"
        } hover:text-slate-600 cursor-pointer`}
      >
        Detections
      </Link>
    </section>
  );
};
