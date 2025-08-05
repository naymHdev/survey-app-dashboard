"use client";

import NSButton from "@/components/ui/core/NSButton";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ArrowRight, CirclePlus } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import NSInput from "@/components/ui/core/NSInput";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import DescriptionEditor from "../GiftCardTab/DescriptionEditor";

interface Option {
  points: string;
}

const AddCouponModal = () => {
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
        <DialogTrigger className=" w-full">
          <NSButton className=" flex items-center justify-center w-full gap-4 rounded-lg py-6">
            <CirclePlus className=" w-6 h-6" />
            Add Coupon
          </NSButton>
        </DialogTrigger>
        <DialogContent className="!max-w-4xl w-full overflow-y-auto max-h-[90vh]">
          <form className="mt-6">
            <div className="flex items-center justify-between">
              <h3 className=" text-lg font-parkinsans font-medium">
                Enter Coupon Name
              </h3>
              <Switch className="data-[state=checked]:bg-sc-primary data-[state=unchecked]:bg-gray-300 cursor-pointer" />
            </div>
            <div className=" mt-4">
              <NSInput className=" py-6" placeholder="Enter Coupon Name" />
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
                <CardContent key={index} className=" w-full">
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
            <NSButton className=" w-full rounded-lg py-4 mt-6 flex items-center justify-center gap-4">
              Submit <ArrowRight className=" size-6" />
            </NSButton>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddCouponModal;
