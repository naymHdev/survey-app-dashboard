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
import SQAModal from "./SQAModal";

const userData = {
  serial: "01",
  surveyTitle: "Shopping Habits Survey",
  CompletionDate: "May 15, 2025",
  pointsEarned: 12,
  status: "Pending",
};

const SurveyActivityTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
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
                Survey Title
              </TableHead>
              <TableHead className="text-white font-semibold text-center">
                Completion Date
              </TableHead>
              <TableHead className="text-white font-semibold text-center">
                Points Earned
              </TableHead>
              <TableHead className="text-white font-semibold text-center">
                Status
              </TableHead>
              <TableHead className="text-white font-semibold text-center">
                Action
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
                    {survey.surveyTitle}
                  </TableCell>
                  <TableCell className="font-medium text-center">
                    {survey.CompletionDate}
                  </TableCell>
                  <TableCell className="font-medium text-center">
                    {survey.pointsEarned}
                  </TableCell>
                  <TableCell className="font-medium text-center">
                    {survey.status}
                  </TableCell>
                  <TableCell className="font-medium text-center">
                    <div className="flex items-center justify-center gap-2">
                      <button className=" cursor-pointer">
                        <SQAModal
                          setSelectedUser={setSelectedUser}
                          survey={survey}
                        />
                      </button>
                    </div>
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
          className="h-8 w-8 p-0 rounded-full"
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
              currentPage === page ? "bg-sc-primary hover:bg-sc-primary/90" : ""
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
          className="h-8 w-8 p-0 rounded-full"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </>
  );
};

export default SurveyActivityTable;
