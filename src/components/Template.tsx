'use client';
import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
interface TemplateProps {
  title: string;
  subtitle: string;
  children: ReactNode;
  id?: string;
  className?: string;
}

const Template: React.FC<TemplateProps> = ({ title, subtitle, children, id = '', className = '' }) => {
  return (
    <section className={`w-full pt-16 ${className}`} id={id}>
      <motion.div
      className="border-l-[2.5px] border-theme px-4 my-16"
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 1 }}
      variants={{
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -50 },
      }}
    >   <h1 className="text-4xl font-bold mb-2">{title}</h1>
        <h3 className="font-[500]">{subtitle}</h3>
      </motion.div>
      <motion.div className="px-4 my-[4rem] mx-auto"
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 1.2 }}
      variants={{
        visible: { opacity: 1, y: 0},
        hidden: { opacity: 0, y: 20 },
      }}>
        {children}
      </motion.div>
    </section>
  );
};

export default Template;
