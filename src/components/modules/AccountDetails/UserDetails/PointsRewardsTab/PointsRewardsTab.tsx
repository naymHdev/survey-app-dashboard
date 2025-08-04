import { NSPickerWithInput } from "@/components/ui/core/NSPickerWithInput";
import { useState } from "react";
import RewardsTable from "./RewardsTable";

const PointsRewardsTab = () => {
  const [date, setDate] = useState<Date | undefined>(new Date("2025-06-10"));

  return (
    <>
      <section className=" flex flex-col font-sora lg:flex-row gap-4 items-center justify-between">
        <div className="w-full border rounded-lg shadow-sm p-3">
          <p className=" text-sm font-normal text-sc-charcoal-logic">
            Total Points Earned
          </p>
          <h3 className="text-[16px] font-bold text-sc-charcoal-logic mt-2">
            200
          </h3>
        </div>
        <div className="w-full border rounded-lg shadow-sm p-3">
          <p className=" text-sm font-normal text-sc-charcoal-logic">
            Total Points Redeemed
          </p>
          <h3 className="text-[16px] font-bold text-sc-charcoal-logic mt-2">
            100
          </h3>
        </div>
        <NSPickerWithInput
          date={date}
          setDate={setDate}
          className="w-full px-3 py-9.5 focus:outline-none focus-visible:ring-0 focus-visible:border-neutral-200"
        />
      </section>
      <div>
        <h3 className=" my-4 text-lg font-medium font-sora text-sc-charcoal-logic">
          Redemption History
        </h3>
        <RewardsTable />
      </div>
    </>
  );
};

export default PointsRewardsTab;
