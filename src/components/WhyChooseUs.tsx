"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Vision",
    description:
      "To take ABES Engineering College to such a level that, it is at par with the leading institutions of the world in providing leadership to the international education system and be amongst the top rated institutions of the world by providing a transformative education to create leaders and innovators embedded in traditional Indian values.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Vision
      </div>
    ),
  },
  {
    title: "Mission",
    description:
      "o develop an environment for creating new knowledge through research and by thriving to explore innovative ideas.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Core Values",
    description:
      "We are responsible for what our thoughts make us and adhering to this maxim, ABESEC stands firmly on the pillars of the following core values",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Running out of content
      </div>
    ),
  },
];
function WhyChooseUs() {
  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  );
}

export default WhyChooseUs;
