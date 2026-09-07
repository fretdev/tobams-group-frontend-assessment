import Image from "next/image";
import HeroContent from "./HeroContent";

export default function Hero() {
  return (
    <section
      className="
        relative
        flex
        h-[19.8125rem]
        w-full
        items-center
        justify-center
        overflow-hidden
        px-6
        py-10

        md:h-[26rem]
        md:px-10
        md:py-16

        lg:h-[31.9375rem]
        lg:gap-12
        lg:px-16
        lg:py-28
      "
    >
      <Image
        src="/images/hero image folder/hero image.jpg"
        alt="Hero background"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-[#000000B2]" />

      <div className="relative z-10 flex w-full justify-center">
        <HeroContent />
      </div>
    </section>
  );
}