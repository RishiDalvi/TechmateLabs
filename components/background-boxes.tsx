"use client";
import React from "react";
import { Boxes } from "./ui/background-boxes";
import { cn } from "@/lib/utils";
import { CardsCarousel } from "./carousel-card";

export function BackgroundBoxes() {
  return (
    <div className="h-full relative w-screen overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <div className="h-full w-screen overflow-x-hidden sm:m-4 sm:p-4 m-4 p-3 flex flex-col justify-center items-center">
        <h1 className="text-6xl text-blue-600 font-sans font-bold z-0">What we've done</h1>
        <span className="sm:text-2xl text-xl md:m-0 m-4 md:p-3 p-0 font-serif">We have assisted students in securing jobs, internships, and startup opportunities while fostering a robust tech community through hackathons, projects, and team activities. Our commitment to accessibility in education is reflected in providing free, open-source content, enabling everyone to stay updated with technological advancements and the latest technological advancements. Through these efforts, we support aspiring tech leaders in innovating and developing solutions that make a global impact </span>
        <CardsCarousel/>
    </div>
      
    </div>
  );
}
