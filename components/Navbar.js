import { useContext } from "react";
import { GlobalContext } from "@utils/GlobalContext";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
// Import react scroll
import { Link as LinkScroll } from "react-scroll";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useContext(GlobalContext);
  const [activeLink, setActiveLink] = useState(null);

  return (
    <nav className="z-50 gap-3 fixed top-0 left-0 right-0 backdrop-blur-sm ">
      <div className="hidden sm:flex items-center justify-between max-w-xl w-full mx-auto pt-1">
        <LinkScroll
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          duration={1000}
          onSetActive={() => {
            setActiveLink("home");
          }}
          className={
            "pb-2 pt-1 cursor-pointer animation-hover inline-block relative" +
            (activeLink === "home"
              ? " text-orange-500 animation-active "
              : " text-neutral-200 hover:text-orange-500 ")
          }
        >
          Home
        </LinkScroll>
        <LinkScroll
          activeClass="active"
          to="lokasi"
          spy={true}
          smooth={true}
          duration={1000}
          onSetActive={() => {
            setActiveLink("lokasi");
          }}
          className={
            "pb-2 pt-1 cursor-pointer animation-hover inline-block relative" +
            (activeLink === "lokasi"
              ? " text-orange-500 animation-active "
              : " text-neutral-200 hover:text-orange-500 ")
          }
        >
          Lokasi
        </LinkScroll>
        <LinkScroll
          activeClass="active"
          to="galeri"
          spy={true}
          smooth={true}
          duration={1000}
          onSetActive={() => {
            setActiveLink("galeri");
          }}
          className={
            "pb-2 pt-1 cursor-pointer animation-hover inline-block relative" +
            (activeLink === "galeri"
              ? " text-orange-500 animation-active "
              : " text-neutral-200 hover:text-orange-500 ")
          }
        >
          Galeri
        </LinkScroll>
        {/* <div className="pt-1">

          {darkMode ?
            <button aria-label="Change Theme" onClick={() => setDarkMode(!darkMode)}><SunIcon className="h-5 w-5 text-gray-700 dark:text-gray-200" /></button>
            :
            <button aria-label="Change Theme" onClick={() => setDarkMode(!darkMode)}><MoonIcon className="h-5 w-5 text-gray-700 dark:text-gray-200" /></button>
          }
        </div> */}
      </div>
    </nav>
  )
}