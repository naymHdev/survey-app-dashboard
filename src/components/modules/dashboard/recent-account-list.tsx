import { cn } from "@/lib/utils";
import Image from "next/image";
import pImg from "../../../assets/images/db-profile.png";
import { Card } from "@/components/ui/card";
import NSInput from "@/components/ui/core/NSInput";
import { FiSearch } from "react-icons/fi";

const data = [
  {
    name: "Eleanor Pena",
    subscription: "Free",
    matches: 10,
    status: "Active",
    role: "Player",
  },
  {
    name: "Eleanor Pena",
    subscription: "Amateur",
    matches: 10,
    status: "Inactive",
    role: "Player",
  },
  {
    name: "Eleanor Pena",
    subscription: "Pro",
    matches: 10,
    status: "Active",
    role: "Player",
  },
  {
    name: "Eleanor Pena",
    subscription: "Amateur",
    matches: 10,
    status: "Active",
    role: "Player",
  },
  {
    name: "Eleanor Pena",
    subscription: "Pro",
    matches: 10,
    status: "Inactive",
    role: "Player",
  },
  {
    name: "Eleanor Pena",
    subscription: "Amateur",
    matches: 10,
    status: "Inactive",
    role: "Player",
  },
];

const RecentAccountList = () => {
  return (
    <Card className="overflow-x-auto p-4">
      <div className=" flex items-center justify-between p-4">
        <h2 className=" text-lg font-semibold text-ns-title">
          Recent Account List
        </h2>
        <div className=" relative">
          <NSInput
            className=" border-green-300 focus-visible:border-green-300 min-w-[300px]  pl-7"
            placeholder="Search"
          />
          <div className=" absolute left-2 top-3.5">
            <FiSearch className=" h-4 w-4 text-ns-gray" />
          </div>
        </div>
      </div>
      <table className="min-w-full table-auto text-left text-sm">
        <thead className="bg-green-100 text-gray-700">
          <tr>
            <th className="px-4 py-2">Full Name</th>
            <th className="px-4 py-2">Subscription</th>
            <th className="px-4 py-2">Matches Joined</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Player</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, index) => (
            <tr key={index} className="border-b">
              <td className="flex items-center gap-2 px-4 py-4">
                <Image
                  src={pImg}
                  alt={user.name}
                  width={24}
                  height={24}
                  className="rounded-full"
                />
                {user.name}
              </td>
              <td className="px-4 py-2">{user.subscription}</td>
              <td className="px-4 py-2">{user.matches}</td>
              <td
                className={cn(
                  "px-4 py-2 font-medium",
                  user.status === "Active" ? "text-blue-600" : "text-red-600"
                )}
              >
                {user.status}
              </td>
              <td className="px-4 py-2">{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
};

export default RecentAccountList;
