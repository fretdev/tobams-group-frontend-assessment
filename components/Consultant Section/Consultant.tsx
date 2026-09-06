const consultantFeatures = [
  {
    title: "Expert-Led Learning",
    description:
      "Gain insight from seasoned professionals in the field as they mentor you through the subtleties of business analysis.",
  },
  {
    title: "Comprehensive Curriculum",
    description:
      "Access a robust curriculum that covers fundamental principles and advanced methodologies, ensuring a well-rounded understanding.",
  },
  {
    title: "Interactive Workshops",
    description:
      "Engage in hands-on workshops designed to enhance your training capabilities and provide practical insights.",
  },
  {
    title: "Global Recognition",
    description:
      "You will attain a globally recognized certification, opening doors to new career opportunities and industry recognition.",
  },
];

export default function Consultant() {
  return (
    <section className="w-full bg-[#5712441A] px-4 py-8 md:px-10 md:py-12 lg:px-16 lg:py-16">
      <div className="mx-auto flex w-full max-w-[1312px] flex-col gap-6 md:gap-8">
        <div className="flex flex-col gap-3 md:gap-4">
          <h2 className="text-[28px] font-semibold leading-[130%] text-[#571244] md:text-[36px] lg:text-[40px]">
            Training The Consultant
          </h2>

          <p className="text-[16px] font-semibold leading-[150%] tracking-[0%] text-[#571244]">
            Maximize Your Potential as a Certified Trainer:
          </p>

          <p className="text-[14px] font-normal leading-[150%] tracking-[0%] text-[#151515]">
            With the help of our Business Analysis Training Consultants program,
            take a revolutionary step toward becoming a distinguished certified
            trainer. Learn from professionals in the field, immerse yourself in a
            thorough curriculum, and hone your training methods through
            interactive workshops. Participating in our program will enable you
            to gain expertise in Business Analysis while also developing the
            abilities to mentor and encourage others in their career
            advancement.
          </p>
        </div>

        <div className="w-full rounded-2xl bg-[#571244] p-6 text-white md:p-8 lg:p-10">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:gap-x-16">
            {consultantFeatures.map((feature) => (
              <div key={feature.title} className="flex flex-col gap-2">
                <h3 className="text-[16px] font-semibold leading-[140%] text-white md:text-[18px]">
                  {feature.title}
                </h3>
                <p className="text-[14px] font-normal leading-[150%] text-white/90 md:text-[15px] lg:text-[16px]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          className="
            flex h-[45px] w-[153px] items-center justify-center
            gap-2 rounded-[8px] bg-[#571244]
            px-6 py-[10.5px]

            md:rounded-[4px] lg:h-[48px] lg:w-[173px]
          "
        >
          <span className="whitespace-nowrap text-sm font-semibold leading-[150%] text-white lg:text-lg">
            Learn more
          </span>

          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="shrink-0"
          >
            <path
              d="M9 5L16 12L9 19"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}
