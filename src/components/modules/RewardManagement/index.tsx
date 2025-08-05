"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import GiftCardTab from "./GiftCardTab/GiftCardTab";
import CouponTab from "./CouponTab/CouponTab";
import AddGiftCardModal from "./GiftCardTab/AddGiftCardModal";
import UpdateGiftCardModal from "./GiftCardTab/UpdateGiftCardModal";
import AddCouponModal from "./CouponTab/AddCouponModal";
import UpdateCouponModal from "./CouponTab/UpdateCouponModal";
const RewardManagement = () => {
  return (
    <>
      <div className=" font-sora relative">
        {/* Navigation Tabs */}
        <Tabs defaultValue="coupon" className="mt-32">
          <div className=" flex items-center justify-center bg-sc-white shadow-sm border pt-2 rounded-lg">
            <TabsList className="flex flex-wrap items-center justify-center space-x-6 bg-transparent">
              <TabsTrigger
                value="giftCard"
                className=" font-semibold px-4 py-2 text-gray-700 data-[state=active]:border-b data-[state=active]:border-b-sc-charcoal-logic data-[state=active]:font-semibold focus:outline-none whitespace-nowrap shadow-none data-[state=active]:shadow-none data-[state=active]:rounded-none transition-colors cursor-pointer"
              >
                Gift Card
              </TabsTrigger>
              <TabsTrigger
                value="coupon"
                className=" font-semibold px-4 py-2 text-gray-700 data-[state=active]:border-b data-[state=active]:border-b-sc-charcoal-logic data-[state=active]:font-semibold focus:outline-none whitespace-nowrap shadow-none data-[state=active]:shadow-none data-[state=active]:rounded-none transition-colors cursor-pointer"
              >
                Coupon
              </TabsTrigger>
            </TabsList>
          </div>

          <section className="mt-4">
            <TabsContent value="giftCard">
              <section className=" absolute -top-24 w-full flex flex-col lg:flex-row gap-4 items-center justify-between">
                <div className=" border rounded-lg shadow-sm py-2 px-3 w-full">
                  <div className=" flex items-center justify-between">
                    <p className=" text-sm leading-snug text-sc-dark-gray">
                      Number of 10 points equal to 1 dollar.
                    </p>
                    <UpdateGiftCardModal />
                  </div>
                  <h3 className="mt-2 text-[16px] font-bold text-sc-charcoal-logic">
                    Minimum Points to Redeem = 150
                  </h3>
                </div>
                <AddGiftCardModal />
              </section>
              <GiftCardTab />
            </TabsContent>

            <TabsContent value="coupon">
              <section className=" absolute -top-24 w-full flex flex-col lg:flex-row gap-4 items-center justify-between">
                <div className=" border rounded-lg shadow-sm py-2 px-3 w-full">
                  <div className=" flex items-center justify-between">
                    <p className=" text-sm leading-snug text-sc-dark-gray">
                      Number of 10 points equal to 1 dollar.
                    </p>
                    <UpdateCouponModal />
                  </div>
                  <h3 className="mt-2 text-[16px] font-bold text-sc-charcoal-logic">
                    Minimum Points to Redeem = 150
                  </h3>
                </div>
                <AddCouponModal />
              </section>
              <CouponTab />
            </TabsContent>
          </section>
        </Tabs>
      </div>
    </>
  );
};

export default RewardManagement;
