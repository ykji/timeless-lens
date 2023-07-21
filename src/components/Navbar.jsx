"use client";

import Link from "next/link";
import React from "react";
// import styles from "./navbar.module.css";
// import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
// import { signOut, useSession } from "next-auth/react";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

const Navbar = () => {
  // const session = useSession();

  return (
    <div className="flex justify-between items-center h-24">
      <Link href="/" className="font-bold text-2xl">
        TimelessLens
      </Link>
      <div className="flex gap-5 items-center">
        {/* <DarkModeToggle /> */}
        {links.map((link) => (
          <Link key={link.id} href={link.url} className="">
            {link.title}
          </Link>
        ))}
        {/* {session.status === "authenticated" && ( */}
        <button
          className="px-4 py-2 bg-[#bdc253] rounded-md text-white"
          onClick={() => {}}
        >
          Logout
        </button>
        {/* )} */}
      </div>
    </div>
  );
};

export default Navbar;
