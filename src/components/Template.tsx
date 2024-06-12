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
    <motion.section
      className={`w-full pt-20 ${className}`} 
      id={id}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 1 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 100 },
      }}
    >
      <div className="border-l-[2.5px] border-theme px-4 my-16">
        <h1 className="text-4xl font-bold mb-2">{title}</h1>
        <h3 className="font-[500]">{subtitle}</h3>
        </div>
      <div className="px-4 my-[4rem] mx-auto">
        {children}
      </div>
    </motion.section>
  );
};

export default Template;
