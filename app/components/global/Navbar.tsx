import Link from "next/link";
import Image from "next/image";
import Theme from "./Theme";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const links = [
    { title: "About", href: "/about" },
    { title: "Projects", href: "/#projects" },
    { title: "Contact", href: "#footer-contact" },
  ];

  return (
    <header className="text-sm py-4 md:py-6 md:px-16 px-4 border-b dark:border-zinc-800 border-zinc-200 z-30 md:mb-28 mb-10 sticky top-0 dark:bg-zinc-900/80 bg-white/80 backdrop-blur-md">
      <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image src="/Logo.png" alt="Logo" width={36} height={36} className="object-contain md:w-10 md:h-10" />
        </Link>

        <nav className="md:block hidden">
          <ul className="flex items-center gap-x-6 lg:gap-x-8 2xl:gap-x-12">
            {links.map((link, id) => (
              <li key={id}>
                <Link
                  href={link.href}
                  className="font-incognito dark:text-white text-zinc-600 dark:hover:text-primary-color hover:text-zinc-900 duration-300 text-sm lg:text-base 2xl:text-lg"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-x-3">
          <Theme />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
