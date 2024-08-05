"use client";

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const musicSchoolTestimonials = [
  {
    quote:
      "During my stay of four years in ABES-EC, I am thankful to all the teachers who supported us and corrected us throughout our bachelors and the classes are very interactive and also faculties ensure that every student understands what is being taught before proceeding",
    name: "Anuja Kumari",
    title: "Civil Engineering",
  },
  {
    quote:
      "Well experienced faculties & educational level is high & college infrastructure is amazing",
    name: "Anjali Mahajan",
    title: "Information Technology Student ",
  },
  {
    quote:
      "The well-structured curriculum provided me with a solid foundation of knowledge and practical skills, while the dedicated faculty members ensured I thoroughly understood complex concepts. ",
    name: "Shivam Gupta",
    title: "CSE Student",
  },
  {
    quote:
      "Abes Curriculum brings the best out of you , With highly experienced faculties learning to the very core of subjects becomes easy , Highly Competitive and learning Environment helps students to adapt to current marketplace which assist in internships and placements further",
    name: "Shatmanyu Gupta",
    title: "CSE Student",
  },
];
function TestimonialCards() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-3xl font-bold text-white text-center mb-8 z-10">
        Hear our Harmony: Voices of success
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={musicSchoolTestimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
}

export default TestimonialCards;
