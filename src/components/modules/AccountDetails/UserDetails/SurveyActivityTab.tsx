"use client";

import { useState } from "react";
import NSInput from "@/components/ui/core/NSInput";
import { NSPickerWithInput } from "@/components/ui/core/NSPickerWithInput";
import SurveyActivityTable from "./SurveyActivityTable";

const SurveyActivityTab = () => {
  const [date, setDate] = useState<Date | undefined>(new Date("2025-06-10"));

  return (
    <>
      <section className=" flex flex-col lg:flex-row gap-4 items-center justify-between">
        <NSInput
          className=" py-6"
          placeholder="Search here...."
          type="search"
        />
        <NSPickerWithInput
          date={date}
          setDate={setDate}
          className="w-full px-3 py-6 focus:outline-none focus-visible:ring-0 focus-visible:border-neutral-200"
        />
      </section>
      <section>
        <h2 className=" text-[16px] font-medium text-sc-charcoal-logic py-4">
          Number of Surveys Completed
        </h2>
        <SurveyActivityTable />
      </section>
    </>
  );
};

export default SurveyActivityTab;
