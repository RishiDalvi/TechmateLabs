"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import Image from "next/image";

export function History() {
  return (
    <div className="h-full w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent text-white  text-center font-sans font-bold">
          History
        </h1>
        <p></p>
        <p className="text-neutral-500 mx-auto my-2 text-xl text-center relative z-10">
        <br /><br />The club started when I, Rushikesh Rajaram Dalavi, along with my friends, noticed that companies were struggling to find skilled employees or interns, and students could not find internships and opportunities. We created a community where everyone could help each other grow their skills. Attending multiple startup events, tech gatherings, and hackathons reinforced the importance of such a community on our campus. Our initial goal was clear: to develop tech skills, collaborate on projects, participate in hackathons, and eventually secure internships or jobs in startups.

        <br /><br />Starting the club came with challenges like recruiting members individually, promoting our activities at events, and gathering resources and courses to share with everyone. It brings me immense happiness to see many students join the club, benefit from it, and seek help from me and other members. Our team finds even greater joy in witnessing our members&apos; progress and successes.
        </p>
        <div className="flex justify-center items-center m-2 p-2 ">
            <Image src={"/assets/images/image5.jpeg"} height={400} width={400} alt={"logo"} className="m-2 p-2 rounded-3xl"></Image>
            <Image src={"/assets/images/image6.jpeg"} height={400} width={400} alt={"logo"} className="m-2 p-2 rounded-3xl"></Image>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}
