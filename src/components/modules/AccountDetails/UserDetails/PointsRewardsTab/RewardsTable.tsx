"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Eye } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

const userData = {
  serial: "01",
  item: "$30 Amazon Gift Card",
  pointsUsed: "40",
  redeemedOn: "May 15, 2025",
};

const RewardsTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <>
      {/* Table */}
      <div className="overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className=" bg-sc-primary hover:bg-sc-primary/90">
              <TableHead className="text-white py-4 font-semibold text-center">
                Serial
              </TableHead>
              <TableHead className="text-white font-semibold text-center">
                Item
              </TableHead>
              <TableHead className="text-white font-semibold text-center">
                Points Used
              </TableHead>
              <TableHead className="text-white font-semibold text-center">
                Redeemed On
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array(15)
              .fill(userData)
              .map((survey, index) => (
                <TableRow
                  key={index}
                  className={`py-6 ${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  }`}
                >
                  <TableCell className="font-medium text-center py-6">
                    <div className=" flex items-center justify-center gap-2">
                      <Checkbox />#{survey.serial}
                    </div>
                  </TableCell>
                  <TableCell className="font-medium text-center">
                    {survey.item}
                  </TableCell>
                  <TableCell className="font-medium text-center">
                    {survey.pointsUsed}
                  </TableCell>
                  <TableCell className="font-medium text-center">
                    {survey.redeemedOn}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center md:justify-end gap-2 mt-6">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className="h-8 w-8 p-0 rounded-full border-sc-primary text-sc-primary"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        {[1, 2, 3, 4].map((page) => (
          <Button
            key={page}
            variant={currentPage === page ? "default" : "outline"}
            size="sm"
            onClick={() => setCurrentPage(page)}
            className={`h-8 w-8 p-0 rounded-full ${
              currentPage === page
                ? "bg-sc-primary hover:bg-sc-primary/90"
                : " border-sc-primary text-sc-primary"
            }`}
          >
            {page}
          </Button>
        ))}

        <Button
          variant="outline"
          size="sm"
          onClick={() => setCurrentPage(Math.min(30, currentPage + 1))}
          disabled={currentPage === 30}
          className="h-8 w-8 p-0 rounded-full border-sc-primary text-sc-primary"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </>
  );
};

export default RewardsTable;
