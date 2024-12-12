"use client";

import { motion } from "framer-motion";
import { HeroSocial } from "@/components/Social";
import Image from "next/image";
import { FaPaperPlane, FaLink } from "react-icons/fa6";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Typewriter from "@/components/animate/Typewriter";
import { childVariants, containerVariants } from "@/utils/animate";
import { socialLink, subtitle } from "@/data/data";

const Hero = () => {
  return (
    <div className="flex lg:flex-row-reverse flex-col items-center justify-between gap-4">
      {/* Profile Image */}
      <motion.div
        className="bg-theme/80 lg:max-w-[60vw] w-fit h-fit max-h-[70vh] lg:max-h-[80vh] object-cover rounded-full overflow-hidden animate-profile"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible">
        <motion.div variants={childVariants}>
          <Image
            src="/logo.png"
            alt="Anuj Joshi"
            width={500}
            height={500}
            className="object-fit hover:scale-[1.03] transition-all duration-300 ease-in-out"
          />
        </motion.div>
      </motion.div>

      {/* Profile Text */}
      <div className="space-y-12 translate-y-8">
        <div className="md:space-y-8 md:py-12 sm:py-5 px-2 mx-auto md:mx-0">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="space-y-2 md:space-y-4 select-none">
            <motion.h1
              variants={childVariants}
              className="text-nowrap font-bold text-[2rem] sm:text-[3rem] md:text-6xl">
              Hi, I&apos;m&nbsp;
              <span className="text-theme">Anuj Joshi</span>
            </motion.h1>
            <motion.h3
              variants={childVariants}
              className="overflow-hidden whitespace-nowrap">
              <Typewriter
                texts={subtitle}
                className="h-8 font-[500] text-[1rem] sm:text-[1.5rem] md:text-2xl"
              />
            </motion.h3>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="flex flex-wrap gap-5 py-10 justify-center lg:justify-start">
            <motion.div variants={childVariants}>
              <Link href="/contact" passHref>
                <Button>
                  <FaPaperPlane />
                  Contact Me
                </Button>
              </Link>
            </motion.div>

            <motion.div variants={childVariants}>
              <a
                href="https://drive.google.com/drive/u/0/folders/1dFTQhBBlbuZQbBlZIzQOXPr80LqywlDl"
                target="_blank">
                <Button variant="outline">
                  <FaLink />
                  Resume
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="flex justify-center items-center lg:gap-20 gap-10">
          {socialLink.map(({ title, name, link, icon }) => (
            <motion.div variants={childVariants} key={title}>
              <HeroSocial title={title} name={name} href={link} icon={icon} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
