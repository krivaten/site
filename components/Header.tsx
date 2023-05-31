import Link from "next/link";
import { useState } from "react";
import { useTheme } from "next-themes";
import Logo from "./icons/Logo";
import MenuIcon from "./icons/MenuIcon";
import clsx from "clsx";
import SunIcon from "./icons/SunIcon";
import MoonIcon from "./icons/MoonIcon";

const Header: React.FC<{ title: string; links?: NavItem[] }> = ({ title, links }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <>
      <div className="flex flex-wrap md:flex-nowrap w-full justify-between md:px-6 max-w-8xl mx-auto">
        <Link
          href="/"
          className="text-xl sm:text-2xl font-extrabold focus:outline-none focus:shadow-outline flex items-center gap-2"
        >
          <Logo className="w-10 h-10" />
          {title}
        </Link>
        <nav
          id="nav"
          className={clsx(
            "flex-col w-full md:w-auto items-center flex-grow px-5 md:flex md:justify-end md:flex-row gap-4 order-3 md:order-2",
            isOpen ? "flex" : "hidden"
          )}
        >
          {links?.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="px-6 py-3 text-base transition duration-500 ease-in-out transform bg-transparent rounded-md lg:mt-0 text-trueGray-500 md:mt-0 md:ml-0 hover:text- primary-600 focus:text-primary-400 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="order-2 md:order-3">
          <button
            className="p-3 md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close navigation" : "Open navigation"}
            aria-controls="nav"
            aria-expanded={isOpen ? "true" : "false"}
          >
            <MenuIcon className="w-6 h-6" />
          </button>
          <button
            className="p-3 focus:outline-none"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          >
            {theme === "dark" ? (
              <MoonIcon className="w-6 h-6 text-slate-500" />
            ) : (
              <SunIcon className="w-6 h-6 text-yellow-500" />
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
