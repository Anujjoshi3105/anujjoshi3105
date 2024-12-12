import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { childVariants, containerVariants } from "@/utils/animate";
import PerkSection from "@/sections/About/PerkSection";

export default async function AboutSection() {
  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        className="mb-5 justify-center items-center flex-col lg:grid lg:grid-cols-5 lg:gap-56">
        <motion.div
          initial={{ opacity: 0, x: 0 }}
          whileInView={{ opacity: 1, x: 5 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="relative w-max h-max group lg:col-span-2 group mb-10">
          <div className="absolute bg-theme group-hover:-translate-x-3 group-hover:-translate-y-3 left-5 top-5 h-[225px] w-[225px] sm:h-[400px] sm:w-[400px] h-max-1/2 w-max-1/2 rounded-md transition-all duration-150"></div>
          <div className="h-[225px] w-[225px] sm:h-[400px] sm:w-[400px] h-max-1/2 w-max-1/2 object-cover">
            <Image src="/me.jpg" alt="profile" className="rounded-md" fill />
          </div>
        </motion.div>
        <motion.div
          className="flex flex-col gap-[1rem] lg:col-span-3"
          variants={childVariants}>
          <p className="md:mr-0 mr-[10%] tracking-[0.08rem] leading-[1.6rem] font-[450]">
            Hello! My name is Anuj Joshi, and I am a passionate software
            engineer with a keen interest in Web Development and Machine
            Learning.
          </p>
          <p className="md:mr-0 mr-[10%] tracking-[0.08rem] leading-[1.6rem] font-[450]">
            At&nbsp;
            <Link
              href="https://limstir-dtu.vercel.app"
              className="link text-theme"
              target="_blank">
              LIMSTIR-DTU
            </Link>
            &nbsp;and as a member of the Robotic Society at&nbsp;
            <Link
              href="https://srdtu-revamp.vercel.app"
              className="link text-theme"
              target="_blank">
              SR-DTU
            </Link>
            , I strive to craft sustainable solutions for global challenges.
          </p>
          <p className="md:mr-0 mr-[10%] tracking-[0.08rem] leading-[1.6rem] font-[450]">
            Additionally, I share my knowledge and passion with the world
            through my&nbsp;
            <Link
              href="https://devdiaries3105.vercel.app"
              className="link text-theme"
              target="_blank">
              blogs
            </Link>
            , where I demonstrate how to build full-stack applications.
          </p>
          <p className="md:mr-0 mr-[10%] tracking-[0.08rem] leading-[1.6rem] font-[450]">
            Currently, I&apos;m leading a project called&nbsp;
            <Link
              className="link text-theme"
              target="_blank"
              href="https://smithstory.vercel.app">
              Smith Story
            </Link>
            , an LLM model aimed at crafting stories with images. Join me in
            this exciting endeavor to contribute to cutting-edge storytelling
            technology!
          </p>
        </motion.div>
      </motion.div>
      <PerkSection />
    </>
  );
}
