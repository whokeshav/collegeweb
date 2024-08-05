"use client";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { WavyBackground } from "./ui/wavy-background";
const instructors = [
  {
    id: 1,
    name: "Neeraj Goel",
    designation: "President",
    image: "/photos/chairman1.jpg",
  },
  {
    id: 2,
    name: "Sachin Goel",
    designation: "Vice Preisdent",
    image: "/photos/vc-1.jpg",
  },
  {
    id: 3,
    name: "Devendra Kumar Sharma",
    designation: "Director",
    image: "/photos/directorabesec.jpg",
  },
  {
    id: 4,
    name: "S.K Singh",
    designation: "Director of Administration",
    image: "/photos/dsw.jpeg",
  },
];

function Instructors() {
  return (
    <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
      <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
        <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">
          Meet Our Board Of Directors
        </h2>
        <p className="text-base md:text-lg text-white text-center mb-4">
          Discover the talented professionals who will guide your College
          journey
        </p>
        <div className="flex flex-row items-center justify-center mb-10 w-full">
          <AnimatedTooltip items={instructors} />
        </div>
      </WavyBackground>
    </div>
  );
}

export default Instructors;
