import Hero from "@/components/Hero Section/Hero";
import Navbar from "@/components/Navbar/Navbar";
import LMS from "@/components/LMS Section/LMS"
import Management from "@/components/Management Section/Management";
import Training from "@/components/Training Section/Training";
import Learning from "@/components/Learning Section/Learning";

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
      </main>
    </>
  );
}