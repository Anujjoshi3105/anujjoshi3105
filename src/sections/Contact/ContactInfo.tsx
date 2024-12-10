"use client";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="md:w-1/2 my-auto">
      <h5 className="font-bold lg:text-3xl text-2xl">
        Let&apos;s talk about everything!
      </h5>
      <p className="mb-8 mt-2">
        Have a question, an idea, or just want to connect? I&apos;m here to
        help. Whether it&apos;s a collaboration, a project inquiry, or just a
        friendly chat, feel free to reach out. Let&apos;s create something
        amazing together.
      </p>
      <div className="flex flex-col gap-4 md:gap-6">
        <a href="tel:9811184995" className="hover:-translate-y-1 duration-150">
          <div className="font-semibold">Contact</div>
          <div className="flex gap-2 items-center">
            <FaPhoneAlt className="text-theme" />
            <span className="link">+91 981-11X-XXXX</span>
          </div>
        </a>
        <a
          href="mailto:anujjoshi3105@gmail.com"
          className="hover:-translate-y-1 duration-150">
          <div className="font-semibold">Email</div>
          <div className="flex gap-2 items-center">
            <FaEnvelope className="text-theme" />
            <span className="link">anujjoshi3105@gmail.com</span>
          </div>
        </a>
        <a href="#" className="hover:-translate-y-1 duration-150">
          <div className="font-semibold">Location</div>
          <div className="flex gap-2 items-center">
            <FaMapMarkerAlt className="text-theme" />
            <span className="link">New Delhi, India</span>
          </div>
        </a>
      </div>
    </motion.div>
  );
}
