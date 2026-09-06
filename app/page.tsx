import Hero from "@/components/Hero Section/Hero";
import Navbar from "@/components/Navbar/Navbar";
import LMS from "@/components/LMS Section/LMS"
import Training from "@/components/Training Section/Training";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <LMS />
        <Training />
      </main>
    </>
  );
}