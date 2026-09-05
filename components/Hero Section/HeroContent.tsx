export default function HeroContent() {
  return (
    <div
      className="
        flex
        h-[14.8125rem]
        w-[20.4375rem]
        flex-col
        items-center

        md:h-auto
        md:w-full
        md:max-w-[82rem]
      "
    >
      <button
        type="button"
        className="
          flex
          h-[2.375rem]
          w-[9.375rem]
          shrink-0
          items-center
          justify-center
          rounded-[6.25rem]
          bg-[#221E1B]
          px-8
          py-2.5

          md:h-[2.625rem]
          md:w-[10.5rem]

          lg:h-[2.8125rem]
          lg:w-[12.0625rem]
          lg:gap-2.5
          lg:px-12
          lg:py-3
        "
      >
        <span
          className="
            whitespace-nowrap
            text-center
            text-[0.75rem]
            font-semibold
            leading-[150%]
            tracking-[3%]
            text-white

            md:text-[0.8125rem]
            md:tracking-[1%]

            lg:text-[0.875rem]
            lg:tracking-[0%]
          "
        >
          What We Do
        </span>
      </button>

      <h1
        className="
          mt-[0.9375rem]
          h-auto
          w-full
          text-center
          text-[1.5rem]
          font-bold
          leading-[130%]
          tracking-[0%]
          text-white

          md:mt-3
          md:max-w-[45rem]
          md:text-[2.5rem]

          lg:mt-[0.625rem]
          lg:h-[4.5625rem]
          lg:max-w-[75.3125rem]
          lg:text-[3.5rem]
        "
      >
        Training and Development
      </h1>

      <p
        className="
          mt-[0.9375rem]
          h-auto
          w-full
          text-center
          text-[0.875rem]
          font-semibold
          leading-[150%]
          tracking-[0%]
          text-white

          md:mt-3
          md:max-w-[42rem]
          md:text-[1rem]

          lg:mt-[0.625rem]
          lg:h-[3.375rem]
          lg:max-w-[67.3125rem]
          lg:text-[1.125rem]
        "
      >
        Our comprehensive range of programs and resources is designed to
        enhance skills, broaden knowledge, and propel careers forward in
        today&apos;s ever-evolving landscape.
      </p>

      <button
        type="button"
        className="
          mt-[0.9375rem]
          flex
          h-10
          w-[10.8125rem]
          shrink-0
          items-center
          justify-center
          gap-2.5
          rounded-[0.25rem]
          bg-[#571244]
          px-[1.375rem]
          py-[0.71875rem]

          md:mt-4
          md:h-11
          md:w-[12rem]
          md:px-5

          lg:mt-[0.9375rem]
          lg:h-12
          lg:w-[13.375rem]
          lg:px-6
          lg:py-3
        "
      >
        <span
          className="
            whitespace-nowrap
            text-center
            text-[0.875rem]
            font-semibold
            leading-[150%]
            tracking-[0%]
            text-white

            md:text-[1rem]

            lg:text-[1.125rem]
          "
        >
          Book a Consultation
        </span>
      </button>
    </div>
  );
}