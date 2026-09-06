"use client";

import React, { useRef } from "react";

const testimonialsData = [
  {
    name: "Aisha Yusuf",
    role: "Founder, CraftHub NG",
    image: "/images/Testimonials images/testimonial-1.png",
    quote:
      "Working with Tobams Group on our website was a breeze. They understood our vision and transformed it into a beautiful online space. Highly recommend their Website Design service!",
  },
  {
    name: "John Davies",
    role: "Marketing Manager, E-Commerce Emporium",
    image: "/images/Testimonials images/testimonial-2.png",
    quote:
      "Tobams Group's Digital Marketing strategies gave our brand the boost it needed. Simple yet powerful techniques that delivered tangible results. A pleasure to collaborate with!",
  },
  {
    name: "Chinonso Nwankwo",
    role: "HR Director, FutureTech Solutions",
    image: "/images/Testimonials images/testimonial-3.png",
    quote:
      "Tobams Group has been instrumental in our talent acquisition journey. Their Tech Talent Solution service consistently connects us with the right professionals. Reliable and straightforward.",
  },
  {
    name: "Aisha Yusuf",
    role: "Founder, CraftHub NG",
    image: "/images/Testimonials images/testimonial-1.png",
    quote:
      "Working with Tobams Group on our website was a breeze. They understood our vision and transformed it into a beautiful online space. Highly recommend their Website Design service!",
  },
  {
    name: "John Davies",
    role: "Marketing Manager, E-Commerce Emporium",
    image: "/images/Testimonials images/testimonial-2.png",
    quote:
      "Tobams Group's Digital Marketing strategies gave our brand the boost it needed. Simple yet powerful techniques that delivered tangible results. A pleasure to collaborate with!",
  },
  {
    name: "Chinonso Nwankwo",
    role: "HR Director, FutureTech Solutions",
    image: "/images/Testimonials images/testimonial-3.png",
    quote:
      "Tobams Group has been instrumental in our talent acquisition journey. Their Tech Talent Solution service consistently connects us with the right professionals. Reliable and straightforward.",
  },
];

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth > 768 ? 384 : 351;
      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full bg-[rgba(196,196,196,0.12)] pt-6 pb-16 md:pt-8 md:pb-16 border-b border-[#E5E7EB] overflow-hidden">
      <div className="mx-auto flex w-full max-w-[1312px] flex-col items-center px-6 md:px-16 mb-8 md:mb-10">
        <h2 className="text-[28px] font-bold text-[#151515] md:text-[36px] lg:text-[40px] text-center">
          Testimonials
        </h2>
      </div>

      <div className="w-full pl-6 md:pl-8 lg:pl-[max(1.5rem,calc((100vw-1312px)/2+4rem))]">
        <div
          ref={scrollRef}
          className="flex w-full gap-6 overflow-x-auto pb-4 scroll-smooth pr-6 md:pr-8 lg:pr-16 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {testimonialsData.map((item, index) => (
            <div
              key={index}
              className="box-border flex w-[327px] h-[226px] lg:w-[356px] xl:w-[364px] shrink-0 flex-col justify-start gap-3.5 rounded-[16px] bg-white p-5 md:p-6 shadow-sm border border-[#E5E7EB] border-l-4 border-l-[#EF4353]"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 md:h-11 md:w-11 shrink-0 overflow-hidden rounded-full bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover rounded-full"
                  />
                </div>
                <div className="flex flex-col min-w-0">
                  <h3 className="text-[13px] font-bold leading-[130%] text-[#151515] md:text-[14px]">
                    {item.name}
                  </h3>
                  <p className="whitespace-nowrap text-[11px] font-normal leading-[130%] tracking-[0%] text-[#757575] md:text-[12px]">
                    {item.role}
                  </p>
                </div>
              </div>

              <p className="text-[13px] font-normal leading-[150%] text-[#333333] md:text-[14px]">
                {item.quote}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-[1312px] justify-end gap-3 px-6 md:px-16 mt-6">
        <button
          type="button"
          onClick={() => scroll("left")}
          className="flex h-9 w-9 items-center justify-center rounded-[8px] bg-[#FDECEE] text-[#EF4353] transition-opacity hover:opacity-80"
          aria-label="Previous testimonial"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => scroll("right")}
          className="flex h-9 w-9 items-center justify-center rounded-[8px] bg-[#FDECEE] text-[#EF4353] transition-opacity hover:opacity-80"
          aria-label="Next testimonial"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </section>
  );
}