"use client";
import React, { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import { useFormspark } from "@formspark/use-formspark";

const FORMSPARK_FORM_ID = "s9pwSQf3D";

export function ProjectForm() {
  const [submit, submitting] = useFormspark({
    formId: FORMSPARK_FORM_ID,
  });

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    number: "",
    project: "",
    availability: [] as string[],
    message: "",
    whyJoin: "", // New field for why they want to join
    relevantExperience: "", // New field for relevant experience
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData((prevData) => {
      const availability = checked
        ? [...prevData.availability, value]
        : prevData.availability.filter((item) => item !== value);
      return { ...prevData, availability };
    });
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submit(formData);
    alert("Message Sent");
    setFormData({
      firstname: "",
      lastname: "",
      email: "",
      number: "",
      project: "",
      availability: [],
      message: "",
      whyJoin: "", // Reset new field
      relevantExperience: "", // Reset new field
    });
  };

  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-3xl text-neutral-800 dark:text-neutral-200">
        Join Project
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Enter The Details To Join Our Project
      </p>

      <form className="my-8" onSubmit={onSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input
              id="firstname"
              placeholder="Rishi"
              type="text"
              value={formData.firstname}
              onChange={handleChange}
              required
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input
              id="lastname"
              placeholder="Patil"
              type="text"
              value={formData.lastname}
              onChange={handleChange}
              required
            />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            placeholder="rishipatil@gmail.com"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="number">Phone No.</Label>
          <Input
            id="number"
            placeholder="9876543210"
            type="tel"
            pattern="\d{10,13}"
            value={formData.number}
            onChange={handleChange}
            required
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="project">Select The Project You Want To Join</Label>
          <select
            id="project"
            value={formData.project}
            onChange={handleChange}
            required
            className='flex h-10 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent 
          file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder:text-neutral-600 
          focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600
           disabled:cursor-not-allowed disabled:opacity-50
           dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
           group-hover/input:shadow-none transition duration-400'
          >
            <option value="">-- Select a Project --</option>
            <option value="Project A">Project A: AI Research</option>
            <option value="Project B">Project B: Web Development</option>
            <option value="Project C">Project C: Mobile App Development</option>
            <option value="Project D">Project D: Data Analysis</option>
            <option value="Project E">Project E: Cybersecurity</option>
          </select>
        </LabelInputContainer>

        {/* New Section: Why Do You Want to Join This Project? */}
        <LabelInputContainer className="mb-4">
          <Label htmlFor="whyJoin">Why Do You Want to Join This Project?</Label>
          <Input
            id="whyJoin"
            placeholder="Your reason..."
            type="text"
            value={formData.whyJoin}
            onChange={handleChange}
            className="h-20" // Adding height for better appearance
          />
        </LabelInputContainer>

        {/* New Section: Do You Have Any Relevant Experience or Skills? If Yes, Please Describe. */}
        <LabelInputContainer className="mb-4">
          <Label htmlFor="relevantExperience">Do You Have Any Relevant Experience or Skills? If Yes, Please Describe.</Label>
          <Input
            id="relevantExperience"
            placeholder="Describe your experience or skills..."
            type="text"
            value={formData.relevantExperience}
            onChange={handleChange}
            className="h-20" // Adding height for better appearance
          />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label>What Is Your Availability? (Select all that apply)</Label>
          <div className="flex flex-col space-y-2">
            {["Weekdays (Morning)", "Weekdays (Afternoon)", "Weekdays (Evening)", "Weekends (Morning)", "Weekends (Afternoon)", "Weekends (Evening)"].map((option) => (
              <label key={option} className="flex items-center">
                <input
                  type="checkbox"
                  value={option}
                  checked={formData.availability.includes(option)}
                  onChange={handleCheckboxChange}
                  className="mr-2"
                />
                {option}
              </label>
            ))}
          </div>
        </LabelInputContainer>
        
        <LabelInputContainer className="mb-4">
          <Label htmlFor="message">Additional Comments or Questions</Label>
          <Input
            id="message"
            placeholder="Your Message"
            type="text"
            value={formData.message}
            onChange={handleChange}
            className="h-20" // Adding height for better appearance
          />
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] transition-colors duration-200"
          type="submit"
          disabled={submitting}
        >
          Send &rarr;
          <BottomGradient />
        </button>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col mb-4", className)}>
      {children}
    </div>
  );
};
