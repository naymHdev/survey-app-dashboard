"use client";

import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArrowRight, Eye } from "lucide-react";
import { useState } from "react";

const surveys = [
  {
    serial: "1",
    cardName: "Amazon Gift Card",
    options: ["200 points = $20", "300 points = $30", "400 points = $40"],
    status: "Active",
  },
  {
    serial: "1",
    cardName: "Amazon Gift Card",
    options: ["200 points = $20", "300 points = $30", "400 points = $40"],
    status: "Active",
  },
];

const GiftCardTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = surveys.slice(indexOfFirstUser, indexOfLastUser);

  const totalPages = Math.ceil(surveys.length / usersPerPage);

  return (
    <>
      <div className="w-full rounded-md border-gray-200">
        <Table>
          <TableHeader className=" bg-sc-primary text-white">
            <TableRow>
              <TableHead className="text-white px-4 py-3">
                <Checkbox aria-label="Select all surveys" className=" mr-2" />
                Serial
              </TableHead>
              <TableHead className="text-white px-4 py-3">
                Gift Card Name
              </TableHead>
              <TableHead className="text-white px-4 py-3">Options</TableHead>
              <TableHead className="text-white px-4 py-3">Status</TableHead>
              <TableHead className="text-white px-4 py-3 text-center">
                Action
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {surveys.map((survey, index) => (
              <TableRow
                key={index}
                className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
              >
                <TableCell className="px-4 py-4">
                  <div className=" flex items-center gap-2">
                    <Checkbox aria-label={`Select survey ${survey.serial}`} />
                    {`#${survey.serial}`}
                  </div>
                </TableCell>
                <TableCell className="px-4 py-3">{survey.cardName}</TableCell>
                <TableCell className="px-4 py-3">
                  {survey.options.map((itm) => (
                    <p className=" mt-2">{itm}</p>
                  ))}
                </TableCell>
                <TableCell className="px-4 py-3">
                  <span
                    className={`font-medium ${
                      survey.status === "Active"
                        ? "text-green-500"
                        : "text-yellow-500"
                    }`}
                  >
                    {survey.status}
                  </span>
                </TableCell>
                <TableCell className="px-4 py-3 text-center flex items-center justify-center">
                  <Eye className="h-5 w-5 text-sc-primary cursor-pointer hover:text-blue-600" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* ------------ Pagination ------------ */}
      <div className="flex items-center justify-end space-x-2 mt-4">
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 rounded border ${
              currentPage === i + 1
                ? " bg-sc-primary rounded-full text-white"
                : "bg-gray-100 hover:bg-gray-300"
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          className=" p-2 border border-sc-primary hover:bg-sc-primary hover:text-sc-white hover:cursor-pointer rounded-full"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => prev + 1)}
        >
          <ArrowRight className=" size-3.5" />
        </button>
      </div>
    </>
  );
};

export default GiftCardTable;
