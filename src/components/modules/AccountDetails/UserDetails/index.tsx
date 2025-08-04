"use client";

import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import UserProfileSection from "./UserProfileSection";
import DemographicsTab from "./DemographicsTab";
import SurveyActivityTab from "./SurveyActivityTab";
import PointsRewardsTab from "./PointsRewardsTab/PointsRewardsTab";

const UserDetails = () => {
  return (
    <>
      <div className=" font-sora">
        {/* Navigation Tabs */}
        <Tabs defaultValue="demographics" className="mt-6">
          <div className=" flex items-center justify-center bg-sc-white shadow-sm border pt-2 rounded-lg">
            <TabsList className="flex flex-wrap items-center justify-center space-x-6 bg-transparent">
              <TabsTrigger
                value="demographics"
                className=" font-semibold px-4 py-2 text-gray-700 data-[state=active]:border-b data-[state=active]:border-b-sc-charcoal-logic data-[state=active]:font-semibold focus:outline-none whitespace-nowrap shadow-none data-[state=active]:shadow-none data-[state=active]:rounded-none transition-colors cursor-pointer"
              >
                Demographics
              </TabsTrigger>
              <TabsTrigger
                value="surveyActivity"
                className=" font-semibold px-4 py-2 text-gray-700 data-[state=active]:border-b data-[state=active]:border-b-sc-charcoal-logic data-[state=active]:font-semibold focus:outline-none whitespace-nowrap shadow-none data-[state=active]:shadow-none data-[state=active]:rounded-none transition-colors cursor-pointer"
              >
                Survey Activity
              </TabsTrigger>
              <TabsTrigger
                value="pointsRewards"
                className=" font-semibold px-4 py-2 text-gray-700 data-[state=active]:border-b data-[state=active]:border-b-sc-charcoal-logic data-[state=active]:font-semibold focus:outline-none whitespace-nowrap shadow-none data-[state=active]:shadow-none data-[state=active]:rounded-none transition-colors cursor-pointer"
              >
                Points & Rewards
              </TabsTrigger>
            </TabsList>
          </div>

          <section className=" grid grid-cols-1 lg:grid-cols-7 gap-4 mt-4">
            <Card className=" col-span-full lg:col-span-2 p-4 last:p-6 border-none w-full">
              <UserProfileSection />
            </Card>
            <Card className=" col-span-full lg:col-span-5 p-4 last:p-6 border-none w-full">
              <TabsContent value="demographics">
                <DemographicsTab />
              </TabsContent>

              <TabsContent value="surveyActivity">
                <SurveyActivityTab />
              </TabsContent>

              <TabsContent value="pointsRewards">
                <PointsRewardsTab />
              </TabsContent>
            </Card>
          </section>
        </Tabs>
      </div>
    </>
  );
};

export default UserDetails;
