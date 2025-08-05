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

const earningData = [
  {
    serial: "01",
    name: "Anita@123",
    store: "Amazon",
    purchaseAmount: "100",
    dateTime: "11 Feb, 2025",
    commission: 20,
  },
  {
    serial: "02",
    name: "JohnDoe99",
    store: "eBay",
    purchaseAmount: "250",
    dateTime: "14 Feb, 2025",
    commission: 40,
  },
  {
    serial: "03",
    name: "Emily_Rose",
    store: "Walmart",
    purchaseAmount: "150",
    dateTime: "18 Feb, 2025",
    commission: 25,
  },
  {
    serial: "04",
    name: "Kevin789",
    store: "Target",
    purchaseAmount: "90",
    dateTime: "20 Feb, 2025",
    commission: 18,
  },
  {
    serial: "05",
    name: "Sara_M",
    store: "Best Buy",
    purchaseAmount: "300",
    dateTime: "22 Feb, 2025",
    commission: 50,
  },
  {
    serial: "06",
    name: "LiamO23",
    store: "AliExpress",
    purchaseAmount: "80",
    dateTime: "24 Feb, 2025",
    commission: 16,
  },
  {
    serial: "07",
    name: "Nina_P",
    store: "Etsy",
    purchaseAmount: "60",
    dateTime: "26 Feb, 2025",
    commission: 12,
  },
  {
    serial: "08",
    name: "Rajesh_09",
    store: "Flipkart",
    purchaseAmount: "110",
    dateTime: "27 Feb, 2025",
    commission: 22,
  },
  {
    serial: "09",
    name: "JessicaX",
    store: "Snapdeal",
    purchaseAmount: "95",
    dateTime: "28 Feb, 2025",
    commission: 19,
  },
  {
    serial: "10",
    name: "Tom_Hardy",
    store: "Newegg",
    purchaseAmount: "400",
    dateTime: "01 Mar, 2025",
    commission: 70,
  },
];

const EarningTable = () => {
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
              <TableHead className="text-white px-4 py-3">
                <Checkbox aria-label="Select all earningData" />
              </TableHead>
              <TableHead className="text-white px-4 py-3">Serial</TableHead>
              <TableHead className="text-white px-4 py-3">Name</TableHead>
              <TableHead className="text-white px-4 py-3">Store</TableHead>
              <TableHead className="text-white px-4 py-3">
                Purchase Amount
              </TableHead>
              <TableHead className="text-white px-4 py-3">
                Date & Time
              </TableHead>
              <TableHead className="text-white px-4 py-3 text-center">
                Commission %
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {earningData.map((earing, index) => (
              <TableRow
                key={index}
                className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
              >
                <TableCell className="px-4 py-4">
                  <Checkbox aria-label={`Select earing ${earing.serial}`} />
                </TableCell>
                <TableCell className="px-4 py-3">{earing.serial}</TableCell>
                <TableCell className="px-4 py-3">{earing.name}</TableCell>
                <TableCell className="px-4 py-3">{earing.store}</TableCell>
                <TableCell className="px-4 py-3">
                  ${earing.purchaseAmount}
                </TableCell>
                <TableCell className="px-4 py-3">{earing.dateTime}</TableCell>
                <TableCell className="px-4 py-3 text-center flex items-center justify-center">
                  {earing.commission}%
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

export default EarningTable;
