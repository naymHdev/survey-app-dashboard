"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

const earningData = [
  {
    memberId: "RL0393-10001",
    name: "Anita@123",
    surveyAnswer: "Online, In-store, Catalog",
  },
  {
    memberId: "RL0393-10002",
    name: "James#456",
    surveyAnswer: "In-store, Catalog",
  },
  {
    memberId: "RL0393-10003",
    name: "Lily_789",
    surveyAnswer: "Online",
  },
  {
    memberId: "RL0393-10004",
    name: "Carlos@999",
    surveyAnswer: "Catalog, Online",
  },
  {
    memberId: "RL0393-10005",
    name: "Fatima#321",
    surveyAnswer: "In-store",
  },
  {
    memberId: "RL0393-10006",
    name: "Noah_007",
    surveyAnswer: "Online, Catalog",
  },
  {
    memberId: "RL0393-10007",
    name: "Sophia@abc",
    surveyAnswer: "In-store, Online",
  },
  {
    memberId: "RL0393-10008",
    name: "Ayaan#xyz",
    surveyAnswer: "Catalog",
  },
  {
    memberId: "RL0393-10009",
    name: "Mia_2025",
    surveyAnswer: "Online, In-store",
  },
  {
    memberId: "RL0393-10010",
    name: "Zara@888",
    surveyAnswer: "In-store, Catalog, Online",
  },
];

const AnswerTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = earningData.slice(indexOfFirstUser, indexOfLastUser);

  const totalPages = Math.ceil(earningData.length / usersPerPage);

  return (
    <>
      <div className="w-full rounded-md border-gray-200">
        <Table>
          <TableHeader className=" bg-sc-primary text-white">
            <TableRow>
              <TableHead className="text-white px-4 py-3">Member ID</TableHead>
              <TableHead className="text-white px-4 py-3">
                Member Name
              </TableHead>
              <TableHead className="text-white px-4 py-3">
                Survey Answer
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {earningData.map((earing, index) => (
              <TableRow
                key={index}
                className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
              >
                <TableCell className="px-4 py-3">{earing.memberId}</TableCell>
                <TableCell className="px-4 py-3">{earing.name}</TableCell>
                <TableCell className="px-4 py-3">
                  {earing.surveyAnswer}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-end space-x-2 mt-4">
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 rounded border ${
              currentPage === i + 1
                ? " bg-sc-primary rounded-full text-white"
                : "bg-gray-100 hover:bg-gray-300 rounded-full"
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

export default AnswerTable;
