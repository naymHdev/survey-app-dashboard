"use client";

import NSButton from "@/components/ui/core/NSButton";
import NSInput from "@/components/ui/core/NSInput";
import { NSPickerWithInput } from "@/components/ui/core/NSPickerWithInput";
import { Download } from "lucide-react";
import { useState } from "react";
import AccountsTable from "./AccountsTable";

const AccountDetails = () => {
  const [date, setDate] = useState<Date | undefined>(new Date("2025-06-10"));

  return (
    <>
      <div className=" flex flex-col lg:flex-row gap-4 items-center justify-between">
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
        <NSButton className=" flex items-center justify-center gap-2 w-full rounded-lg py-3">
          Export <Download className=" size-3.5 text-sc-white" />
        </NSButton>
      </div>

      <div className="mt-4">
        <AccountsTable />
      </div>
    </>
  );
};

export default AccountDetails;
