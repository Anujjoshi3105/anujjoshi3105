'use client'

import React, { useState } from 'react';
import Navbar from '@/sections/Navbar';
import Hero from '@/sections/Hero';
import About from '@/sections/About';
import Education from '@/sections/Education';
import Experience from '@/sections/Experience';
import Skill from '@/sections/Skill';
import Work from '@/sections/Work';
import Contact from '@/sections/Contact';
import Testimonial from '@/sections/Testimonial';
import Footer from '@/sections/Footer';
import Theme from '@/components/Theme';

export default function Page() {
  return (
    <>
    <Navbar />
      <main className="lg:mx-[9rem] md:mx-[4rem] sm:ml-[4rem] lg:my-[5rem] m-[2.5rem] mr-0">
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skill />
        <Work />
        <Contact />
        <Testimonial />
      </main>
      <Theme />
      <Footer />
    </>
  );
};
