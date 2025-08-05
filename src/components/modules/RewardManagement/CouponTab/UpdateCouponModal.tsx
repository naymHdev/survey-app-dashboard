"use client";

import NSButton from "@/components/ui/core/NSButton";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ArrowRight, CirclePlus, SquarePen, X } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import NSInput from "@/components/ui/core/NSInput";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import DescriptionEditor from "../GiftCardTab/DescriptionEditor";

const couponData = [
  {
    isActive: true,
    title: "10% Off at Local Grocery",
    points: 100,
  },
  {
    isActive: true,
    title: "20% Off at Local Grocery",
    points: 300,
  },
];

interface Option {
  points: string;
}

const UpdateCouponModal = () => {
  const [options, setOptions] = useState<Option[]>([{ points: "" }]);

  const handleAddOption = () => {
    setOptions([...options, { points: "" }]);
  };

  const handleChange = (index: number, field: keyof Option, value: string) => {
    const updatedOptions = [...options];
    updatedOptions[index][field] = value;
    setOptions(updatedOptions);
  };

  return (
    <>
      <Dialog>
        <DialogTrigger className="">
          <SquarePen className="w-6 h-6 cursor-pointer" />
        </DialogTrigger>
        <DialogContent className="!max-w-4xl w-full font-sora overflow-y-auto max-h-[90vh]">
          <form className="mt-6">
            <div className="flex items-center justify-between">
              <h3 className=" text-lg font-parkinsans font-medium">
                Update Coupon
              </h3>
              <Switch className="data-[state=checked]:bg-sc-primary data-[state=unchecked]:bg-gray-300 cursor-pointer" />
            </div>
            <div className=" mt-4">
              <NSInput className=" py-6" placeholder="Update Coupon Name" />
            </div>
            <div className=" mt-4">
              <DescriptionEditor />
            </div>
            <Card className=" bg-sc-primary/5 rounded-xl p-4 w-full mt-4 border-none shadow-none">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Add Option</h2>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={handleAddOption}
                  className=" cursor-pointer"
                >
                  <CirclePlus className="h-6 w-6" />
                </Button>
              </div>

              {options.map((option, index) => (
                <CardContent key={index} className="w-full">
                  <div>
                    <Label htmlFor={`points-${index}`} className="mb-2 block">
                      Points required
                    </Label>
                    <NSInput
                      id={`points-${index}`}
                      type="number"
                      inputMode="numeric"
                      placeholder="e.g., 100"
                      value={option.points}
                      onChange={(e) =>
                        handleChange(index, "points", e.target.value)
                      }
                    />
                  </div>
                </CardContent>
              ))}
            </Card>
            {/* Gift Cards */}
            <div className=" mt-4">
              {couponData?.map((gift, idx) => (
                <div
                  key={`${idx + 1}`}
                  className=" flex items-center justify-between gap-1 text-center mt-2"
                >
                  <div className="p-4 bg-sc-primary/10 font-medium leading-snug text-sc-dark-gray w-full">
                    {gift.title}
                  </div>
                  <div className="p-4 bg-sc-primary/10 font-medium leading-snug text-sc-dark-gray w-full">
                    {gift.points} Points
                  </div>
                  <div className="p-4 bg-sc-primary/10 font-medium leading-snug text-sc-dark-gray w-full flex items-center justify-center">
                    <X className=" w-6 h-6 cursor-pointer" />
                  </div>
                </div>
              ))}
            </div>
            <div className=" flex items-center justify-center gap-4 mt-6">
              <NSButton className=" w-full rounded-lg py-4 flex items-center justify-center gap-4">
                Update
                <ArrowRight className=" size-6" />
              </NSButton>
              <NSButton className=" w-full rounded-lg py-4 bg-transparent text-sc-primary border border-sc-primary hover:bg-sc-primary hover:text-sc-white flex items-center justify-center gap-4">
                Cancel
                <ArrowRight className=" size-6" />
              </NSButton>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default UpdateCouponModal;
