import Image from "next/image";
import HeroSection from "../components/HeroSection";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans  ">
      <HeroSection />
    </div>
  );
}
