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
import { ChevronLeft, ChevronRight, Eye, Ban } from "lucide-react";
import Link from "next/link";

const userData = {
  id: "RL0393-10000",
  name: "Eleanor Pena",
  email: "anita123@gmail.com",
  completedSurvey: 12,
  dateTime: "11 Feb, 2025",
};

const AccountsTable = () => {
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
                Member ID
              </TableHead>
              <TableHead className="text-white font-semibold text-center">
                Name
              </TableHead>
              <TableHead className="text-white font-semibold text-center">
                Email
              </TableHead>
              <TableHead className="text-white font-semibold text-center">
                Surveys Completed
              </TableHead>
              <TableHead className="text-white font-semibold text-center">
                Date & Time
              </TableHead>
              <TableHead className="text-white font-semibold text-center">
                Action
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array(15)
              .fill(userData)
              .map((user, index) => (
                <TableRow
                  key={index}
                  className={`py-6 ${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  }`}
                >
                  <TableCell className="font-medium text-center py-6">
                    {user.id}
                  </TableCell>
                  <TableCell className="font-medium text-center">
                    {user.name}
                  </TableCell>
                  <TableCell className="font-medium text-center">
                    {user.email}
                  </TableCell>
                  <TableCell className="font-medium text-center">
                    {user.completedSurvey}
                  </TableCell>
                  <TableCell className="font-medium text-center">
                    {user.dateTime}
                  </TableCell>
                  <TableCell className="font-medium text-center">
                    <div className=" flex items-center justify-center gap-2">
                      <Link href={`/account-details/${user.id}`}>
                        <button className=" cursor-pointer">
                          <Eye
                            className=" text-sc-primary size-5"
                            onClick={() => {
                              setSelectedUser(user);
                              setIsModalOpen(true);
                            }}
                          />
                        </button>
                      </Link>
                      <button className=" cursor-pointer">
                        <Ban className=" text-red-500 size-5" />
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

export default AccountsTable;
