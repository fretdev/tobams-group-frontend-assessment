import Image from "next/image";

const coursesCol1 = ["Business Analysis", "Design Thinking", "Effective Communication"];
const coursesCol2 = ["Entrepreneurship", "Career Development", "Business model"];
const allCourses = [...coursesCol1, ...coursesCol2];

export default function LMS() {
  return (
    <section className="w-full bg-[#5712441A] py-6 lg:bg-white lg:py-10">
      <div className="w-full px-6 lg:bg-[#5712441A] lg:px-0">
        <div
          className="
            mx-auto flex w-full max-w-[327px] flex-col items-center gap-6

            md:max-w-[700px]

            lg:max-w-[1312px] lg:flex-row lg:items-center lg:gap-10 xl:gap-20
            lg:px-16 lg:py-[58px]
          "
        >
          <h2
            className="
              w-full text-center text-xl font-semibold leading-[150%]
              tracking-[0.03em] text-[#571244]

              md:text-[1.75rem]

              lg:hidden
            "
          >
            Learning Management System
          </h2>

          <div
            className="
              relative aspect-square w-full overflow-hidden
              rounded-[357.57px]

              md:max-w-[400px]

              lg:aspect-[557/568] lg:h-auto lg:w-[42.5%] lg:max-w-[556.88px]
            "
          >
            <Image
              src="/images/lms image folder/lms-section-image.jpg"
              alt="Learning Management System"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 767px) 327px, (max-width: 1023px) 400px, 557px"
            />
          </div>

          <div
            className="
              flex min-w-0 flex-1 flex-col gap-6

              lg:gap-10 xl:gap-14
            "
          >
            <h2
              className="
                hidden whitespace-nowrap text-[1.875rem] font-semibold leading-[150%]
                tracking-[0.03em] text-[#571244]

                lg:block xl:text-[2.5rem]
              "
            >
              Learning Management System
            </h2>

            <div
              className="
                flex flex-col gap-6 rounded-lg bg-[#5712441A] p-6

                lg:gap-5
              "
            >
              <p
                className="
                  text-base font-normal leading-[150%] text-[#151515]

                  lg:text-lg
                "
              >
                TG Academy is a hub of knowledge and skill-building resources
                designed to empower tech talents on their learning journey. From
                technical courses covering the latest programming languages and
                development frameworks to soft skills training in leadership,
                effective communication and project management, TG Academy offers
                a wide range of courses to cater to diverse learning needs. With
                accessible and interactive learning materials, individuals can
                enhance their skills and stay ahead in today&apos;s competitive tech
                landscape.
              </p>

              <div className="flex flex-col gap-3">
                <p
                  className="
                    text-base font-bold leading-[150%] text-[#571244]

                    lg:text-lg
                  "
                >
                  Some of our courses include:
                </p>

                <ul className="flex list-disc flex-col gap-3 pl-5 lg:hidden">
                  {allCourses.map((course) => (
                    <li
                      key={course}
                      className="text-sm font-normal leading-[150%] text-[#151515]"
                    >
                      {course}
                    </li>
                  ))}
                </ul>

                <div className="hidden flex-col gap-3 lg:flex">
                  <ul className="flex list-disc flex-wrap gap-x-8 pl-5">
                    {coursesCol1.map((course) => (
                      <li
                        key={course}
                        className="text-base font-normal leading-[150%] text-[#151515]"
                      >
                        {course}
                      </li>
                    ))}
                  </ul>
                  <ul className="flex list-disc flex-wrap gap-x-8 pl-5">
                    {coursesCol2.map((course) => (
                      <li
                        key={course}
                        className="text-base font-normal leading-[150%] text-[#151515]"
                      >
                        {course}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <button
              type="button"
              className="
                flex h-12 items-center justify-center gap-2 rounded
                bg-[#571244] px-6 py-[10.5px]

                w-[153px] text-sm

                lg:w-[173px] lg:text-lg
              "
            >
              <span className="whitespace-nowrap font-semibold leading-[150%] text-white">
                Learn More
              </span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="shrink-0"
              >
                <path
                  d="M7 17L17 7M17 7H7M17 7V17"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}