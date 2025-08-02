"use client";

import { Card } from "@/components/ui/card";
import NSButton from "@/components/ui/core/NSButton";
import NSInput from "@/components/ui/core/NSInput";
import { NSPickerWithInput } from "@/components/ui/core/NSPickerWithInput";
import { Label } from "@/components/ui/label";
import { ArrowRight, Plus, Trash2 } from "lucide-react";
import { useState } from "react";
import {
  Controller,
  FieldValues,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import AddOptionSection from "./AddOptionSection";

const AddSurveyForm = () => {
  const [sections, setSections] = useState<string[]>([]);
  const [sectionName, setSectionName] = useState<string>("");
  const [options, setOptions] = useState([
    "Online retailers (Amazon, eBay, etc.)",
    "Department stores",
    "Local boutiques",
    "Department stores",
  ]);
  const [date, setDate] = useState<Date | undefined>(new Date("2025-06-01"));

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const addSection = () => {
    if (!sectionName.trim()) return;
    setSections((prev) => [...prev, sectionName.trim()]);
    setSectionName("");
  };

  const removeSection = (index: number) => {
    setSections((prev) => prev.filter((_, i) => i !== index));
  };

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const formData = {
      sectionName: sections[0],
      options: options,
      expireDate: date,
    };

    console.log(data, "formData__", formData);
  };

  return (
    <div className="font-sora">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
          {/* Left Side */}
          <Card className="col-span-full md:col-span-3 p-4 lg:p-6 border-none">
            <div>
              <Label className="text-[16px] text-sc-dark-gray font-normal mb-2">
                Enter Survey ID
              </Label>
              <NSInput
                className="py-6 bg-sc-primary/5 border-none shadow-none leading-snug"
                placeholder="Enter Survey ID here..."
                {...register("surveyId", { required: true })}
              />
              {errors.surveyId && (
                <span className="text-red-400 text-sm">
                  This field is required
                </span>
              )}
            </div>
            <div>
              <Label className="text-[16px] text-sc-dark-gray font-normal mb-2">
                Enter Survey Title
              </Label>
              <NSInput
                className="py-6 bg-sc-primary/5 border-none shadow-none leading-snug"
                placeholder="Enter Title here....."
                {...register("surveyTitle", { required: true })}
              />
              {errors.surveyTitle && (
                <span className="text-red-400 text-sm">
                  This field is required
                </span>
              )}
            </div>
            <div>
              <Label className="text-[16px] text-sc-dark-gray font-normal mb-2">
                Expire Date
              </Label>
              <NSPickerWithInput
                className="py-6 bg-sc-primary/5 border-none shadow-none leading-snug"
                date={date}
                setDate={setDate}
              />
            </div>
            <div>
              <Label className="text-[16px] text-sc-dark-gray font-normal mb-2">
                Estimate Time
              </Label>
              <NSInput
                className="py-6 bg-sc-primary/5 border-none shadow-none leading-snug"
                placeholder="Select Time here....."
                type="time"
                {...register("selectTime", { required: true })}
              />
              {errors.selectTime && (
                <span className="text-red-400 text-sm">
                  This field is required
                </span>
              )}
            </div>
            <div>
              <Label
                onClick={addSection}
                className="hover:cursor-pointer flex items-center justify-between text-[16px] text-sc-dark-gray font-normal mb-2"
              >
                Add Section
                <Plus className="w-5 h-5 text-sc-dark-gray" />
              </Label>
              <NSInput
                className="py-6 bg-sc-primary/5 border-none shadow-none leading-snug"
                placeholder="Enter section title....."
                type="text"
                value={sectionName}
                onChange={(e) => setSectionName(e.target.value)}
              />
            </div>
          </Card>

          {/* Right Side Accordion */}
          <Card className="col-span-full md:col-span-4 p-4 lg:p-6 border-none font-sora">
            {sections.length > 0 && (
              <Accordion type="multiple" className="w-full ">
                {sections.map((title, idx) => (
                  <AccordionItem value={`section-${idx}`} key={idx}>
                    <AccordionTrigger>
                      <div className="flex items-center justify-between w-full">
                        <h2 className=" text-lg font-semibold text-sc-clarity-ice">
                          {title}
                        </h2>
                        <Trash2
                          className="w-4 h-4 text-red-500 hover:text-red-700"
                          onClick={(e) => {
                            e.stopPropagation();
                            removeSection(idx);
                          }}
                        />
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div>
                        <Label className="text-[16px] text-sc-dark-gray font-normal mb-2">
                          Enter Survey Question
                        </Label>
                        <NSInput
                          className="py-6 bg-sc-primary/5 border-none shadow-none leading-snug"
                          placeholder="e.g,How often do you shop for non-essential items?"
                          {...register("surveyQuestion", { required: true })}
                        />
                        {errors.surveyQuestion && (
                          <span className="text-red-400 text-sm">
                            This field is required
                          </span>
                        )}
                      </div>
                      <div className=" mt-2">
                        <Label className="text-[16px] text-sc-dark-gray font-normal mb-2">
                          Choose Question Type
                        </Label>
                        <Controller
                          name="questionType"
                          control={control}
                          rules={{ required: "Please select a type" }}
                          render={({ field }) => (
                            <Select
                              value={field.value}
                              onValueChange={field.onChange}
                            >
                              <SelectTrigger className="py-6 bg-sc-primary/5 border-none shadow-none leading-snug w-full">
                                <SelectValue placeholder="Checkbox" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="checkbox">
                                  Checkbox
                                </SelectItem>
                                <SelectItem value="radio">Radio</SelectItem>
                                <SelectItem value="text">Text</SelectItem>
                                <SelectItem value="dropdown">
                                  Dropdown
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          )}
                        />
                      </div>
                      <div>
                        <AddOptionSection
                          register={register}
                          errors={errors}
                          control={control}
                          options={options}
                          setOptions={setOptions}
                        />
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            )}
          </Card>
        </div>

        <section className="flex items-center justify-center gap-4 w-full mt-4">
          <NSButton
            type="submit"
            className="flex items-center justify-center gap-2 lg:gap-4 w-full rounded-lg py-4 border border-sc-primary bg-transparent text-sc-primary hover:text-sc-white hover:bg-sc-primary"
          >
            Save
            <ArrowRight className="w-6 h-6" />
          </NSButton>
          <NSButton className="flex items-center justify-center gap-2 lg:gap-4 w-full rounded-lg py-4 border border-sc-primary bg-transparent text-sc-primary hover:text-sc-white hover:bg-sc-primary">
            Add Question
            <ArrowRight className="w-6 h-6" />
          </NSButton>
        </section>
      </form>
    </div>
  );
};

export default AddSurveyForm;
