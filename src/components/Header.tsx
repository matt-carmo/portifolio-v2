"use client";
import { motion, useScroll } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { FaBars } from "react-icons/fa6";
export const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const { scrollYProgress } = useScroll();
  const [progress, setProgress] = useState(false);

  scrollYProgress.on("change", (latest) => {
    if (latest > 0.025) {
      return setProgress(true);
    }
    setProgress(false);
  });
  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <motion.header
    
    className={`  flex justify-around py-4 px-3 fixed z-10 w-full transition-all duration-300  ${progress && !openMenu ? "backdrop-blur-sm bg-[#1e1e1d]/80" : "opacity-100 bg-[#1e1e1d]"}`}>
      <div className="w-full max-w-6xl flex justify-between items-center">
        <div>
          <Image src="/logo.webp" width={100} height={36.1} alt="" />
        </div>
        <button onClick={handleMenu} className="flex md:hidden">
          <FaBars />
        </button>
        <ul className={`gap-x-16 font-medium text-lg mt-1 flex md:flex-row flex-col text-center w-full md:w-auto md:static absolute left-0 top-14 md:translate-y-0 md:bottom-0  bg-[#1e1e1d] md:bg-transparent overflow-hidden origin-top transition-all duration-300 md:max-h-[unset] ${openMenu ? "max-h-96 pb-3" : "max-h-0"}`}>
          <li onClick={()=> setOpenMenu(false)}>
            <a href="#home">Home</a>
          </li>
          <li onClick={()=> setOpenMenu(false)}>
            <a href="#projects">Projetos</a>
          </li>
          <li onClick={()=> setOpenMenu(false)}>
            <a href="#experience">Experiência</a>
          </li>
          <li onClick={()=> setOpenMenu(false)}>
            <a href="#contact">Contato</a>
          </li>
        </ul>
      </div>
    </motion.header>
  );
};
