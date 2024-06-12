'use client'

import Link from "next/link";
import { FaAlignJustify, FaTimes } from "react-icons/fa";
import { TbHexagonLetterAFilled } from "react-icons/tb";
import React, { useEffect, useState, useCallback } from "react";
import { navLink } from "@/helper/data";
import { motion } from "framer-motion";
import ModeButton from "@/components/ModeButton"

function Navbar() {
  const [responsiveNavVisible, setResponsiveNavVisible] = useState(false);
  
  const handleLinkClick = useCallback(() => setResponsiveNavVisible(false), []);
  const handleHtmlClick = useCallback(() => setResponsiveNavVisible(false), []);

  useEffect(() => {
    const links = document.querySelectorAll(".link");
    links.forEach((link) => link.addEventListener("click", handleLinkClick));

    document.querySelector("html")?.addEventListener("click", handleHtmlClick);

    return () => {
      links.forEach((link) => link.removeEventListener("click", handleLinkClick));
      document.querySelector("html")?.removeEventListener("click", handleHtmlClick);
    };
  }, [handleLinkClick, handleHtmlClick]);

  useEffect(() => {
    const main = document.querySelector("main");
    if (responsiveNavVisible) main?.classList.add("blur");
    else main?.classList.remove("blur");
  }, [responsiveNavVisible]);

  return (
    <nav className='min-h-8 lg:px-20 lg:py-6 md:px-12 p-6 sticky top-0 z-50 backdrop-blur-md'>
      <div className="flex justify-between items-center relative transition-all ease-in-out delay-300">
        <motion.div
          className="logo"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <Link href="/" className="logo hover:scale-110 flex justify-center items-center text-3xl md:text-5xl transition-all ease-in-out delay-75 font-bold">
            <TbHexagonLetterAFilled className="text-theme hover:text-primary" />
          </Link>
        </motion.div>
        <motion.div
          className="lg:hidden flex text-2xl md:text-4xl justify-center items-center transition-all delay-300 ease-in-out z-[15] cursor-pointer"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          onClick={(e) => {
            e.stopPropagation();
            setResponsiveNavVisible(!responsiveNavVisible);
          }}
        >
          {responsiveNavVisible ? <FaTimes /> : <FaAlignJustify />}
        </motion.div>
        <div className={`${responsiveNavVisible && "nav-responsive"} nav-items flex gap-[3rem] font-semibold`}>
          <ul className="flex lg:flex-row flex-col gap-12 text-center">
            {navLink.map(({ name, link }, index) => (
              <motion.li
                key={name}
                className="nav-items-list-item"
                initial={{ opacity: 0, y: -25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut", delay: 0.3 + index * 0.1 }}
              >
                <Link href={link} className="link">
                  {name}
                </Link>
              </motion.li>
            ))}
            <motion.li
                className="nav-items-list-item"
                initial={{ opacity: 0, y: -25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut", delay: 1 }}
              >
              <ModeButton />
            </motion.li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
