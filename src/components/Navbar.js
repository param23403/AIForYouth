// components/Navbar.js
"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const pathname = usePathname();

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  const linkClasses = (path) =>
    `hover:text-blue-700 ${
      pathname === path ? "bg-blue-900 text-white rounded-md px-2 py-1" : ""
    }`;

  return (
    <nav className="bg-gray-100 text-blue-900 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">
          <Link href="/">
            <Image
              src="/assets/ai4youthlogo.png"
              alt="AIForYouth Logo"
              width={150}
              height={50}
              className="h-auto w-auto max-w-full max-h-full"
            />
          </Link>
        </div>
        <div className="hidden md:flex space-x-4 font-bold">
          <Link href="/contact" className={linkClasses("/contact")}>
            Contact
          </Link>
          <Link href="/people" className={linkClasses("/people")}>
            People
          </Link>
          <Link href="/news" className={linkClasses("/news")}>
            News
          </Link>
          <Link href="/application" className={linkClasses("/application")}>
            Application
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleNav} className="focus:outline-none">
            {navOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      {navOpen && (
        <div className="md:hidden bg-blue-800 p-4 space-y-2">
          <Link href="/contact" className={linkClasses("/contact")}>
            Contact
          </Link>
          <Link href="/people" className={linkClasses("/people")}>
            People
          </Link>
          <Link href="/news" className={linkClasses("/news")}>
            News
          </Link>
          <Link href="/application" className={linkClasses("/application")}>
            Application
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
