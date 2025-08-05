import NSButton from "@/components/ui/core/NSButton";
import NSInput from "@/components/ui/core/NSInput";
import { NSPickerWithInput } from "@/components/ui/core/NSPickerWithInput";
import { useState } from "react";
import CouponTable from "./CouponTable";

const CouponTab = () => {
  const [date, setDate] = useState<Date | undefined>(new Date("2025-06-10"));

  return (
    <>
      <div className=" py-4 grid grid-cols-1 md:grid-cols-7 gap-4">
        <div className=" col-span-full md:col-span-5 flex items-center gap-4">
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
        </div>
        <div className="col-span-full md:col-span-2">
          <NSButton className="w-full py-3 hover:bg-red-500 hover:text-white rounded-lg bg-transparent text-red-600 border border-red-400">
            Mark as Delete
          </NSButton>
        </div>
      </div>

      <div className=" mt-4">
        <CouponTable />
      </div>
    </>
  );
};

export default CouponTab;
