"use client";

import { useState } from "react";
import { FaBars, FaX } from "react-icons/fa6";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { socialLinks } from "@/lib/data/data";
import { TbHexagonLetterAFilled } from "react-icons/tb";
import ModeToggle from "@/components/global/mode-toggle";
import ThemePicker from "@/components/global/theme-picker";
import { SocialIcon } from "@/components/Social";
import { containerVars, menuVars, mobileLinkVars } from "@/lib/animate";
import { Setting } from "./Setting";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function Navbar() {
  const t = useTranslations();
  const navLinks = [
    { href: "/", title: t("nav.home") },
    { href: "/about", title: t("nav.about") },
    { href: "/project", title: t("nav.project") },
    { href: "/blog", title: t("nav.blog") },
    { href: "/contact", title: t("nav.contact") },
  ];

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

  const toggleMenu = () => setOpen((prevOpen) => !prevOpen);
  const closeMenu = () => setOpen(false);

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
              className="absolute right-10 top-8 cursor-pointer text-2xl active:scale-75"
              onClick={toggleMenu}
            />
            <motion.div
              variants={containerVars}
              initial="initial"
              animate="open"
              exit="initial"
              className="flex flex-col justify-center items-center h-full gap-6 sm:gap-8 md:gap-10 text-xl sm:text-2xl lg:text-3xl">
              {navLinks.map((link) => (
                <motion.div
                  key={link.href}
                  variants={mobileLinkVars}
                  className="tracking-wide hover:text-theme">
                  <Link href={link.href} onClick={closeMenu}>
                    {link.title}
                  </Link>
                </motion.div>
              ))}
              <motion.div variants={mobileLinkVars}>
                <ModeToggle />
              </motion.div>
              <motion.div
                variants={mobileLinkVars}
                className="my-2 sm:my-4 flex space-x-6 sm:text-lg md:text-2xl">
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
        className="h-24 flex items-center justify-between p-4 lg:px-16 lg:py-2 sticky top-0 z-10 backdrop-blur-md">
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
          className="hidden lg:flex justify-center items-center space-x-9 uppercase font-semibold"
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
            <Setting />
          </motion.div>
        </motion.div>

        {/* Mobile Menu Icon */}
        <FaBars
          className="lg:hidden cursor-pointer text-4xl active:scale-75"
          onClick={toggleMenu}
        />
      </motion.header>
      <ThemePicker />
    </>
  );
}
