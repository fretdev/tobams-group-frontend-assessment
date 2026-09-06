import Image from "next/image";

const benefits = [
  "Enhanced Leadership Skills",
  "Improved Employee Engagement",
  "Stronger Organisational Culture",
  "Sustainable Growth",
];

function LightningIcon() {
  return (
    <svg
      width="22"
      height="28"
      viewBox="0 0 22 28"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <path
        d="M13.34 0 1.38 15.12h7.57L7.98 28 20.62 12.18h-8.1L13.34 0Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Management() {
  return (
    <section className="w-full bg-[#F9F9F9] px-6 py-6 md:px-8 md:py-10 lg:px-16 lg:py-16">
      <div className="mx-auto grid w-full max-w-[1312px] items-center gap-8 rounded-[24px] bg-[#360A29] p-6 text-white md:p-10 lg:grid-cols-2 lg:gap-12 lg:p-12">
        <h2 className="order-1 text-[16px] font-normal leading-[150%] md:text-[24px] lg:hidden">
          Management Development Program
        </h2>

        <div className="relative order-2 aspect-[4/3] w-full overflow-hidden rounded-[12px] md:aspect-[4/3] lg:aspect-[592/639] lg:h-full">
          <Image
            src="/images/Management%20image/management-image.jpg"
            alt="Professionals collaborating during a management training session"
            fill
            className="object-cover"
            sizes="(max-width: 1023px) 100vw, 592px"
            priority
          />
        </div>

        <div className="order-3 flex flex-col justify-center gap-6 lg:col-start-2 lg:row-start-1">
          <h2 className="hidden font-nunito text-[32px] font-semibold leading-[130%] tracking-[0.03em] lg:block lg:text-[40px]">
            Management Development Program
          </h2>

          <div className="flex flex-col gap-4 text-[14px] leading-[150%] md:text-[16px] lg:text-[18px]">
            <p className="font-normal text-white/90">
              Tobams Group offers a comprehensive Management Development Program
              designed to equip corporate organisations with the high-performing
              leaders they need to thrive.
            </p>
            <p className="font-normal text-white/90">
              Our program includes workshops, seminars, coaching sessions, online
              courses, and experiential learning opportunities designed to improve
              leadership, strategic thinking, communication, and other essential
              managerial competencies for corporate organisations.
            </p>
          </div>

          <ul className="flex flex-col gap-3 pt-2">
            {benefits.map((benefit) => (
              <li
                key={benefit}
                className="flex items-center gap-3 rounded-[8px] bg-[#93658A] px-4 py-3 text-[14px] font-medium leading-[150%] md:text-[16px] lg:text-[18px]"
              >
                <LightningIcon />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}