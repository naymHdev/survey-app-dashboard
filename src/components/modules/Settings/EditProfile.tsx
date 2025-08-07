"use client";

import { useRef, useState } from "react";
import { SquarePen } from "lucide-react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import defaultImg from "@/assets/images/db-profile.png"; // fallback default
import EditProfileForm from "./EditProfileForm";
import ChangePassForm from "./ChangePassForm";

const EditProfile = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [previewImage, setPreviewImage] = useState<string>(defaultImg.src);

  const handleIconClick = () => {
    fileInputRef.current?.click();
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreviewImage(imageUrl);
    }
  };

  return (
    <>
      {/* ----- Change Profile Picture ----- */}
      <section className="w-full bg-sc-primary flex items-center justify-center gap-4 py-12">
        <div className="w-32 h-32 rounded-full overflow-hidden relative border border-sc-white group">
          <Image
            src={previewImage}
            alt="Profile Preview"
            width={128}
            height={128}
            className="w-32 h-32 rounded-full object-cover"
          />

          {/* Hidden File Input */}
          <input
            type="file"
            accept="image/*"
            className="hidden"
            ref={fileInputRef}
            onChange={handleImageChange}
          />

          {/* Pencil Icon */}
          <div
            className="absolute bottom-2 right-2 bg-sc-white p-2 rounded-full cursor-pointer shadow hover:scale-105 transition"
            onClick={handleIconClick}
          >
            <SquarePen className="w-5 h-5 text-sc-charcoal-logic" />
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-sc-white">John Doe</h2>
          <p className="text-sm text-sc-white">Admin</p>
        </div>
      </section>

      <section>
        <Tabs defaultValue="editProfile" className="mt-6">
          <div className=" flex items-center justify-center">
            <TabsList className="flex flex-wrap space-x-6 bg-transparent">
              <TabsTrigger
                value="editProfile"
                className=" font-semibold cursor-pointer px-4 py-2 text-gray-700 data-[state=active]:border-b-2 data-[state=active]:border-b-sc-charcoal-logic data-[state=active]:font-semibold focus:outline-none whitespace-nowrap shadow-none data-[state=active]:shadow-none data-[state=active]:rounded-none transition-colors"
              >
                Edit Profile
              </TabsTrigger>
              <TabsTrigger
                value="changePass"
                className=" font-semibold cursor-pointer px-4 py-2 text-gray-700 data-[state=active]:border-b-2 data-[state=active]:border-b-sc-charcoal-logic data-[state=active]:font-semibold focus:outline-none whitespace-nowrap shadow-none data-[state=active]:shadow-none data-[state=active]:rounded-none transition-colors"
              >
                Change Password
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="editProfile">
            <EditProfileForm />
          </TabsContent>

          <TabsContent value="changePass">
            <ChangePassForm />
          </TabsContent>
        </Tabs>
      </section>
    </>
  );
};

export default EditProfile;
