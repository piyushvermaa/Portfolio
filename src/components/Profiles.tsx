"use client";

import Image from "next/image";
import { Tabs } from "./ui/tabs";

const Profiles = () => {
  const tabs = [
    {
      title: "LinkedIn",
      value: "LinkedIn",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>LinkedIn</p>
          <Image
            src="/LinkedIn.png"
            alt="dummy image"
            width="1000"
            height="1000"
            className="object-cover object-left-top h-[60%]  md:h-[90%] absolute mt-5 inset-x-0 w-[90%] rounded-xl mx-auto"
          />
        </div>
      ),
    },
    {
      title: "LeetCode",
      value: "LeetCode",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>LeetCode</p>
          <Image
            src="/Leetcode.png"
            alt="dummy image"
            width="1000"
            height="1000"
            className="object-cover object-left-top h-[60%]  md:h-[90%] absolute mt-5 inset-x-0 w-[90%] rounded-xl mx-auto"
          />
        </div>
      ),
    },
    {
      title: "Github",
      value: "Github",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Github</p>
          <Image
            src="/Github.png"
            alt="dummy image"
            width="1000"
            height="1000"
            className="object-cover object-left-top h-[60%]  md:h-[90%] absolute mt-5 inset-x-0 w-[90%] rounded-xl mx-auto"
          />
        </div>
      ),
    },
    {
      title: "CodeForces",
      value: "CodeForces",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>CodeForces</p>
          <Image
            src="/Codeforces.png"
            alt="dummy image"
            width="1000"
            height="1000"
            className="object-cover object-left-top h-[60%]  md:h-[90%] absolute mt-5 inset-x-0 w-[90%] rounded-xl mx-auto"
          />
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="h-[25rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40 bg-black m-2">
        <Tabs tabs={tabs} />
      </div>
    </>
  );
};

export default Profiles;
