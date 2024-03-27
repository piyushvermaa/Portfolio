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
          Developed an engaging website for ITARA, a marble and granite
          wholesaler, using Next.js and hosted on Hostinger. Strategically
          planned architecture, implemented custom features, and ensured
          seamless responsiveness for optimal user experience. Resulted in a
          visually stunning platform showcasing ITARA's products effectively,
          enhancing online presence and customer engagement
        </p>
      </>
    ),
    badge: "ItaraIndia",
    image: "/Itara.png",
  },

  {
    title: "Reactjs",
    description: (
      <>
        <p>
          Contributed as a Frontend Developer at Forgenet Lab, a cyber
          security-focused EdTech startup. Utilized React.js and Tailwind CSS,
          along with libraries like Three.js and Shadcn for UI development.
          Crafted engaging landing, about, login, and signup pages. Seamlessly
          integrated features to enhance user experience, driving the platform's
          growth in the cybersecurity education sector.
        </p>
      </>
    ),
    badge: "ForgeNet-Labs",
    image: "/Forgenet.png",
  },
];

const Experience = () => {
  return (
    <>
      <h1 className="text-4xl md:text-7xl  text-[#7e3bc6] text-center font-extrabold m-4 text-upside-down">
        Experience
      </h1>
      <TracingBeam className="px-6">
        <div className="max-w-2xl mx-auto antialiased pt-2 relative">
          {dummyContent.map((item, index) => (
            <div key={`content-${index}`} className="mb-10">
              <h2 className="bg-black text-[#6620B3] rounded-full text-2xl w-fit px-4 py-1 mb-4 font-semibold">
                {item.badge}
              </h2>

              <p className={twMerge("text-[#ffffffac] text-sm mb-4")}>
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
  );
};

export default Experience;
