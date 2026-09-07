"use client";

export default function GetInTouchBanner() {
  return (
    <section 
      className="w-full bg-[#2E0A24] border-b-[1px] md:border-b-[2px] border-white/10"
      style={{
        width: "1440px",
        maxWidth: "100%",
      }}
    >
      <div 
        className="mx-auto flex w-full max-w-[1312px] flex-col md:flex-row items-start md:items-center justify-between p-[24px] gap-[24px] md:py-[40px] md:px-[64px] md:gap-0"
      >
        <div className="flex flex-col items-start text-left gap-2">
          <p className="font-['Nunito'] text-[14px] md:text-[18px] font-normal text-white/80">
            Ready to be a part of something extraordinary?
          </p>
          <h2 className="font-['Nunito'] text-[22px] md:text-[36px] font-bold text-white leading-[130%]">
            Let&apos;s work together to create a difference
          </h2>
        </div>

        <div className="shrink-0">
          <button
            type="button"
            className="
              flex h-[48px] items-center justify-center rounded-[8px] 
              bg-[#571244] px-6 md:px-8 font-['Nunito'] text-[16px] font-semibold text-white
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