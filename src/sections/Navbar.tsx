"use client";

import { useState } from "react";
import { FaBars, FaX } from "react-icons/fa6";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import Link from "next/link";
import { navLinks, socialLinks } from "@/data/data";
import { TbHexagonLetterAFilled } from "react-icons/tb";
import Mode from "@/components/Mode";
import Theme from "@/components/Theme";
import { SocialIcon } from "@/components/Social";
import { containerVars, menuVars, mobileLinkVars } from "@/utils/animate";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150 && !open) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <>
      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="origin-top fixed z-[100] top-0 left-0 h-screen w-screen bg-muted text-center font-semibold uppercase">
            <FaX
              className="absolute right-10 top-8 cursor-pointer text-2xl"
              onClick={toggleMenu}
            />
            <motion.div
              variants={containerVars}
              initial="initial"
              animate="open"
              exit="initial"
              className="flex flex-col justify-center items-center h-full sm:gap-8 gap-6 text-xl sm:text-2xl lg:text-3xl">
              {navLinks.map((link) => (
                <motion.div
                  key={link.href}
                  variants={mobileLinkVars}
                  className="tracking-wide hover:text-theme">
                  <Link href={link.href}>{link.title}</Link>
                </motion.div>
              ))}
              <motion.div variants={mobileLinkVars}>
                <Mode />
              </motion.div>
              <motion.div
                variants={mobileLinkVars}
                className="mt-2 sm:mt-4 flex space-x-6 sm:text-lg md:text-2xl">
                {socialLinks.map((link, index) => (
                  <SocialIcon key={index} href={link.href} title={link.title}>
                    {link.icon}
                  </SocialIcon>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Desktop Menu */}
      <motion.header
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="h-20 flex items-baseline justify-between p-4 lg:px-16 sticky top-0 z-10 backdrop-blur-md">
        {/* Logo with spring animation */}
        <motion.div
          variants={{
            initial: { scale: 0 },
            animate: {
              scale: 1,
              transition: { type: "spring", stiffness: 300 },
            },
          }}
          initial="initial"
          animate="animate">
          <Link href="/">
            <TbHexagonLetterAFilled className="text-5xl font-bold hover:text-theme hover:scale-110 duration-150 transition-all" />
          </Link>
        </motion.div>

        {/* Desktop Navigation Links */}
        <motion.div
          className="hidden lg:flex space-x-9 uppercase font-semibold"
          variants={{
            initial: { opacity: 0 },
            animate: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
                when: "beforeChildren",
              },
            },
          }}
          initial="initial"
          animate="animate">
          {navLinks.map((link) => (
            <motion.div
              key={link.href}
              variants={{
                initial: { scale: 0.9 },
                animate: {
                  scale: 1,
                  transition: { type: "spring", stiffness: 300 },
                },
              }}>
              <Link
                href={link.href}
                className="link hover:text-theme hover:scale-105">
                {link.title}
              </Link>
            </motion.div>
          ))}

          {/* Mode Toggle */}
          <motion.div
            variants={{
              initial: { scale: 0.9, opacity: 0 },
              animate: {
                scale: 1,
                opacity: 1,
                transition: { type: "spring", stiffness: 300 },
              },
            }}>
            <Mode />
          </motion.div>
        </motion.div>

        {/* Mobile Menu Icon */}
        <FaBars
          className="lg:hidden cursor-pointer text-3xl"
          onClick={toggleMenu}
        />
      </motion.header>
      <Theme />
    </>
  );
}
