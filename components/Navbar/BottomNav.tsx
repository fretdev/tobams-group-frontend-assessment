import Link from "next/link";

export default function BottomNav() {
  return (
    <nav
      className="
        hidden
        h-[4.3125rem] w-full
        items-center justify-center
        bg-white
        px-6 py-5

        md:flex
        md:px-6

        lg:px-16
      "
    >
      <ul
        className="
          flex
          w-full
          max-w-[65.333rem]
          shrink-0
          items-center
          justify-center
          gap-2
          whitespace-nowrap

          md:gap-2

          lg:h-[1.8125rem]
          lg:w-[65.333rem]
          lg:gap-8
        "
      >
        <li
          className="
            flex shrink-0 items-center gap-1
            border-b border-[#571244]
            pb-[0.125rem]
          "
        >
          <Link
            href="#"
            className="
              flex items-center gap-1
              whitespace-nowrap
              text-[0.7rem]
              font-semibold
              leading-[150%]
              text-[#571244]
              focus:outline-none focus:ring-1 focus:ring-[#571244] rounded

              md:text-[0.8rem]
              lg:text-[1.125rem]
            "
          >
            <span>About</span>
            <span className="flex h-4 w-4 shrink-0 items-center justify-center lg:h-5 lg:w-5">
              <span
                className="
                  h-1.5 w-1.5 rotate-45
                  border-b-[1.5px]
                  border-r-[1.5px]
                  border-[#571244]

                  lg:h-2 lg:w-2
                "
              />
            </span>
          </Link>
        </li>

        <li className="flex shrink-0 items-center">
          <Link
            href="#"
            className="
              flex items-center gap-1
              whitespace-nowrap
              text-[0.7rem]
              font-normal
              leading-[150%]
              text-[#151515]
              hover:text-[#571244]
              focus:outline-none focus:ring-1 focus:ring-[#571244] rounded

              md:text-[0.8rem]
              lg:text-[1.125rem]
            "
          >
            <span>What We Do</span>
            <span className="flex h-4 w-4 shrink-0 items-center justify-center lg:h-5 lg:w-5">
              <span
                className="
                  h-1.5 w-1.5 rotate-45
                  border-b-[1.5px]
                  border-r-[1.5px]
                  border-[#571244]

                  lg:h-2 lg:w-2
                "
              />
            </span>
          </Link>
        </li>

        <li className="flex shrink-0 items-center gap-2">
          <Link
            href="#"
            className="
              flex items-center gap-1
              whitespace-nowrap
              text-[0.7rem]
              font-normal
              leading-[150%]
              text-[#151515]
              hover:text-[#571244]
              focus:outline-none focus:ring-1 focus:ring-[#571244] rounded

              md:text-[0.8rem]
              lg:text-[1.125rem]
            "
          >
            <span>Jobs</span>
            <span className="flex h-4 w-4 shrink-0 items-center justify-center lg:h-5 lg:w-5">
              <span
                className="
                  h-1.5 w-1.5 rotate-45
                  border-b-[1.5px]
                  border-r-[1.5px]
                  border-[#571244]

                  lg:h-2 lg:w-2
                "
              />
            </span>
          </Link>
        </li>

        <li className="flex shrink-0 items-center justify-center">
          <Link
            href="#"
            className="whitespace-nowrap text-[0.7rem] font-normal leading-[150%] text-[#151515] hover:text-[#571244] focus:outline-none focus:ring-1 focus:ring-[#571244] rounded md:text-[0.8rem] lg:text-[1.125rem]"
          >
            Projects
          </Link>
        </li>

        <li className="flex shrink-0 items-center justify-center">
          <Link
            href="#"
            className="whitespace-nowrap text-[0.7rem] font-normal leading-[150%] text-[#151515] hover:text-[#571244] focus:outline-none focus:ring-1 focus:ring-[#571244] rounded md:text-[0.8rem] lg:text-[1.125rem]"
          >
            TG Academy
          </Link>
        </li>

        <li className="flex shrink-0 items-center justify-center">
          <Link
            href="#"
            className="whitespace-nowrap text-[0.7rem] font-normal leading-[150%] text-[#151515] hover:text-[#571244] focus:outline-none focus:ring-1 focus:ring-[#571244] rounded md:text-[0.8rem] lg:text-[1.125rem]"
          >
            Strategic Partnership
          </Link>
        </li>

        <li className="flex shrink-0 items-center justify-center">
          <Link
            href="#"
            className="whitespace-nowrap text-[0.7rem] font-normal leading-[150%] text-[#151515] hover:text-[#571244] focus:outline-none focus:ring-1 focus:ring-[#571244] rounded md:text-[0.8rem] lg:text-[1.125rem]"
          >
            Pricing
          </Link>
        </li>

        <li className="flex shrink-0 items-center justify-center">
          <Link
            href="#"
            className="whitespace-nowrap text-[0.7rem] font-normal leading-[150%] text-[#151515] hover:text-[#571244] focus:outline-none focus:ring-1 focus:ring-[#571244] rounded md:text-[0.8rem] lg:text-[1.125rem]"
          >
            Book a consultation
          </Link>
        </li>
      </ul>
    </nav>
  );
}