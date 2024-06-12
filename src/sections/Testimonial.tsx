import React, { useState, useEffect, useCallback } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';
import { testimonialData } from '@/helper/data';
import TestimonialCard from '@/components/TestimonialCard';
import Template from '@/components/Template';

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonialData.length) % testimonialData.length);
  }, [setCurrentIndex]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialData.length);
  }, [setCurrentIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [handleNext]);

  return (
    <Template title="Testimonial" subtitle="What others say about me" className='md:flex items-baseline justify-between'>
      <div className="lg:w-4/5 mx-auto mt-6 grid grid-cols-[40px_auto_40px] [grid-template-areas:'nav-left_slider_nav-right'] gap-4 md:gap-6">
        <button
          onClick={handlePrev}
          className="[grid-area:nav-left] group before:absolute before:inset-px before:transition-all before:duration-300 before:-z-10 before:rounded-full hover:before:inset-full before:bg-primary rounded-full w-10 h-10 shrink-0 relative isolate bg-slate md:mt-4 m-auto text-slate text-2xl transition-all delay-300 hover:bg-slate border-primary border-2"
        >
          <FaAngleLeft className='m-auto text-secondary group-hover:text-primary' />
        </button>
        <div>
          <div className="grid overflow-hidden">
            {testimonialData.map((review, idx) => (
              <TestimonialCard key={review.id} review={review} isVisible={idx === currentIndex} />
            ))}
          </div>
        </div>
        <button
          onClick={handleNext}
          className="[grid-area:nav-right] group before:absolute before:inset-px before:transition-all before:duration-300 before:-z-10 before:rounded-full hover:before:inset-full before:bg-primary rounded-full w-10 h-10 shrink-0 relative isolate bg-slate md:mt-4 m-auto text-slate text-2xl transition-all delay-300 hover:bg-slate border-primary border-2"
        >
          <FaAngleRight className='m-auto text-secondary group-hover:text-primary' />
        </button>
      </div>
    </Template>
  );
};

export default Testimonial;
