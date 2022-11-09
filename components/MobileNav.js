import { Link as LinkScroll } from "react-scroll";
import { useState } from "react";
import { MapPinIcon, PhotoIcon, SparklesIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

export default function MobileNav() {
  const [activeLink, setActiveLink] = useState(null);

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 shadow-t">
      <div className="backdrop-blur-md py-1 mx-2 px-4 sm:px-6 flex sm:max-w-md sm:mx-auto justify-between items-center rounded-t-lg">
        
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}>
          <LinkScroll
            activeClass="active"
            to="home"
            href="/#home"
            spy={true}
            smooth={true}
            duration={1000}
            onSetActive={() => {
              setActiveLink("home");
            }}
            className={`
            ${activeLink === "home" ? "!text-orange-500 font-semibold" : "font-medium text-neutral-200"} 
            py-1 flex flex-col gap-1 items-center text-sm transition-all cursor-pointer hover:!text-orange-500`
            }
          >
            <SparklesIcon className="h-5 w-5" />
            Home
          </LinkScroll>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}>
          <LinkScroll
            activeClass="active"
            to="lokasi"
            href="/#lokasi"
            spy={true}
            smooth={true}
            duration={1000}
            onSetActive={() => {
              setActiveLink("lokasi");
            }}
            className={`
            ${activeLink === "lokasi" ? "!text-orange-500 font-semibold" : "font-medium text-neutral-200"} 
            py-1 flex flex-col gap-1 items-center text-sm transition-all cursor-pointer hover:!text-orange-500`
            }
          >
            <MapPinIcon className="h-5 w-5" />
            Lokasi
          </LinkScroll>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}>
          <LinkScroll
            activeClass="active"
            to="galeri"
            href="/#galeri"
            spy={true}
            smooth={true}
            duration={1000}
            onSetActive={() => {
              setActiveLink("galeri");
            }}
            className={`
            ${activeLink === "galeri" ? "!text-orange-500 font-semibold" : "font-medium text-neutral-200"} 
            py-1 flex flex-col gap-1 items-center text-sm transition-all cursor-pointer hover:!text-orange-500`
            }
          >
            <PhotoIcon className="h-5 w-5" />
            Galeri
          </LinkScroll>
        </motion.div>
      </div>
    </ nav>
  )
}