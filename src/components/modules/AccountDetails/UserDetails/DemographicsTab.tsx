"use client";

import NSButton from "@/components/ui/core/NSButton";
import { ChevronRight, Download } from "lucide-react";

const profileData = [
  { question: "What is your age?", answer: "35-44" },
  { question: "What is your gender?", answer: "Male" },
  { question: "Country", answer: "United States" },
  { question: "City", answer: "Austin" },
  { question: "State/Region", answer: "Texas" },
  { question: "ZipCode", answer: "78701" },
  {
    question: "What is your highest level of education?",
    answer: "Bachelor's Degree",
  },
  { question: "What is your race and/or ethnicity?", answer: "White" },
  {
    question: "How long have you lived in this country?",
    answer: "Entire life",
  },
  {
    question: "What are your preferred languages?",
    answer: "English, Spanish",
  },
  { question: "What is your employment status?", answer: "Full-time" },
  {
    question: "What topics are you most interested in?",
    answer: "Technology, Finance & Investment, Entertainment & Media",
  },
  {
    question: "What is your occupation or industry?",
    answer: "Software Development",
  },
];

const DemographicsTab = () => {
  return (
    <>
      <section className="flex items-center font-sora justify-between">
        <h2 className=" text-3xl font-bold text-sc-charcoal-logic">
          Demographic Survey Form
        </h2>
        <NSButton className=" flex items-center justify-center gap-2 rounded-lg px-5 lg:px-16 py-3">
          Export <Download className=" size-4 text-sc-white" />
        </NSButton>
      </section>

      <section className=" mt-4">
        <div className="space-y-1">
          {profileData?.map((item, index) => (
            <div
              key={index}
              className={`flex justify-between items-start py-3 px-4 ${
                index % 2 === 0 ? " bg-sc-primary/10" : "bg-white"
              }`}
            >
              <div className="text-sm text-gray-600 font-medium flex-1 pr-4">
                {item.question}
              </div>
              <div className="text-sm text-gray-900 font-medium text-right max-w-xs">
                {item.answer}
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-end mt-8 space-x-2">
          <button className="w-8 h-8 rounded-full bg-sc-primary text-white text-sm font-medium flex items-center justify-center">
            1
          </button>
          <button className="w-8 h-8 rounded-full bg-gray-200 text-gray-600 text-sm font-medium flex items-center justify-center hover:bg-gray-300 transition-colors">
            2
          </button>
          <button className="w-8 h-8 rounded-full bg-gray-200 text-gray-600 text-sm font-medium flex items-center justify-center hover:bg-gray-300 transition-colors">
            3
          </button>
          <button className="w-8 h-8 rounded-full bg-gray-200 text-gray-600 text-sm font-medium flex items-center justify-center hover:bg-gray-300 transition-colors">
            4
          </button>
          <button className="w-8 h-8 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center hover:bg-gray-300 transition-colors ml-2">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </>
  );
};

export default DemographicsTab;
