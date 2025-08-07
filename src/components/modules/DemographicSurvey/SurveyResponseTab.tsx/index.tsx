"use client";

import NSButton from "@/components/ui/core/NSButton";
import { ChevronRight, Download } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import AgeInfoChart from "./AgeInfoChart";
import EducationCompletedChart from "./EducationCompletedChart";
import EmploymentStatus from "./EmploymentStatus";
import { HouseholdIncome } from "./HouseholdIncome";
import HowManyPeopleLive from "./HowManyPeopleLive";
import MaritalStatus from "./MaritalStatus";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const SurveyResponseTab = () => {
  return (
    <>
      <div className="mt-4 flex flex-col lg:flex-row gap-4 items-center justify-between">
        <div className=" w-full">
          <Select>
            <SelectTrigger className="w-full py-9.5 shadow-sm">
              <SelectValue placeholder="Section" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Personal Information</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className=" w-full border shadow-sm rounded-lg py-2 px-3">
          <p className=" text-lg font-normal text-sc-dark-gray">
            Number of Surveys Participants
          </p>
          <h2 className=" mt-2 font-semibold text-sc-charcoal-logic">20</h2>
        </div>
        <NSButton className=" flex items-center justify-center gap-2 w-full rounded-lg py-6">
          Export <Download className=" size-3.5 text-sc-white" />
        </NSButton>
      </div>

      {/* --------- Charts --------- */}

      <section className=" mt-4 ">
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <AgeInfoChart />
          <EducationCompletedChart />
          <EmploymentStatus />
          <HouseholdIncome />
          <HowManyPeopleLive />
          <MaritalStatus />
        </div>

        {/* --------- Pagination --------- */}
        <Pagination className="my-6 flex justify-end">
          <PaginationContent>
            <PaginationItem className=" flex items-center gap-2">
              <PaginationLink
                className=" border rounded-full border-sc-primary text-sc-primary hover:bg-sc-primary hover:text-white"
                href="#"
              >
                1
              </PaginationLink>
              <PaginationLink
                className=" border rounded-full border-sc-primary text-sc-primary hover:bg-sc-primary hover:text-white"
                href="#"
              >
                2
              </PaginationLink>
              <PaginationLink
                className=" border rounded-full border-sc-primary text-sc-primary hover:bg-sc-primary hover:text-white"
                href="#"
              >
                3
              </PaginationLink>
              <PaginationLink
                className=" border rounded-full border-sc-primary text-sc-primary hover:bg-sc-primary hover:text-white"
                href="#"
              >
                4
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                className=" border rounded-full border-sc-primary text-sc-primary hover:bg-sc-primary hover:text-white"
                href="#"
              >
                <ChevronRight />
              </PaginationLink>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </section>
    </>
  );
};

export default SurveyResponseTab;
