"use client";
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";

function UpcomingWebinars() {
  const featuredWebinars = [
    {
      title: "Number of Placement ",
      description: "851",
      slug: "Number of Placement",
      isFeatured: true,
    },
    {
      title: "Dream Offers",
      description: "129",
      slug: "Dream Offers",
      isFeatured: true,
    },
    {
      title: "Highest Salary Package ",
      description: "35 LPA",
      slug: "Highest Salary Package ",
      isFeatured: true,
    },
    {
      title: "Total Company Visited ",
      description: "406",
      slug: "Total Company Visited ",
      isFeatured: true,
    },
    // Added two more webinars
    {
      title: "Top Mass Hiring Companies",
      description: "735+ Offers",
      slug: "Top Mass Hiring Companies",
      isFeatured: true,
    },
  ];

  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            PLACEMENT STORIES
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            1604+ Placement Offers
          </p>
        </div>

        <div className="mt-10">
          <HoverEffect
            items={featuredWebinars.map((webinar) => ({
              title: webinar.title,
              description: webinar.description,
              link: "/",
            }))}
          />
        </div>

        <div className="mt-10 text-center">
          <Link
            href={"/"}
            className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
          >
            View All Stats
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UpcomingWebinars;
