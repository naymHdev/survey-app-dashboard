"use client";

import { Plus, Trash2, Image } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import NSInput from "@/components/ui/core/NSInput";

interface AddOptionSectionProps {
  options: string[];
  setOptions: React.Dispatch<React.SetStateAction<string[]>>;
}
export default function AddOptionSection({
  options,
  setOptions,
}: AddOptionSectionProps) {
  const addOption = () => {
    setOptions([...options, ""]);
  };

  const removeOption = (index: number) => {
    setOptions(options.filter((_, i) => i !== index));
  };

  const updateOption = (index: number, value: string) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-white">
      {/* Add Option Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-[16px] text-sc-dark-gray font-normal">
            Add Option
          </h3>
          <Button
            onClick={addOption}
            size="sm"
            variant="ghost"
            className="h-8 w-8 p-0 hover:bg-gray-100"
          >
            <Plus className="h-4 w-4 text-gray-600" />
          </Button>
        </div>

        {/* Options List */}
        <div className="space-y-3">
          {options.map((option, index) => (
            <div key={index} className="flex items-center space-x-3 group">
              <Checkbox
                className="border-gray-300 data-[state=checked]:bg-gray-600 data-[state=checked]:border-gray-600"
                defaultChecked
              />
              <NSInput
                value={option}
                onChange={(e) => updateOption(index, e.target.value)}
                className="flex-1 py-6 bg-sc-primary/5 border-none shadow-none leading-snug"
                placeholder="Enter option"
              />
              <Button
                size="sm"
                variant="ghost"
                className="h-8 w-8 p-0 text-blue-500 hover:bg-blue-50"
              >
                <Image className="h-4 w-4" />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => removeOption(index)}
                className="h-8 w-8 p-0 text-red-500 hover:bg-red-50"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
