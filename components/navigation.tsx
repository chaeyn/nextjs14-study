"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`flex items-center h-20 fixed w-full p-4 z-10 transition-colors duration-300 ${
        isScrolled ? "bg-black" : "bg-transparent"
      }`}
    >
      <Link href='/'>
        <img
          src='/logo.svg'
          alt=''
          className='h-8 w-auto hover:scale-105 transition-transform duration-100 ease-in-out'
        />
      </Link>
    </nav>
  );
}
