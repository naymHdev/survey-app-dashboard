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
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import CustomerDetailsModal from "./CustomerDetailsModal";

const customerData = [
  {
    serial: "01",
    name: "Alina",
    email: "alina1234@gmail.com",
    date: "May 25, 2025",
  },
  {
    serial: "02",
    name: "Rafiq",
    email: "rafiq.khan@example.com",
    date: "May 26, 2025",
  },
  {
    serial: "03",
    name: "Jenny",
    email: "jenny.doe@example.com",
    date: "May 27, 2025",
  },
  {
    serial: "04",
    name: "Sajjad",
    email: "sajjad.bd99@gmail.com",
    date: "May 28, 2025",
  },
  {
    serial: "05",
    name: "Noor",
    email: "noor.jahan@example.com",
    date: "May 29, 2025",
  },
  {
    serial: "06",
    name: "Tanvir",
    email: "tanvir.dev@example.com",
    date: "May 30, 2025",
  },
  {
    serial: "07",
    name: "Ayesha",
    email: "ayesha.star@example.com",
    date: "June 1, 2025",
  },
  {
    serial: "08",
    name: "Liam",
    email: "liam.lee@example.com",
    date: "June 2, 2025",
  },
  {
    serial: "09",
    name: "Zara",
    email: "zara.z@example.com",
    date: "June 3, 2025",
  },
  {
    serial: "10",
    name: "Naym",
    email: "naymhossen.dev@example.com",
    date: "June 4, 2025",
  },
];

const CustomerTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = customerData.slice(indexOfFirstUser, indexOfLastUser);

  const totalPages = Math.ceil(customerData.length / usersPerPage);

  return (
    <>
      <div className="w-full rounded-md border border-gray-200">
        <Table>
          <TableHeader className=" bg-sc-primary text-white">
            <TableRow>
              <TableHead className="text-white px-4 py-3">
                <Checkbox aria-label="Select all customerData" />
              </TableHead>
              <TableHead className="text-white px-4 py-3">Serial</TableHead>
              <TableHead className="text-white px-4 py-3">Name</TableHead>
              <TableHead className="text-white px-4 py-3">Email</TableHead>
              <TableHead className="text-white px-4 py-3">Date</TableHead>
              <TableHead className="text-white px-4 py-3">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {customerData.map((earing, index) => (
              <TableRow
                key={index}
                className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
              >
                <TableCell className="px-4 py-4">
                  <Checkbox aria-label={`Select earing ${earing.serial}`} />
                </TableCell>
                <TableCell className="px-4 py-3">{earing.serial}</TableCell>
                <TableCell className="px-4 py-3">{earing.name}</TableCell>
                <TableCell className="px-4 py-3">{earing.email}</TableCell>
                <TableCell className="px-4 py-3">${earing.date}</TableCell>
                <TableCell className="px-4 py-3 text-center flex items-center justify-center">
                  <CustomerDetailsModal />
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

export default CustomerTable;
