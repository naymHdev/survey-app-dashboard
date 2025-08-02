import Image from "next/image";
import { Card } from "@/components/ui/card";
import pImg from "@/assets/images/db-profile.png";

export default function UserProfileSection() {
  return (
    <div className="">
      <Card className="overflow-hidden border-none p-0 shadow-none">
        {/* Profile Image Section */}
        <div className="flex justify-center">
          <div className="relative">
            <Image
              src={pImg}
              alt="Profile picture of Rahil Rahman"
              width={120}
              height={120}
              className="rounded-full object-cover"
            />
          </div>
        </div>

        {/* Profile Information */}
        <div className="divide-y divide-gray-200">
          {/* Name */}
          <div className="flex justify-between items-center px-6 py-4 bg-blue-50">
            <span className="text-gray-600 font-medium">Name</span>
            <span className="text-gray-900 font-semibold">Rahil Rahman</span>
          </div>

          {/* Email */}
          <div className="flex justify-between items-center px-6 py-4">
            <span className="text-gray-600 font-medium">Email</span>
            <span className="text-gray-900">rahil123@gmail.com</span>
          </div>

          {/* Phone Number */}
          <div className="flex justify-between items-center px-6 py-4 bg-blue-50">
            <span className="text-gray-600 font-medium">Phone Number</span>
            <span className="text-gray-900">+880123456</span>
          </div>

          {/* Date of Join */}
          <div className="flex justify-between items-center px-6 py-4">
            <span className="text-gray-600 font-medium">Date of Join</span>
            <span className="text-gray-900">10 Jan, 2025</span>
          </div>

          {/* Account Status */}
          <div className="flex justify-between items-center px-6 py-4 bg-blue-50">
            <span className="text-gray-600 font-medium">Account Status</span>
            <span className="text-green-600 font-semibold">Active</span>
          </div>

          {/* Total Points Earned */}
          <div className="flex justify-between items-center px-6 py-4">
            <span className="text-gray-600 font-medium">
              Total Points Earned
            </span>
            <span className="text-gray-900 font-bold text-lg">300</span>
          </div>

          {/* Surveys Completed */}
          <div className="flex justify-between items-center px-6 py-4 bg-blue-50">
            <span className="text-gray-600 font-medium">Surveys Completed</span>
            <span className="text-gray-900 font-bold text-lg">12</span>
          </div>

          {/* Total Points Redeemed */}
          <div className="flex justify-between items-center px-6 py-4">
            <span className="text-gray-600 font-medium">
              Total Points Redeemed
            </span>
            <span className="text-gray-900 font-bold text-lg">100</span>
          </div>
        </div>
      </Card>
    </div>
  );
}
