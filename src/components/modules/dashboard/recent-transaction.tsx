"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import profile from "../../../assets/images/db-profile.png";
import Image from "next/image";

const transactions = [
  {
    id: 1,
    name: "Eleanor Pena",
    joinDate: "Join 19-02-25",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "EP",
  },
  {
    id: 2,
    name: "Dianne Russell",
    joinDate: "Join 19-02-25",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "DR",
  },
  {
    id: 3,
    name: "Albert Flores",
    joinDate: "Join 19-02-25",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "AF",
  },
  {
    id: 4,
    name: "Jerome Bell",
    joinDate: "Join 19-02-25",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "JB",
  },
  {
    id: 4,
    name: "Jerome Bell",
    joinDate: "Join 19-02-25",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "JB",
  },
];

export default function RecentTransaction() {
  return (
    <Card className="w-full">
      <CardHeader className="pb-4">
        <CardTitle className=" text-sm text-ns-title font-semibold">
          Recent Transaction
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="flex items-center justify-between py-2 hover:bg-gray-50 rounded-lg px-2 transition-colors cursor-pointer"
          >
            <div className="flex items-center space-x-3">
              <Avatar className="h-10 w-10">
                <Image src={profile} alt="profile" width={40} height={40} />
              </Avatar>
              <div className="flex flex-col">
                <span className="font-bold text-ns-title text-sm">
                  {transaction.name}
                </span>
                <span className="text-xs text-ns-gray font-semibold">
                  {transaction.joinDate}
                </span>
              </div>
            </div>
            <ArrowUpRight className="h-5 w-5 text-ns-neutral-dark" />
          </div>
        ))}

        <div className="pt-4">
          <Button
            variant="ghost"
            className="w-full text-sm font-semibold text-ns-title border py-5"
          >
            View All
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
