"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { HiOutlineX, HiUser, HiCode, HiAcademicCap, HiMail } from "react-icons/hi";

export default function MobileMenu() {
  const [navShow, setNavShow] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsDark(document.documentElement.classList.contains("dark"));
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  const data = [
    { title: "About", href: "/about", icon: HiUser },
    { title: "Projects", href: "/#projects", icon: HiCode },
    { title: "Education", href: "/about#education", icon: HiAcademicCap },
    { title: "Contact", href: "#footer-contact", icon: HiMail },
  ];

  const onToggleNav = () => {
    setNavShow((status) => {
      document.body.style.overflow = status ? "auto" : "hidden";
      return !status;
    });
  };

  // The overlay is portaled directly into <body> so it is never
  // trapped inside the Navbar's z-30 stacking context.
  const overlay = (
    <div
      style={{ backgroundColor: isDark ? "#18181b" : "#ffffff" }}
      className={`md:hidden fixed inset-0 z-[9999] transform duration-[600ms] ease-[cubic-bezier(0.7,0,0,1)] ${
        navShow ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Header row */}
      <div className="flex items-center justify-between mt-6 px-6 sm:px-8">
        <Link href="/" onClick={onToggleNav}>
          <Image
            src="/Logo.png"
            alt="Logo"
            width={40}
            height={40}
            className="object-contain"
          />
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
        {data.map((link) => (
          <Link
            key={link.title}
            href={link.href}
            onClick={onToggleNav}
            className="flex items-center gap-x-3 font-incognito font-semibold text-xl p-6 group border-b dark:border-zinc-800 border-zinc-100"
          >
            <link.icon
              className="text-zinc-500 group-hover:dark:text-white group-hover:text-zinc-800 duration-300 text-xl flex-shrink-0"
              aria-hidden="true"
            />
            <span className="dark:text-white text-zinc-900">{link.title}</span>
          </Link>
        ))}
      </nav>
    </div>
  );

  return (
    <>
      {/* Hamburger button — stays inside Navbar */}
      <button
        aria-label="Toggle Menu"
        onClick={onToggleNav}
        className="md:hidden dark:bg-primary-bg bg-secondary-bg border dark:border-zinc-800 border-zinc-200 rounded-md p-2"
      >
        <RxHamburgerMenu className="text-xl" />
      </button>

      {/* Portal the overlay to <body> so it escapes Navbar's stacking context */}
      {mounted && createPortal(overlay, document.body)}
    </>
  );
}
