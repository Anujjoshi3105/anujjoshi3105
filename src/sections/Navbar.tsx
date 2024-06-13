'use client';

import Link from 'next/link';
import { FaAlignJustify, FaTimes, FaGithub, FaLinkedin, FaTelegram, FaInstagram  } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { TbHexagonLetterAFilled } from 'react-icons/tb';
import React, { useEffect, useState, useCallback } from 'react';
import { navLink } from '@/app/data';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import Mode from '@/components/Mode';

function Navbar() {
  const [responsiveNavVisible, setResponsiveNavVisible] = useState(false);
  const handleLinkClick = useCallback(() => setResponsiveNavVisible(false), []);

  useEffect(() => {
    const handleHtmlClick = () => setResponsiveNavVisible(false);
    if (responsiveNavVisible) {
      document.querySelector('html')?.addEventListener('click', handleHtmlClick);
    } else {
      document.querySelector('html')?.removeEventListener('click', handleHtmlClick);
    }
    return () => {
      document.querySelector('html')?.removeEventListener('click', handleHtmlClick);
    };
  }, [responsiveNavVisible]);

  useEffect(() => {
    const main = document.querySelector('main');
    if (responsiveNavVisible) main?.classList.add('blur');
    else main?.classList.remove('blur');
  }, [responsiveNavVisible]);

  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150 && !responsiveNavVisible) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: '-100%' },
      }}
      animate={hidden ? 'hidden' : 'visible'}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      className="min-h-8 lg:px-20 lg:py-6 md:px-12 p-6 sticky top-0 z-10 backdrop-blur-md"
    >
      <div className="flex justify-between items-center relative transition-all ease-in-out delay-300">
        <motion.div
          className="logo"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        >
          <Link href="/" className="logo hover:scale-110 flex justify-center items-center text-5xl transition-all ease-in-out delay-75 font-bold">
            <TbHexagonLetterAFilled className="text-theme hover:text-primary" />
          </Link>
        </motion.div>
        <motion.div
          className="lg:hidden flex text-3xl md:text-4xl justify-center items-center transition-all delay-300 ease-in-out z-[15] cursor-pointer"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          onClick={(e) => {
            e.stopPropagation();
            setResponsiveNavVisible(!responsiveNavVisible);
          }}
        >
          {responsiveNavVisible ? <FaTimes /> : <FaAlignJustify />}
        </motion.div>
        <div className={`${responsiveNavVisible && 'nav-responsive'} ${!responsiveNavVisible ? 'lg:flex hidden': ''} nav-items flex gap-[3rem] font-semibold transition-all ease-in-out delay-500`}>
          <ul className="flex lg:flex-row flex-col gap-12 text-center">
            {navLink.map(({ name, link }, index) => (
              <motion.li
                key={name}
                initial={{ opacity: 0, y: -25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut', delay: 0.3 + index * 0.1 }}
              >
                <Link href={link} className="link" onClick={handleLinkClick}>
                  {name}
                </Link>
              </motion.li>
            ))}
            <motion.li
              initial={{ opacity: 0, y: -25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut', delay: 1 }}
            >
              <Mode />            
            </motion.li>
            <p className='lg:hidden flex gap-5 text-lg sm:text-2xl py-5'>
                <a className="hover:text-theme hover:-translate-y-2 hover:animate-bounce delay-200" href="https://github.com/Anujjoshi3105/" target="_blank"><FaGithub /></a>
                <a className="hover:text-theme hover:-translate-y-2 hover:animate-bounce delay-200" href="https://www.linkedin.com/in/anujjoshi3105/" target="_blank"><FaLinkedin /></a>
                <a className="hover:text-theme hover:-translate-y-2 hover:animate-bounce delay-200" href="https://x.com/anujjoshi3105" target="_blank"><FaXTwitter /></a>
                <a className="hover:text-theme hover:-translate-y-2 hover:animate-bounce delay-200" href="https://t.me/anujjoshi3105/" target="_blank"><FaTelegram /></a>
                <a className="hover:text-theme hover:-translate-y-2 hover:animate-bounce delay-200" href="https://www.instagram.com/anujjoshi3105/" target="_blank"><FaInstagram /></a>
            </p>

          </ul>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;
