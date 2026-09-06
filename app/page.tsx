import Hero from "@/components/Hero Section/Hero";
import Navbar from "@/components/Navbar/Navbar";
import LMS from "@/components/LMS Section/LMS"
import Management from "@/components/Management Section/Management";
import Training from "@/components/Training Section/Training";
import Learning from "@/components/Learning Section/Learning";
import Consultant from "@/components/Consultant Section/Consultant";
import Booking from "@/components/Booking Section/Booking";
import Testimonials from "@/components/Testimonials Section/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <LMS />
        <Training />
        <Management />
        <Learning />
        <Consultant />
        <Booking />
        <Testimonials />
      </main>
    </>
  );
}