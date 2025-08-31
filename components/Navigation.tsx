"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-30 px-24 py-8 flex justify-between items-center transition-colors duration-300 ${
        isScrolled ? "bg-black" : "bg-transparent"
      }`}
    >
      <Link href='/'>
        <img src='/logo.svg' alt='logo' className='w-36 h-auto' />
      </Link>
      <Link href='https://github.com/chaeyn'>
        <img src='/github-mark-white.png' alt='logo' className='w-8 h-auto' />
      </Link>
    </nav>
  );
}
