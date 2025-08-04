"use client";

import NSButton from "@/components/ui/core/NSButton";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { CirclePlus } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import NSInput from "@/components/ui/core/NSInput";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import DescriptionEditor from "./DescriptionEditor";

interface Option {
  points: string;
  value: string;
}

const AddGiftCardModal = () => {
  const [options, setOptions] = useState<Option[]>([{ points: "", value: "" }]);

  const handleAddOption = () => {
    setOptions([...options, { points: "", value: "" }]);
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
            Add Gift Card
          </NSButton>
        </DialogTrigger>
        <DialogContent className="!max-w-4xl w-full">
          <form className="mt-6">
            <div className="flex items-center justify-between">
              <h3 className=" text-lg font-parkinsans font-medium">
                Enter Gift Card Title
              </h3>
              <Switch className="data-[state=checked]:bg-sc-primary data-[state=unchecked]:bg-gray-300" />
            </div>
            <div className=" mt-4">
              <NSInput className=" py-6" placeholder="Enter Gift Card Title" />
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
                >
                  <CirclePlus className="h-6 w-6" />
                </Button>
              </div>

              {options.map((option, index) => (
                <CardContent
                  key={index}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4 px-0"
                >
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
                  <div>
                    <Label htmlFor={`value-${index}`} className="mb-2 block">
                      Monetary value
                    </Label>
                    <NSInput
                      id={`value-${index}`}
                      type="text"
                      inputMode="decimal"
                      placeholder="e.g., $20"
                      value={option.value}
                      onChange={(e) =>
                        handleChange(index, "value", e.target.value)
                      }
                    />
                  </div>
                </CardContent>
              ))}
            </Card>
            <NSButton className=" w-full rounded-lg py-4 mt-6">Submit</NSButton>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddGiftCardModal;
