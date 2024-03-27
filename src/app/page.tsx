"use client"
import Experience from "@/components/Experience";
import HeroSpotlight from "@/components/HeroSpotlight";
import Profiles from "@/components/Profiles";
import Projects from "@/components/Projects";


export default function Home() {
  return (
    <div className="bg-black">
    <HeroSpotlight/>
    <Profiles/>
    <Experience/>
    <Projects/>
    </div>
  );
}
