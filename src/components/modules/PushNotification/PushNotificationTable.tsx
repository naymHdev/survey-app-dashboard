"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
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
import PromotionalMessageModal from "./PromotionalMessageModal";

const notificationsData = [
  {
    memberId: "RL0393-10001",
    name: "Arif_Hossain",
    email: "arifhossain@example.com",
    age: "26-35",
    gender: "Male",
    interests: ["Technology", "Finance", "Health"],
  },
  {
    memberId: "RL0393-10002",
    name: "Sara_Khan",
    email: "sarak123@gmail.com",
    age: "18-25",
    gender: "Female",
    interests: ["Fashion", "Travel", "Technology"],
  },
  {
    memberId: "RL0393-10003",
    name: "JohnDoe_007",
    email: "john007@example.com",
    age: "36-45",
    gender: "Male",
    interests: ["Finance", "Technology", "Health"],
  },
  {
    memberId: "RL0393-10004",
    name: "Maya_12",
    email: "maya12@outlook.com",
    age: "Under 18",
    gender: "Female",
    interests: ["Fashion", "Health"],
  },
  {
    memberId: "RL0393-10005",
    name: "RajuAhmed88",
    email: "rajuahmed88@gmail.com",
    age: "46-60",
    gender: "Male",
    interests: ["Travel", "Finance", "Technology"],
  },
  {
    memberId: "RL0393-10006",
    name: "Nusrat_Jahan",
    email: "nusratjahan@live.com",
    age: "18-25",
    gender: "Female",
    interests: ["Fashion", "Health", "Travel"],
  },
  {
    memberId: "RL0393-10007",
    name: "Faisal789",
    email: "faisal789@gmail.com",
    age: "26-35",
    gender: "Male",
    interests: ["Technology", "Finance"],
  },
  {
    memberId: "RL0393-10008",
    name: "Lubna.R",
    email: "lubna.r@example.com",
    age: "36-45",
    gender: "Female",
    interests: ["Health", "Travel"],
  },
  {
    memberId: "RL0393-10009",
    name: "TanvirAli",
    email: "tanvir.ali@domain.com",
    age: "26-35",
    gender: "Male",
    interests: ["Fashion", "Technology", "Finance"],
  },
  {
    memberId: "RL0393-10010",
    name: "Zarina123",
    email: "zarina123@gmail.com",
    age: "60+",
    gender: "Female",
    interests: ["Health", "Travel", "Finance"],
  },
];

const PushNotificationTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = notificationsData.slice(
    indexOfFirstUser,
    indexOfLastUser
  );
  const totalPages = Math.ceil(notificationsData.length / usersPerPage);

  return (
    <>
      <div className="w-full rounded-md border border-gray-200 overflow-x-auto font-sora">
        <Table>
          <TableHeader className="bg-sc-primary text-white">
            <TableRow>
              <TableHead className="text-white px-4 py-3">
                <Checkbox aria-label="Select all rows" />
              </TableHead>
              <TableHead className="text-white px-4 py-3">Member ID</TableHead>
              <TableHead className="text-white px-4 py-3">Name</TableHead>
              <TableHead className="text-white px-4 py-3">Email</TableHead>
              <TableHead className="text-white px-4 py-3">Age</TableHead>
              <TableHead className="text-white px-4 py-3">Gender</TableHead>
              <TableHead className="text-white px-4 py-3">Interests</TableHead>
              <TableHead className="text-white px-4 py-3 text-center">
                Action
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {currentUsers.map((user, index) => (
              <TableRow
                key={index}
                className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
              >
                <TableCell className="px-4 py-4">
                  <Checkbox aria-label={`Select ${user.memberId}`} />
                </TableCell>
                <TableCell className="px-4 py-3">{user.memberId}</TableCell>
                <TableCell className="px-4 py-3">{user.name}</TableCell>
                <TableCell className="px-4 py-3">{user.email}</TableCell>
                <TableCell className="px-4 py-3">{user.age}</TableCell>
                <TableCell className="px-4 py-3">{user.gender}</TableCell>
                <TableCell className="px-4 py-3">
                  <div className="flex flex-wrap gap-1">
                    {user.interests.map((interest, i) => (
                      <span
                        key={i}
                        className="bg-sc-primary text-white text-xs px-2 py-1 rounded-full"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </TableCell>
                <TableCell className="px-4 py-3 flex items-center justify-center">
                  <PromotionalMessageModal />
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
            className={`px-3 py-1 text-sm rounded-full border transition ${
              currentPage === i + 1
                ? "bg-sc-primary text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            {i + 1}
          </button>
        ))}
        <button
          onClick={() => setCurrentPage((prev) => prev + 1)}
          disabled={currentPage === totalPages}
          className="p-2 border border-sc-primary rounded-full hover:bg-sc-primary hover:text-white disabled:opacity-50"
        >
          <ArrowRight className="size-4" />
        </button>
      </div>
    </>
  );
};

export default PushNotificationTable;
