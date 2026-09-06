import Image from "next/image";

function LightningIcon() {
  return (
    <svg
      width="16"
      height="20"
      viewBox="0 0 16 20"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M9.7 0L1 10.8h5.5L5.8 20 15 8.7H9.1L9.7 0Z"
        fill="currentColor"
      />
    </svg>
  );
}

const corporateTraining = [
  "Leadership Training",
  "Strategic Planning and Implementation",
  "Project Management",
  "Sustainability Training",
  "Customised Training",
];

const individualTraining = [
  "Leadership Development",
  "Soft Skills Development",
  "Industry Specific Knowledge",
  "Technical Skills Enhancement",
  "Time Management and Productivity",
  "Career Development",
];

const capacityDevelopment = [
  "Tailored Training Programs",
  "Expert-Led Workshops",
  "Personalized Mentorship",
  "Technical Skills Enhancement",
  "Collaborative Learning Environment",
  "Ongoing Support and Resources",
];

function TrainingList({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 flex flex-col gap-2.5">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-center gap-3 text-[16px] font-normal leading-[150%] text-[#6D6D6D]"
        >
          <span className="shrink-0 text-[#571244]">
            <LightningIcon />
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function TrainingImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <div className="relative order-2 h-[280px] w-full overflow-hidden rounded-[16px] md:row-span-3 md:self-center md:h-[340px] lg:h-[347px] lg:w-[604px]">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 604px"
      />
    </div>
  );
}

export default function Training() {
  return (
    <section className="w-full bg-white px-6 py-12 md:px-10 md:py-16 lg:px-16 lg:py-16">
      <div className="mx-auto flex w-full max-w-[1312px] flex-col gap-20 md:gap-24 lg:gap-[99px]">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-0 lg:grid-cols-[1fr_604px] lg:gap-[80px]">
          <h2 className="order-1 text-[28px] font-normal leading-[130%] tracking-[0.02em] text-[#151515] md:col-start-1 md:row-start-1 md:text-[32px] lg:text-[40px]">
            Corporate Trainings
          </h2>
          <TrainingImage
            src="/images/Training%20section%20images/corporate-trainings.jpg"
            alt="Corporate training session"
          />
          <p className="order-3 text-[14px] font-normal leading-[150%] text-[#6D6D6D] md:col-start-1 md:row-start-2 md:text-[15px] lg:text-[16px]">
            Empower your team with our customised Corporate Training programs designed to address the unique needs and objectives of your organisation. Our expert facilitators work closely with your team to deliver tailored learning experiences that align with your company&apos;s goals and values.
          </p>
          <div className="order-4 md:col-start-1 md:row-start-3">
            <TrainingList items={corporateTraining} />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-0 lg:grid-cols-[600px_1fr] lg:gap-[80px]">
          <h2 className="order-1 text-[28px] font-normal leading-[130%] tracking-[0.02em] text-[#151515] md:col-start-2 md:row-start-1 md:text-[32px] lg:text-[40px]">
            Personalised Individual Training
          </h2>
          <TrainingImage
            src="/images/Training%20section%20images/individual-training.jpg"
            alt="Individual training session"
          />
          <p className="order-3 text-[14px] font-normal leading-[150%] text-[#6D6D6D] md:col-start-2 md:row-start-2 md:text-[15px] lg:text-[16px]">
            Begin a journey of lifelong learning and professional development with Tobams Group&apos;s diverse range of training programs for individuals. From technical skills mastery to soft skills enhancement, our courses cover a wide spectrum of topics to meet the evolving needs of today&apos;s professionals.
          </p>
          <div className="order-4 md:col-start-2 md:row-start-3">
            <TrainingList items={individualTraining} />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-0 lg:grid-cols-[1fr_604px] lg:gap-[80px]">
          <h2 className="order-1 text-[28px] font-normal leading-[130%] tracking-[0.02em] text-[#151515] md:col-start-1 md:row-start-1 md:text-[32px] lg:text-[40px]">
            Capacity Development
          </h2>
          <TrainingImage
            src="/images/Training%20section%20images/capacity-development.jpg"
            alt="Capacity development training session"
          />
          <p className="order-3 text-[14px] font-normal leading-[150%] text-[#6D6D6D] md:col-start-1 md:row-start-2 md:text-[15px] lg:text-[16px]">
            At Tobams Group, we empower individuals and organizations through tailored training programs, expert-led workshops, and personalized mentorship. We are committed to your success and growth. We are dedicated to providing a comprehensive suite of benefits designed to foster your development and success:
          </p>
          <div className="order-4 md:col-start-1 md:row-start-3">
            <TrainingList items={capacityDevelopment} />
          </div>
        </div>
      </div>
    </section>
  );
}