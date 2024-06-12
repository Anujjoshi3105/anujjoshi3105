'use client';

import { motion } from 'framer-motion';
import Button from '@/components/Button';
import Social from '@/components/Social';
import Image from 'next/image';
import { FaPaperPlane, FaLink, FaTelegram, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import Link from 'next/link';
import { useState, useEffect } from 'react';

const roles = ['A Machine Learning Enthusiast', 'A Fullstack Web3 Developer', 'A Problem Solver'];

const Hero = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-[75vh] relative grid items-center">
      <motion.div 
        className="z-[-10] hidden lg:block lg:absolute -right-12 lg:w-[600px] lg:h-[600px] object-cover animate-profile rounded-full transition-all border-8 border-primary bg-theme"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 2 }}
      >
        <Image src="/logo.png" alt="Anuj Joshi" layout="fill" objectFit="cover" />
      </motion.div>
      <div>
        <motion.h1
          className='font-bold text-[2rem] sm:text-[3rem] md:text-6xl'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          Hi, I&apos;m <span className="text-theme backdrop-blur-3xl">Anuj Joshi</span>
        </motion.h1>
        <motion.h3
          className='font-[500] text-[1rem] sm:text-[2rem] md:text-2xl mt-2 md:mt-5 animate-typing overflow-hidden whitespace-nowrap'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut", delay: 0.2 }}
        >
          {roles[currentRoleIndex]}
        </motion.h3>
        <motion.div
          className="flex flex-wrap gap-5 sm:gap-10 py-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut", delay: 0.4 }}
        >
          <Link href="/#contact" passHref>
            <Button text="Contact Me" link="/" icon={FaPaperPlane} className='bg-theme text-background hover:bg-transparent hover:text-theme border-2 border-theme' />
          </Link>
          <a href="/anujResume.pdf" download>
            <Button text="Resume" link="/" icon={FaLink} className='hover:bg-theme hover:text-background bg-transparent text-theme border-2 border-theme' />
          </a>
        </motion.div>
      </div>
      <motion.div
        className="absolute bottom-2 sm:bottom-5 flex items-center lg:gap-20 gap-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut", delay: 0.6 }}
      >
        <Social title="LinkedIn" name="@Anujjoshi3105" link="https://www.linkedin.com/in/anujjoshi3105/" icon={FaLinkedinIn} />
        <Social title="Twitter" name="@Anujjoshi3105" link="https://x.com/AnujJoshi3105/" icon={FaXTwitter} />
        <Social title="Telegram" name="@Anujjoshi3105" link="https://t.me/anujjoshi3105/" icon={FaTelegram} />
      </motion.div>
    </div>
  );
}

export default Hero;
