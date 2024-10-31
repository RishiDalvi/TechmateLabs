"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const words = `We’re building something amazing and would love for you to be a part of it. Join Now.
`;

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} />;
}
