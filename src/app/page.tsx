"use client"
import Experience from "@/components/Experience";
import HeroSpotlight from "@/components/HeroSpotlight";
import Profiles from "@/components/Profiles";


export default function Home() {
  return (
    <div className="bg-black">
    <HeroSpotlight/>
    <Profiles/>
    <Experience/>
    </div>
  );
}
