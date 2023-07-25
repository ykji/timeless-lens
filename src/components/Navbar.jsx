"use client";

import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";
import { FaTimes, FaBars } from "react-icons/fa";
import { ThemeContext } from "@/context/ThemeContext";
import { signOut, useSession } from "next-auth/react";
import React, { useContext, useEffect, useState } from "react";

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
  const { mode } = useContext(ThemeContext);
  const [linkCloseButtonMobile, setLinkCloseButtonMobile] = useState(false);

  useEffect(() => {
    if (linkCloseButtonMobile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [linkCloseButtonMobile]);

  return (
    <div className="flex lg:justify-between justify-center items-center h-[10vh] relative px-7 border-b lg:shadow-none shadow-md">
      <Link
        href="/"
        className="font-bold text-2xl lg:flex-grow-0 flex-1 text-center"
      >
        TimelessLens
      </Link>
      <div className="lg:flex items-center gap-5 hidden">
        <DarkModeToggle />
        <Links />
      </div>
      {linkCloseButtonMobile && (
        <div
          className={`fixed top-0 z-20 h-screen w-screen flex justify-center transition-colors duration-1000 items-center ${
            mode === "dark" ? "bg-black" : "bg-white"
          }`}
        >
          <Links handleClick={() => setLinkCloseButtonMobile(false)} />
        </div>
      )}
      <div
        className="lg:hidden cursor-pointer z-30 top-[3vh] right-[3vw] fixed"
        onClick={() => setLinkCloseButtonMobile(!linkCloseButtonMobile)}
      >
        {linkCloseButtonMobile ? (
          <div className="flex items-center gap-2">
            <DarkModeToggle />
            <FaTimes size={32} />
          </div>
        ) : (
          <FaBars size={30} />
        )}
      </div>
    </div>
  );
};

const Links = ({ handleClick = () => {} }) => {
  const session = useSession();

  return (
    <div className="flex lg:flex-row flex-col gap-5 items-center">
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
      {session.status === "authenticated" && (
        <button
          className="px-4 py-2 bg-[#bdc253] rounded-md text-white mt-6 lg:mt-0"
          onClick={signOut}
        >
          Logout
        </button>
      )}
    </div>
  );
};

export default Navbar;
