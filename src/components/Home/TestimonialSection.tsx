"use client";

import React, { useState, useEffect, useCallback } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { SectionTemplate } from "@/components/Template";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useTranslations } from "next-intl";

const TestimonialCard = ({
  testimonial,
  isVisible,
}: {
  testimonial: Testimonial;
  isVisible: boolean;
}) => {
  return (
    <div
      className={`text-center ${
        isVisible ? "" : "opacity-0"
      } [grid-area:stack] transition-all duration-700`}>
      <blockquote
        className={`block bg-muted hover:bg-muted rounded-md p-4 text-md relative isolate transition-all duration-500 ${
          isVisible ? "scale-100" : "scale-0"
        } before:absolute before:bg-muted before:w-6 before:h-6 before:rotate-45 before:-bottom-2 before:left-2/4 before:-tranbackground-x-2/4 before:-z-10 before:transition before:duration-500 before:delay-500 ${
          isVisible ? "before:tranbackground-y-0" : "before:-tranbackground-y-4"
        }`}>
        {testimonial.review}
      </blockquote>
      <div
        className={`text-sm flex flex-col items-center gap-2 mt-6 transition-all duration-500 ${
          isVisible ? "tranbackground-y-0" : "tranbackground-y-[150px]"
        }`}>
        <Avatar className="w-12 h-12">
          <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
          <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-bold capitalize">{testimonial.name}</p>
          <p className="text-xs">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
};

export default function TestimonialSection() {
  const t = useTranslations("testimonial");
  const testimonials: Testimonial[] = t.raw("entries");
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = useCallback(() => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  }, [setCurrentIndex, testimonials.length]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  }, [setCurrentIndex, testimonials.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [handleNext]);

  return (
    <SectionTemplate
      title={t("title")}
      subtitle={t("subtitle")}
      className="lg:flex items-baseline justify-between">
      <div className="lg:w-4/5 mx-auto mt-6 sm:grid grid-cols-[40px_auto_40px] [grid-template-areas:'nav-left_slider_nav-right'] gap-4 md:gap-6">
        <button
          onClick={handlePrev}
          className="[grid-area:nav-left] hidden sm:block group before:absolute before:inset-px before:transition-all before:duration-300 before:-z-10 before:rounded-full hover:before:inset-full before:bg-primary rounded-full w-10 h-10 shrink-0 relative isolate bg-background md:mt-4 m-auto text-background text-2xl transition-all delay-300 hover:bg-background border-primary border-2">
          <FaAngleLeft className="m-auto text-foreground group-hover:text-primary" />
        </button>
        <div>
          <div className="grid overflow-hidden">
            {testimonials.map((testimonial, idx) => (
              <TestimonialCard
                key={testimonial.name}
                testimonial={testimonial}
                isVisible={idx === currentIndex}
              />
            ))}
          </div>
        </div>
        <button
          onClick={handleNext}
          className="[grid-area:nav-right] hidden sm:block group before:absolute before:inset-px before:transition-all before:duration-300 before:-z-10 before:rounded-full hover:before:inset-full before:bg-primary rounded-full w-10 h-10 shrink-0 relative isolate bg-background md:mt-4 m-auto text-background text-2xl transition-all delay-300 hover:bg-background border-primary border-2">
          <FaAngleRight className="m-auto text-foreground group-hover:text-primary" />
        </button>
      </div>
    </SectionTemplate>
  );
}
