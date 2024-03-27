"use client";
import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "./ui/tracing-beam";



const dummyContent = [
    {
      title: "Nextjs",
      description: (
        <>
          <p>
            Tempor quis dolor veniam quis dolor. Sit reprehenderit eiusmod
            reprehenderit deserunt amet laborum consequat adipisicing officia qui
            irure id sint adipisicing. Adipisicing fugiat aliqua nulla nostrud.
            Amet culpa officia aliquip deserunt veniam deserunt officia
            adipisicing aliquip proident officia sunt.
          </p>
        </>
      ),
      badge: "ItaraIndia",
      image:"/Itara.png"
    },
    
    {
      title: "Reactjs",
      description: (
        <>
          <p>
            Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
            deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
            non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur
            sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea
            velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam
            commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
          </p>
        </>
      ),
      badge: "ForgeNet-Labs",
      image:"/Forgenet.png"
     },
  ];



const Experience = () => {
  return (
    <>
    <h1 className="text-4xl md:text-7xl  text-[#7e3bc6] text-center font-extrabold m-4 text-upside-down">Experience</h1>
    <TracingBeam className="px-6">
    <div className="max-w-2xl mx-auto antialiased pt-2 relative">
      {dummyContent.map((item, index) => (
        <div key={`content-${index}`} className="mb-10">
          <h2 className="bg-black text-[#6620B3] rounded-full text-2xl w-fit px-4 py-1 mb-4 font-semibold">
            {item.badge}
          </h2>

          <p className={twMerge( "text-[#ffffffac] text-sm mb-4")}>
            {item.title}
          </p>

          <div className="text-sm text-[#e9e9e9] prose prose-sm dark:prose-invert">
            {item?.image && (
              <Image
                src={item.image}
                alt="blog thumbnail"
                height="1000"
                width="1000"
                className="rounded-lg mb-10 object-cover"
              />
            )}
            {item.description}
          </div>
        </div>
      ))}
    </div>
  </TracingBeam>
  </>
  )
}

export default Experience
