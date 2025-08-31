"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const path = usePathname();
  const navItems = [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "/about-us",
      label: "About Us",
    },
  ];
  return (
    <nav className='flex justify-center items-center h-12 bg-zinc-700 fixed w-1/3 my-auto top-[20px] left-1/2 rounded-2xl px-8 py-0 z-10 -translate-x-1/2'>
      <ul className='flex justify-center items-center gap-12'>
        {navItems.map((item) => (
          <li
            key={item.href}
            className='list-none transition-transform duration-100 ease-in-out hover:scale-105'
          >
            <Link href={item.href}>{item.label}</Link>
            {path === item.href && "🔥"}
          </li>
        ))}
      </ul>
    </nav>
  );
}
