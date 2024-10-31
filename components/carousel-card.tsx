"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function CardsCarousel() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
              Innovate, Communicate, Empower – Building Tomorrow’s Talent Today
              </span>{" "}
              <Image
              src="/assets/images/image9.jpg"
              alt="dummy"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
              <br /><br />At our club, we believe that building a successful career starts with three pillars: Innovation, Communication, and Empowerment.

<br /><br />Innovate: "Fueling the Next Wave of Visionaries"
Our club fosters a creative space where ideas become solutions. Through hackathons, workshops, and hands-on projects, members explore cutting-edge technology and hone skills that set them apart. We encourage members to experiment boldly, collaborate closely, and push boundaries to find inventive approaches that make an impact.

<br /><br />Communicate: "Where Connections Spark Success"
We know that bridging talent with opportunity requires communication and connection. By engaging in networking events, tech gatherings, and collaborative initiatives, our members connect directly with industry professionals, startups, and mentors. These interactions allow them to refine soft skills, gain insider knowledge, and form valuable relationships that pave the way for internships and careers.

<br /><br />Empower: "Equipping Talent to Transform Potential into Achievement"
Empowerment is at the heart of what we do. Through targeted resources, mentorship, and real-world experiences, we help our members gain confidence, strengthen expertise, and build the professional profiles they need to succeed. From technical training to personal growth, our mission is to equip students with the skills to seize opportunities, innovate in their fields, and shape the future.

<br /><br />Together, these pillars don’t just prepare students for a career—they set them on a path to lead, create, and inspire.
            </p>
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Innovate",
    title: "Fueling ideas into impact.",
    src: "/assets/images/image2.jpg",
    content: <DummyContent />,
  },
  {
    category: "Communicate",
    title: "Bridging skills with opportunity.",
    src: "/assets/images/image3.jpg",
    content: <DummyContent />,
  },
  {
    category: "Empower",
    title: "Empowering talent to shape the future.",
    src: "/assets/images/image4.jpg",
    content: <DummyContent />,
  }
];
