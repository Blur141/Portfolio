"use client";

import { profile } from "@/app/data/portfolio";
import { useEffect, useRef, useState } from "react";

export default function Footer() {
  const [dotPos, setDotPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const rightPanelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const panel = rightPanelRef.current;
    if (!panel) return;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = panel.getBoundingClientRect();
      setDotPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };
    const handleEnter = () => setIsHovering(true);
    const handleLeave = () => setIsHovering(false);
    panel.addEventListener("mousemove", handleMouseMove);
    panel.addEventListener("mouseenter", handleEnter);
    panel.addEventListener("mouseleave", handleLeave);
    return () => {
      panel.removeEventListener("mousemove", handleMouseMove);
      panel.removeEventListener("mouseenter", handleEnter);
      panel.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <footer id="footer-contact" className="mt-20 sm:mt-44 border-t dark:border-zinc-800 border-zinc-100">
      <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto grid lg:grid-cols-2 grid-cols-1 min-h-[320px] sm:min-h-[380px]">

        {/* Left */}
        <div className="md:px-16 px-4 sm:px-6 py-12 sm:py-20 flex flex-col justify-between border-r dark:border-zinc-800 border-zinc-100">
          <div>
            <p className="text-xs tracking-widest uppercase dark:text-zinc-500 text-zinc-400 mb-5 sm:mb-6">
              Contact
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-semibold dark:text-white text-zinc-900 mb-3 sm:mb-4 leading-tight">
              Let&apos;s talk?
            </h2>
            <p className="dark:text-zinc-400 text-zinc-500 text-xs sm:text-sm 2xl:text-base mb-8 sm:mb-10">
              Always open to new projects and collaborations.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="inline-block text-sm sm:text-base 2xl:text-lg font-medium dark:text-white text-zinc-900 border-b-2 border-red-500 pb-1 hover:border-red-400 transition-colors duration-200 break-all"
            >
              {profile.email}
            </a>
          </div>

          <div className="flex items-center flex-wrap gap-x-5 sm:gap-x-6 gap-y-3 mt-12 sm:mt-16">
            <a
              href="https://www.linkedin.com/in/mohammedniyasnf/"
              target="_blank"
              rel="noreferrer noopener"
              className="text-xs tracking-widest uppercase dark:text-zinc-500 text-zinc-400 dark:hover:text-white hover:text-zinc-900 transition-colors duration-200"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Blur141"
              target="_blank"
              rel="noreferrer noopener"
              className="text-xs tracking-widest uppercase dark:text-zinc-500 text-zinc-400 dark:hover:text-white hover:text-zinc-900 transition-colors duration-200"
            >
              GitHub
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="text-xs tracking-widest uppercase dark:text-zinc-500 text-zinc-400 dark:hover:text-white hover:text-zinc-900 transition-colors duration-200"
            >
              Email
            </a>
          </div>
        </div>

        {/* Right — plain panel with cursor dot, desktop only */}
        <div
          ref={rightPanelRef}
          className="relative overflow-hidden hidden lg:block cursor-none"
        >
          <div
            className="absolute w-2 h-2 rounded-full bg-teal-400 pointer-events-none transition-opacity duration-300"
            style={{
              left: dotPos.x,
              top: dotPos.y,
              transform: "translate(-50%, -50%)",
              opacity: isHovering ? 1 : 0,
            }}
          />
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto md:px-16 px-4 sm:px-6 py-4 sm:py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-y-1 sm:gap-y-0 border-t dark:border-zinc-800 border-zinc-100">
        <small className="text-xs dark:text-zinc-500 text-zinc-400">
          © {new Date().getFullYear()} {profile.fullName}
        </small>
        <small className="text-xs dark:text-zinc-500 text-zinc-400 sm:text-right">
          {profile.headline}
        </small>
      </div>
    </footer>
  );
}
