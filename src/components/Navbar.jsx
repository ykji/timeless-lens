"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
// import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
// import { signOut, useSession } from "next-auth/react";

export const links = [
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
  const [linkCloseButtonMobile, setLinkCloseButtonMobile] = useState(false);

  return (
    <div className="flex lg:justify-between justify-center items-center h-[10vh] -24 relative px-7">
      <Link
        href="/"
        className="font-bold text-2xl lg:flex-grow-0 flex-1 text-center"
      >
        TimelessLens
      </Link>
      <div className="lg:block hidden">
        <Links />
      </div>
      {linkCloseButtonMobile && (
        <div className="absolute top-0 z-12 h-screen w-screen bg-black flex justify-center items-center">
          <Links handleClick={() => setLinkCloseButtonMobile(false)} />
        </div>
      )}
      <div
        className="lg:hidden cursor-pointer z-13 top-[3vh] right-[3vw] absolute"
        onClick={() => setLinkCloseButtonMobile(!linkCloseButtonMobile)}
      >
        {linkCloseButtonMobile ? <FaTimes size={32} /> : <FaBars size={30} />}
      </div>
    </div>
  );
};

const Links = ({ handleClick = () => {} }) => {
  return (
    <div className="flex lg:flex-row flex-col gap-5 items-center">
      {/* <DarkModeToggle /> */}
      {links.map((link) => (
        <Link
          onClick={handleClick}
          key={link.id}
          href={link.url}
          className="lg:text-sm text-xl"
        >
          {link.title}
        </Link>
      ))}
      {/* {session.status === "authenticated" && ( */}
      <button
        className="px-4 py-2 bg-[#bdc253] rounded-md text-white mt-6 lg:mt-0"
        onClick={() => {}}
      >
        Logout
      </button>
      {/* )} */}
    </div>
  );
};

export default Navbar;
