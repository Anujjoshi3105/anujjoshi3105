"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { childVariants, containerVariants } from "@/lib/animate";
import PerkSection from "@/components/About/PerkSection";
import { useTranslations } from "next-intl";

export default function AboutSection() {
  const t = useTranslations("about");

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
          <div className="absolute bg-theme group-hover:-translate-x-3 group-hover:-translate-y-3 left-5 top-5 size-[225px] sm:size-[400px] h-max-1/2 w-max-1/2 rounded-md transition-all duration-150"></div>
          <div className="size-[225px] sm:size-[400px] h-max-1/2 w-max-1/2 object-cover">
            <Image src="/me.jpg" alt="profile" className="rounded-md" fill />
          </div>
        </motion.div>
        <motion.div
          className="flex flex-col gap-[1rem] lg:col-span-3"
          variants={childVariants}>
          {t.rich("content", {
            p: (chunks) => (
              <p className="md:mr-0 mr-[10%] tracking-[0.08rem] leading-[1.6rem] font-[450]">
                {chunks}
              </p>
            ),
            a: (chunks) => (
              <a
                className="link text-theme"
                target="_blank"
                href={t.raw("urls." + chunks)}>
                {chunks}
              </a>
            ),
          })}
        </motion.div>
      </motion.div>
      <PerkSection />
    </>
  );
}
