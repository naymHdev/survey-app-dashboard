"use client";

import { useState } from "react";
import { Plus, Edit3, Trash2, Shuffle, Image } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import NSInput from "@/components/ui/core/NSInput";
import {
  Controller,
  FieldErrors,
  FieldValues,
  UseFormRegister,
} from "react-hook-form";

interface AddOptionSectionProps {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  control: any;
  options: string[];
  setOptions: React.Dispatch<React.SetStateAction<string[]>>;
}
export default function AddOptionSection({
  register,
  errors,
  control,
  options,
  setOptions,
}: AddOptionSectionProps) {
  const [isRequired, setIsRequired] = useState(false);
  const [conditionalLogic, setConditionalLogic] = useState(false);

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

        {/* Required and Randomize Options */}
        <div className="flex items-center space-x-8 pt-2">
          <div className="flex items-center space-x-2">
            <Trash2 className="h-4 w-4 text-red-500" />
            <span className="text-sm text-gray-700">Required</span>
            <Switch
              checked={isRequired}
              onCheckedChange={setIsRequired}
              className="data-[state=checked]:bg-gray-600"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Shuffle className="h-4 w-4 text-gray-500" />
            <span className="text-sm text-gray-700">Randomize Options</span>
          </div>
        </div>
      </div>

      <Separator className="my-6" />

      {/* Enter Conditional Logic */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-[16px] text-sc-dark-gray font-normal">
            Enter Conditional Logic
          </h3>
          <Switch
            checked={conditionalLogic}
            onCheckedChange={setConditionalLogic}
            className="data-[state=checked]:bg-gray-600"
          />
        </div>

        {/* Conditional Logic Builder */}
        <div className="flex flex-col lg:flex-row items-center gap-3">
          <span className="text-sm text-gray-700">If</span>
          <div className=" flex w-full flex-col lg:flex-row gap-3">
            <Controller
              name="previousQuestion"
              control={control}
              defaultValue=""
              rules={{ required: true }}
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className="py-6 bg-sc-primary/5 border-none shadow-none leading-snug w-full">
                    <SelectValue placeholder="Select Previous Question" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="q1">Question 1</SelectItem>
                    <SelectItem value="q2">Question 2</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
            {errors.previousQuestion && (
              <p className="text-red-500 text-sm">This field is required</p>
            )}
            <Controller
              name="condition"
              control={control}
              defaultValue="equal"
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className="py-6 bg-sc-primary/5 border-none shadow-none leading-snug w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="equal">Equal</SelectItem>
                    <SelectItem value="not-equal">Not Equal</SelectItem>
                    <SelectItem value="greater">Greater</SelectItem>
                    <SelectItem value="less">Less</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
            {errors.condition && (
              <p className="text-red-500 text-sm">This field is required</p>
            )}
            <NSInput
              placeholder="Value Input"
              className="py-6 bg-sc-primary/5 border-none shadow-none leading-snug"
              {...register("conditionalValue", { required: true })}
            />
          </div>
        </div>
      </div>

      <Separator className="my-6" />

      {/* Enter Question Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-medium text-gray-900">
            Enter Question
          </h3>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-700">Choose Question Type</span>
            <Controller
              name="answerType"
              defaultValue={"checkbox"}
              control={control}
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className="py-6 bg-sc-primary/5 border-none shadow-none leading-snug">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="checkbox">Checkbox</SelectItem>
                    <SelectItem value="radio">Radio</SelectItem>
                    <SelectItem value="text">Text</SelectItem>
                    <SelectItem value="dropdown">Dropdown</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
          </div>
        </div>

        <div className="relative">
          <Textarea
            placeholder="e.g, How often do you shop for non-essential items?"
            className="min-h-[80px]  bg-sc-primary/5 border-none shadow-none leading-snug"
            {...register("lastQuestion", { required: true })}
          />
          {errors.lastQuestion && (
            <span className="text-red-400 text-sm">This field is required</span>
          )}
        </div>
      </div>
    </div>
  );
}
