"use client";

import { Card } from "@/components/ui/card";
import NSInput from "@/components/ui/core/NSInput";
import { NSPickerWithInput } from "@/components/ui/core/NSPickerWithInput";
import { ArrowUp, Search } from "lucide-react";
import { useState } from "react";
import EarningTable from "./EarningTable";

const Earning = () => {
  const [date, setDate] = useState<Date | undefined>(new Date("2025-06-10"));

  return (
    <>
      {/* Earning Overview */}
      <Card className=" p-4 lg:p-6 border-none w-full ">
        <div className=" flex items-center justify-between text-sm leading-snug text-sc-dark-gray">
          <p className="">Total Earning</p>
          <p className="text-[#165940] flex items-center gap-1 font-semibold">
            <ArrowUp className=" size-5" />
            12%
          </p>
        </div>

        <div className="">
          <h2 className=" text-sc-charcoal-logic font-bold text-3xl">
            $1,250.00
          </h2>
          <p className=" mt-2 text-sc-clarity-ice text-[16px] leading-snug">
            Last 30 days
          </p>
        </div>
      </Card>

      {/* Search & Filtering */}
      <div className="mt-6 col-span-full md:col-span-5 flex items-center gap-4">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <NSInput
            type="search"
            placeholder="Search here..."
            className="pl-10 py-6 w-full"
          />
        </div>
        <NSPickerWithInput
          date={date}
          setDate={setDate}
          className="w-full px-3 py-6 focus:outline-none focus-visible:ring-0 focus-visible:border-neutral-200"
        />
      </div>

      {/* Earning Table */}
      <div className=" mt-4">
        <EarningTable />
      </div>
    </>
  );
};

export default Earning;
