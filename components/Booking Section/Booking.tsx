export default function Booking() {
  return (
    <section className="w-full bg-white px-4 py-8 md:px-16 md:py-16">
      <div
        className="
          mx-auto flex w-full max-w-[1134px] flex-col items-center justify-center
          rounded-[12px] bg-[#571244]
          px-6 py-8 md:pt-[32px] md:pr-[64px] md:pb-[32px] md:pl-[64px]
          gap-[24px] md:gap-[32px] opacity-100
        "
      >
        <div className="flex w-full max-w-[1006px] items-center justify-center text-center">
          <p
            className="
              font-['Nunito'] text-[16px] md:text-[20px] font-semibold not-italic
              leading-[150%] tracking-[0.03em] text-white text-center
            "
          >
            <span className="block md:hidden">
              Don&apos;t just dream it—let&apos;s build it! Click now and start your project with Tobams Group. Your journey to digital excellence begins here.
            </span>
            <span className="hidden md:inline">
              Want to accelerate professional growth and development at your organisation?<br />
              See how we can help.
            </span>
          </p>
        </div>

        <button
          type="button"
          className="
            flex w-[214px] h-[48px] items-center justify-center
            rounded-[8px] bg-white gap-[32px] opacity-100
            font-['Nunito'] text-[16px] font-semibold text-[#571244]
            transition-colors hover:bg-gray-100
          "
        >
          Book a Consultation
        </button>
      </div>
    </section>
  );
}