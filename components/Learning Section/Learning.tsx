const learningItems = [
  "Strategic Career Guidance",
  "Leadership Development",
  "CV Development",
  "Sustainability Leadership",
  "Communication Skills",
  "Business Model",
];

const Learning = () => {
  return (
    <section className="w-full bg-white px-4 py-6 md:px-16 md:py-16">
      <div
        className="
          mx-auto flex w-full max-w-[1312px] flex-col
          gap-6 rounded-xl
          bg-[rgba(239,67,83,0.2)]
          p-4
          md:gap-10 md:rounded-2xl md:p-10
        "
      >
        <p className="text-sm font-semibold italic leading-[130%] text-[#1671D9] md:text-xl">
          Learning With Our CEO:
        </p>

        <h3 className="text-xl font-semibold italic leading-[130%] text-[#571244] md:text-[32px]">
          Transformation Hub With Jite Newton
        </h3>

        <p className="text-sm font-normal leading-[150%] text-[#151515] md:text-lg">
          Transformation Hub with Jite Newton is a flagship webinar series
          curated by the CEO, Dr. Jite Newton. Designed to elevate career
          trajectories and leadership capabilities, this exclusive event offers
          invaluable insights and strategies for personal and professional
          growth. Whether you&apos;re seeking to advance your career or enhance
          your leadership skills, the Transformation Hub provides a
          transformative learning experience to unlock your full potential and
          drive success in your endeavours.
        </p>

        <div
          className="
            flex w-full flex-col gap-8
            lg:flex-row lg:items-start lg:gap-8
          "
        >
          <div
            className="
              relative h-[232px] w-full shrink-0 overflow-hidden rounded-lg

              md:h-[300px]

              lg:h-[340px] lg:w-[46%] lg:max-w-[560px] xl:w-[560px]
            "
          >
            <img
              src="/images/Learnin section image/learning-section-image.jpg"
              alt="Learning with our CEO"
              className="h-full w-full object-cover"
            />
          </div>

          <div
            className="
              flex flex-1 flex-col items-center gap-6
              w-full

              lg:items-start lg:py-4
            "
          >
            <div className="flex w-[255px] flex-col items-start gap-6 sm:w-full">
              <div
                className="
                  grid w-full grid-cols-1 gap-3

                  sm:grid-cols-2 sm:gap-x-6 sm:gap-y-3
                "
              >
                {learningItems.map((text) => (
                  <LearningBox key={text} text={text} />
                ))}
              </div>

              <button
                type="button"
                className="
                  flex h-[45px] w-[153px] items-center justify-center
                  gap-2 rounded-[4px] bg-[#571244]
                  px-6 py-[10.5px]

                  lg:h-[48px] lg:w-[173px]
                "
              >
                <span className="whitespace-nowrap text-sm font-semibold leading-[150%] text-white lg:text-lg">
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
      </div>
    </section>
  );
};

type LearningBoxProps = {
  text: string;
};

const LearningBox = ({ text }: LearningBoxProps) => {
  return (
    <div
      className="
        flex h-[56px] w-[255px] items-center gap-2.5
        rounded-xl border border-[#E0E0E0] bg-white
        p-4

        sm:w-full lg:h-[60px]
      "
    >
      <img
        src="/icon/section icons/bolt.png"
        alt=""
        className="h-[21px] w-[16px] shrink-0"
      />

      <span className="min-w-0 whitespace-nowrap text-sm font-normal leading-[150%] text-[#151515]">
        {text}
      </span>
    </div>
  );
};

export default Learning;