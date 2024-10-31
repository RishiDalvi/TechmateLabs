"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import { ProjectForm } from "./projectform";

export function BackgroundGradientDemo() {
  return (
    <div>
      <BackgroundGradient className="rounded-[22px] w-full p-4 sm:p-10 bg-white dark:bg-zinc-900 flex justify-center items-center">
        <ProjectForm />
      </BackgroundGradient>
    </div>
  );
}
