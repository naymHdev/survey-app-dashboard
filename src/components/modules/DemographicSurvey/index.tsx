"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DemographicSurveyTab from "./DemographicSurveyTab";
import SurveyResponseTab from "./SurveyResponseTab.tsx";
import IndividualResponseTab from "./IndividualResponseTab";

const DemographicSurvey = () => {
  return (
    <>
      <Tabs defaultValue="demographicSurvey" className="mt-6 font-sora">
        <div className=" flex items-center justify-center bg-sc-white shadow-sm border py-2 rounded-lg">
          <TabsList className="flex flex-wrap items-center justify-center space-x-6 bg-transparent">
            <TabsTrigger
              value="demographicSurvey"
              className=" font-semibold px-4 py-2 text-gray-700 data-[state=active]:border-b data-[state=active]:border-b-sc-charcoal-logic data-[state=active]:font-semibold focus:outline-none whitespace-nowrap shadow-none data-[state=active]:shadow-none data-[state=active]:rounded-none transition-colors cursor-pointer"
            >
              Demographic Survey
            </TabsTrigger>
            <TabsTrigger
              value="surveyResponse"
              className=" font-semibold px-4 py-2 text-gray-700 data-[state=active]:border-b data-[state=active]:border-b-sc-charcoal-logic data-[state=active]:font-semibold focus:outline-none whitespace-nowrap shadow-none data-[state=active]:shadow-none data-[state=active]:rounded-none transition-colors cursor-pointer"
            >
              Survey Response
            </TabsTrigger>
            <TabsTrigger
              value="individualResponse"
              className=" font-semibold px-4 py-2 text-gray-700 data-[state=active]:border-b data-[state=active]:border-b-sc-charcoal-logic data-[state=active]:font-semibold focus:outline-none whitespace-nowrap shadow-none data-[state=active]:shadow-none data-[state=active]:rounded-none transition-colors cursor-pointer"
            >
              Individual Response
            </TabsTrigger>
          </TabsList>
        </div>

        <section>
          <TabsContent value="demographicSurvey">
            <DemographicSurveyTab />
          </TabsContent>

          <TabsContent value="surveyResponse">
            <SurveyResponseTab />
          </TabsContent>

          <TabsContent value="individualResponse">
            <IndividualResponseTab />
          </TabsContent>
        </section>
      </Tabs>
    </>
  );
};

export default DemographicSurvey;
