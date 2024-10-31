"use client"
import React, { useRef } from 'react';
import { TextGenerateEffectDemo } from '@/components/text-generation';
import Link from 'next/link';
import Image from 'next/image';
import { BackgroundGradientDemo } from '@/components/background-gradient';

const Join = () => {
  const backgroundRef = useRef<HTMLDivElement | null>(null);

  const scrollToBackground = () => {
    if (backgroundRef.current) {
      backgroundRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col justify-center items-center m-2 p-2">
      <h1 style={{ fontFamily: "Tenada" }} className="sm:text-6xl text-3xl text-blue-600 dark:text-blue-600 font-bold p-3">
        Join as
      </h1>
      <div className="p-2 m-3">
        <TextGenerateEffectDemo />
      </div>
      <div className="h-full w-full m-2 p-1 flex flex-col justify-center items-center">
        <div className="h-screen flex flex-col justify-center items-center gap-6">
          <h2 className="text-6xl text-blue-600 font-sans font-bold">Club Member</h2>
          <div className="md:flex gap-52 m-3 p-2 justify-center items-center">
            <div>
              <Image src="/assets/images/image10.jpg" height={500} width={500} alt="logo" />
            </div>
            <div className="m-3 p-1">
              <Link href="https://chat.whatsapp.com/HrdKDyAV3KCIiErrW11adL" target="_blank">
                <span className="md:m-2 md:p-2 bg-green-500 text-white rounded-lg md:text-4xl text-3xl font-bold">Join</span>
              </Link>
              <ul className="mt-3 sm:text-2xl m-1 p-1 list-disc list-inside text-lg">
                <li>Study Material</li>
                <li>Training Material</li>
                <li>Jobs/Internship Updates</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="h-screen flex flex-col justify-center items-center gap-6">
          <h2 className="text-6xl text-blue-600 font-sans font-bold">Pro Club Member</h2>
          <div className="md:flex gap-52 m-3 p-2 justify-center items-center">
            <div className="m-3 p-1">
              <Link href="https://nas.io/techmate" target="_blank">
                <span className="md:m-2 md:p-2 bg-green-500 text-white rounded-lg md:text-4xl text-3xl font-bold">Join</span>
              </Link>
              <ul className="mt-3 sm:text-2xl m-1 p-1 list-disc list-inside text-lg">
                <li>All Benefits Of Club Member</li>
                <li>Project Contribution</li>
                <li>Mentor Support</li>
                <li>Startup Meetup</li>
              </ul>
            </div>
            <div>
              <Image src="/assets/images/image11.jpg" height={500} width={500} alt="logo" />
            </div>
          </div>
        </div>
        <div className="h-full flex flex-col justify-center items-center gap-6">
          <h2 className="text-6xl text-blue-600 font-sans font-bold">Project Teams</h2>
          <div className="md:flex gap-52 m-3 p-2 justify-center items-center">
            <div className="gap-3">
              <Image src="/assets/images/image12.jpg" height={500} width={500} alt="logo" className="m-2 p-1" />
              <Image src="/assets/images/image13.jpg" height={500} width={500} alt="logo" className="m-2 p-1" />
            </div>
            <div className="m-3 p-1">
              <button onClick={scrollToBackground}>
                <span className="md:m-2 md:p-2 bg-green-500 text-white rounded-lg md:text-4xl text-3xl font-bold">Join</span>
              </button>
              <ul className="mt-3 sm:text-2xl m-1 p-1 list-disc list-inside text-lg">
                <li>Working on Real Industry need Projects</li>
                <li>Project Completion Certificate</li>
                <li>Team leading</li>
                <li>Accommodation for Hackathons</li>
                <li>+many more</li>
              </ul>
            </div>
          </div>
          <div ref={backgroundRef}>
            <BackgroundGradientDemo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;