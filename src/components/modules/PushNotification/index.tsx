"use client";

import NSButton from "@/components/ui/core/NSButton";
import NSInput from "@/components/ui/core/NSInput";
import { NSPickerWithInput } from "@/components/ui/core/NSPickerWithInput";
import { ArrowRight, Search } from "lucide-react";
import { useState } from "react";
import PushNotificationTable from "./PushNotificationTable";

const PushNotification = () => {
  const [date, setDate] = useState<Date | undefined>(new Date("2025-06-10"));
  return (
    <>
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
        <NSButton className=" w-full flex items-center justify-center py-3 rounded-lg gap-2">
          Send Survey <ArrowRight className=" size-6" />
        </NSButton>
      </div>

      <div className=" mt-4">
        <PushNotificationTable />
      </div>
    </>
  );
};

export default PushNotification;
