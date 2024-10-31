import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import Image from "next/image";

export function BackgroundBeamsWithCollisionDemo() {
  return (
    <BackgroundBeamsWithCollision>
      <div className="flex flex-col justify-center items-center px-6">
        <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
          Who Are We
        </h2>
        <div className="relative mx-auto max-w-2xl text-center mt-6 [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
          <p className="text-lg md:text-xl lg:text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-green-700 to-cyan-600 leading-relaxed">
            We’re a student-led club founded to bridge the gap between skillful students and job opportunities. Our focus is on fostering collaboration, skill development, and participation in tech events like hackathons.
          </p>
          <p className="text-lg md:text-xl lg:text-2xl mt-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-green-700 to-cyan-600 leading-relaxed">
            Join us in advancing your career and skills within our supportive community.
          </p>

          <div className="flex flex-col justify-center items-center m-2 p-2 ">
            <Image src={"/assets/images/image7.png"} height={200} width={200} alt={"logo"} className="m-2 p-2 rounded-2xl"></Image>
            <span className="text-base font-sans font-semibold m-1 p-1">Rushikesh Urmila Rajaram Dalavi</span>
            <span className="text-lg text-green-700 font-serif font-medium">Founder</span>
        </div>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
