"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";
import { RxHamburgerMenu } from "react-icons/rx";
import { HiOutlineX, HiUser, HiCode, HiAcademicCap, HiMail } from "react-icons/hi";

export default function MobileMenu() {
  const [navShow, setNavShow] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    setIsDark(document.documentElement.classList.contains("dark"));
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  const data = [
    { title: "About", href: "/about", icon: HiUser },
    { title: "Projects", href: "/#projects", icon: HiCode },
    { title: "Education", href: "/about#education", icon: HiAcademicCap },
    { title: "Contact", href: "/#footer-contact", icon: HiMail },
  ];

  const isActive = (href: string) => {
    if (href === "/about") return pathname === "/about";
    if (href === "/about#education") return pathname === "/about";
    return false;
  };

  const onToggleNav = () => {
    setNavShow((status) => {
      document.body.style.overflow = status ? "auto" : "hidden";
      return !status;
    });
  };

  const overlay = (
    <div
      style={{ backgroundColor: isDark ? "#18181b" : "#ffffff" }}
      className={`md:hidden fixed inset-0 z-[9999] transform duration-[600ms] ease-[cubic-bezier(0.7,0,0,1)] ${
        navShow ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between mt-6 px-6 sm:px-8">
        <Link href="/" onClick={onToggleNav}>
          <Image src="/Logo.png" alt="Logo" width={40} height={40} className="object-contain" />
        </Link>
        <button
          aria-label="Close Menu"
          onClick={onToggleNav}
          className="dark:bg-zinc-800 bg-zinc-100 border dark:border-zinc-700 border-zinc-200 rounded-full p-2"
        >
          <HiOutlineX className="text-xl" />
        </button>
      </div>

      {/* Nav links */}
      <nav className="flex flex-col mt-6">
        {data.map((link) => {
          const active = isActive(link.href);
          return (
            <Link
              key={link.title}
              href={link.href}
              onClick={onToggleNav}
              className={`flex items-center gap-x-3 font-incognito font-semibold text-xl p-6 border-b dark:border-zinc-800 border-zinc-100 group transition-colors duration-200 ${
                active
                  ? "dark:text-zinc-500 text-zinc-400 pointer-events-none"
                  : "dark:text-white text-zinc-900 dark:hover:text-primary-color hover:text-tertiary-color"
              }`}
            >
              <link.icon
                className={`text-xl flex-shrink-0 transition-colors duration-200 ${
                  active ? "dark:text-zinc-600 text-zinc-300" : "text-zinc-500 group-hover:dark:text-primary-color group-hover:text-tertiary-color"
                }`}
                aria-hidden="true"
              />
              {link.title}
              {active && (
                <span className="ml-auto text-xs font-mono dark:text-zinc-600 text-zinc-300 tracking-widest uppercase">
                  current
                </span>
              )}
            </Link>
          );
        })}
      </nav>
    </div>
  );

  return (
    <>
      <button
        aria-label="Toggle Menu"
        onClick={onToggleNav}
        className="md:hidden dark:bg-primary-bg bg-secondary-bg border dark:border-zinc-800 border-zinc-200 rounded-md p-2"
      >
        <RxHamburgerMenu className="text-xl" />
      </button>
      {mounted && createPortal(overlay, document.body)}
    </>
  );
}
