"use client";

import React from "react";

export default function GetInTouchBanner() {
  return (
    <section className="w-full bg-[#2E0A24] border-b border-white/10 px-6 py-8 md:px-12 md:py-10 lg:px-16 lg:py-12">
      <div className="mx-auto flex w-full max-w-[1312px] flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-8">
        <div className="flex flex-col items-start text-left gap-2">
          <p className="text-[14px] md:text-[18px] font-normal text-white/80">
            Ready to be a part of something extraordinary?
          </p>
          <h2 className="text-[22px] md:text-[32px] lg:text-[36px] font-bold text-white leading-[130%]">
            Let&apos;s work together to create a difference
          </h2>
        </div>

        <div className="shrink-0">
          <button
            type="button"
            className="
              flex h-[48px] items-center justify-center rounded-[8px] 
              bg-[#571244] px-6 md:px-8 text-[16px] font-semibold text-white
              transition-colors hover:bg-[#681952] border border-white/10
            "
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
}