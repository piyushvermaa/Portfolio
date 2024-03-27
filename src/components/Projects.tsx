"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";
const Projects = () => {
  const content = [
    {
      title: "Coders Ground",
      description:
        "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src="/Coderground.png"
            width={2000}
            height={1500}
            className="h-full w-full object-fit"
            alt="Coders Ground"
          />
        </div>
      ),
      imgurl: ""
    },
    {
      title: "Dashboard",
      description:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src="/linear.webp"
            width={1500}
            height={1500}
            className="h-full w-full object-cover"
            alt="DashBoard"
          />
        </div>
      ),
    },
    {
      title: "Weather App",
      description:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src="/weatherapp.png"
            width={1500}
            height={1500}
            className="h-full w-full object-cover"
            alt="Weather app"
          />
        </div>
      ),
    },
  ];

  return (
    <div className="mt-10 pt-10 flex flex-col justify-center">
        <span className="text-4xl md:text-7xl  text-[#7e3bc6] text-center font-extrabold m-4 text-upside-down">
        Projects
      </span>
      <StickyScroll content={content} />
    </div>
  );
};

export default Projects;
