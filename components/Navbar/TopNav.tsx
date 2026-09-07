"use client";

import Image from "next/image";
import { useState } from "react";

export default function TopNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav
        className="
          flex h-[4.75rem] w-full items-center justify-between
          bg-[#F9F9F9]
          px-6 pt-[1.125rem] pb-4
          shadow-[0_0_2px_0_rgba(0,0,0,0.25)]

          sm:h-[4.75rem]
          sm:px-6 sm:pt-[1.125rem] sm:pb-4

          md:h-[6.5rem]
          md:px-6 md:py-6
          md:border-b md:border-[#DDD0DA]
          md:shadow-none
          md:bg-white

          lg:h-[6.5rem]
          lg:px-6 lg:py-6
          lg:border-b lg:border-[#DDD0DA]
          lg:shadow-none
          lg:bg-white
        "
      >
        <Image
          src="/images/Navbar images/logo.svg"
          alt="Tobams Group logo"
          width={124}
          height={42}
          className="
            h-[2.625rem] w-[7.75rem]

            md:h-16 md:w-[10.357rem]
            lg:h-16 lg:w-[10.357rem]
          "
        />

        <button
          type="button"
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="
            flex h-8 w-8 shrink-0
            items-center justify-center
            bg-transparent

            md:hidden
            lg:hidden
          "
        >
          <Image
            src="/images/Navbar images/hamburger.svg"
            alt=""
            width={27}
            height={27}
          />
        </button>

        <div
          className="
            hidden items-center justify-end
            gap-2

            md:flex
            md:h-10
            md:w-auto

            lg:h-12
            lg:w-[23.375rem]
            lg:gap-6
          "
        >
          <button
            type="button"
            className="
              flex h-10 w-[8.75rem] shrink-0
              items-center
              gap-2
              rounded-[0.25rem]
              border border-[#571244]
              bg-[#571244]
              px-2.5 py-1.5

              lg:h-12
              lg:w-[10.4375rem]
              lg:gap-3
              lg:px-4
              lg:py-2
            "
          >
            <span
              className="
                flex h-7 w-7 shrink-0
                items-center justify-center
                rounded-2xl
                bg-[#DDD0DA]

                lg:h-8 lg:w-8
              "
            >
              <span
                className="
                  relative flex h-5 w-5
                  items-center justify-center

                  lg:h-6 lg:w-6
                "
              >
                <Image
                  src="/images/Navbar images/user-icon.svg"
                  alt=""
                  width={12}
                  height={18}
                  className="
                    h-[0.9375rem] w-[0.625rem]

                    lg:h-[1.125rem] lg:w-3
                  "
                />
              </span>
            </span>

            <span
              className="
                relative
                flex shrink-0
                items-center
                whitespace-nowrap
              "
            >
              <span
                className="
                  text-[0.875rem]
                  font-semibold
                  leading-[150%]
                  text-white

                  lg:text-[1.125rem]
                "
              >
                Account
              </span>

              <span
                className="
                  relative
                  ml-1
                  flex h-5 w-5 shrink-0
                  items-center justify-center
                "
              >
                <span
                  className="
                    absolute
                    left-1/2 top-1/2
                    h-1.5 w-1.5
                    -translate-x-1/2
                    -translate-y-[65%]
                    rotate-45
                    border-b-[1.5px]
                    border-r-[1.5px]
                    border-[#DDD0DA]

                    lg:h-2 lg:w-2
                  "
                />
              </span>
            </span>
          </button>

          <button
            type="button"
            className="
              flex h-10 w-[9.5rem] shrink-0
              items-center justify-center
              rounded-[0.25rem]
              bg-[#EF4353]
              px-2.5 py-1.5

              lg:h-12
              lg:w-[11.4375rem]
              lg:gap-2.5
              lg:px-5
              lg:py-[0.65625rem]
            "
          >
            <span
              className="
                flex h-6
                items-center justify-center
                whitespace-nowrap
                text-[0.875rem]
                font-semibold
                leading-[150%]
                text-white

                lg:h-[1.6875rem]
                lg:w-[8.9375rem]
                lg:text-[1.125rem]
              "
            >
              Take Assessment
            </span>
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div
          className="
            w-full
            bg-[#11040e]
            px-6 py-8

            md:hidden
            lg:hidden
          "
        >
          <ul className="flex w-full flex-col items-center gap-6">
            <li>
              <button
                type="button"
                className="
                  flex items-center gap-2
                  text-base font-semibold
                  leading-[150%] text-white
                "
              >
                About

                <span className="flex h-4 w-4 items-center justify-center">
                  <span
                    className="
                      h-1.5 w-1.5
                      rotate-45
                      border-b-[1.5px]
                      border-r-[1.5px]
                      border-[#DDD0DA]
                    "
                  />
                </span>
              </button>
            </li>

            <li>
              <button
                type="button"
                className="
                  flex items-center gap-2
                  text-base font-normal
                  leading-[150%] text-white
                "
              >
                What We Do

                <span className="flex h-4 w-4 items-center justify-center">
                  <span
                    className="
                      h-1.5 w-1.5
                      rotate-45
                      border-b-[1.5px]
                      border-r-[1.5px]
                      border-[#DDD0DA]
                    "
                  />
                </span>
              </button>
            </li>

            <li>
              <button
                type="button"
                className="
                  flex items-center gap-2
                  text-base font-normal
                  leading-[150%] text-white
                "
              >
                Jobs

                <span className="flex h-4 w-4 items-center justify-center">
                  <span
                    className="
                      h-1.5 w-1.5
                      rotate-45
                      border-b-[1.5px]
                      border-r-[1.5px]
                      border-[#DDD0DA]
                    "
                  />
                </span>
              </button>
            </li>

            <li>
              <button
                type="button"
                className="
                  text-base font-normal
                  leading-[150%] text-white
                "
              >
                Projects
              </button>
            </li>

            <li>
              <button
                type="button"
                className="
                  text-base font-normal
                  leading-[150%] text-white
                "
              >
                TG Academy
              </button>
            </li>

            <li>
              <button
                type="button"
                className="
                  text-base font-normal
                  leading-[150%] text-white
                "
              >
                Strategic Partnership
              </button>
            </li>

            <li>
              <button
                type="button"
                className="
                  text-base font-normal
                  leading-[150%] text-white
                "
              >
                Pricing
              </button>
            </li>

            <li>
              <button
                type="button"
                className="
                  text-base font-normal
                  leading-[150%] text-white
                "
              >
                Book a consultation
              </button>
            </li>
          </ul>

          <div className="mt-8 flex w-full flex-col items-center gap-4">
            <button
              type="button"
              className="
                flex h-12 w-full max-w-[20rem]
                items-center justify-center
                gap-3
                rounded-[0.25rem]
                border border-[#DDD0DA]
                bg-[#571244]
                px-4 py-2
              "
            >
              <span
                className="
                  flex h-8 w-8 shrink-0
                  items-center justify-center
                  rounded-2xl
                  bg-[#DDD0DA]
                "
              >
                <span className="relative flex h-6 w-6 items-center justify-center">
                  <Image
                    src="/images/Navbar images/user-icon.svg"
                    alt=""
                    width={12}
                    height={18}
                  />
                </span>
              </span>

              <span
                className="
                  flex items-center
                  whitespace-nowrap
                  text-[1.125rem]
                  font-semibold
                  leading-[150%]
                  text-white
                "
              >
                Account

                <span
                  className="
                    relative
                    ml-1
                    flex h-5 w-5 shrink-0
                    items-center justify-center
                  "
                >
                  <span
                    className="
                      absolute
                      left-1/2 top-1/2
                      h-2 w-2
                      -translate-x-1/2
                      -translate-y-[65%]
                      rotate-45
                      border-b-[1.5px]
                      border-r-[1.5px]
                      border-[#DDD0DA]
                    "
                  />
                </span>
              </span>
            </button>

            <button
              type="button"
              className="
                flex h-12 w-full max-w-[20rem]
                items-center justify-center
                rounded-[0.25rem]
                bg-[#EF4353]
                px-5 py-[0.65625rem]
              "
            >
              <span
                className="
                  whitespace-nowrap
                  text-[1.125rem]
                  font-semibold
                  leading-[150%]
                  text-white
                "
              >
                Take Assessment
              </span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}