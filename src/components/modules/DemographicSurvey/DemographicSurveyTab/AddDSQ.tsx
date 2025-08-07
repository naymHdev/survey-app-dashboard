"use client";

import { Card } from "@/components/ui/card";
import NSButton from "@/components/ui/core/NSButton";
import NSInput from "@/components/ui/core/NSInput";
import { Label } from "@/components/ui/label";
import {
  ArrowRight,
  Plus,
  Trash2,
  FileImage,
  Shuffle,
  CirclePlus,
} from "lucide-react";
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
import Image from "next/image";
import QuestionType from "./QuestionType";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const AddDSQ = () => {
  const [sections, setSections] = useState<string[]>([]);
  const [sectionName, setSectionName] = useState<string>("");
  const [question, setQuestion] = useState<string[]>([]);
  const [options, setOptions] = useState([
    "Online retailers (Amazon, eBay, etc.)",
    "Department stores",
    "Local boutiques",
    "Department stores",
  ]);
  const [date, setDate] = useState<Date | undefined>(new Date("2025-06-01"));
  const [preview, setPreview] = useState<string | null>(null);
  const [conditionalLogic, setConditionalLogic] = useState(false);
  const [isRequired, setIsRequired] = useState(false);

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

  const addQuestion = () => {
    setQuestion((prev) => [...prev]);
    console.log("question");
  };

  console.log("question", question);

  const removeSection = (index: number) => {
    setSections((prev) => prev.filter((_, i) => i !== index));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const formData = {
      sectionName: sections[0],
      options: options,
      expireDate: date,
    };

    // console.log(data, "formData__", formData);
  };

  return (
    <div className="font-sora">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
          {/* Left Side */}
          <Card className="col-span-full md:col-span-3 p-4 lg:p-6 border-none">
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
                          className="w-5 h-5 text-red-500 hover:text-red-700"
                          onClick={(e) => {
                            e.stopPropagation();
                            removeSection(idx);
                          }}
                        />
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div>
                        <div className=" flex items-center justify-end">
                          <NSButton
                            onClick={addQuestion}
                            className=" flex items-center justify-center gap-2 rounded-lg py-3"
                          >
                            <CirclePlus className="w-5 h-5" />{" "}
                            <p>Add Nnw Question</p>
                          </NSButton>
                        </div>
                        <div>
                          <Label className="text-[16px] text-sc-dark-gray font-normal mb-2">
                            Enter Survey Question
                          </Label>

                          <div className="flex items-center rounded-md bg-sc-primary/5 px-4 py-3">
                            {/* Input field */}
                            <NSInput
                              className="flex-1 bg-transparent border-none shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
                              placeholder="e.g, How often do you shop for non-essential items?"
                              {...register("surveyQuestion", {
                                required: true,
                              })}
                            />

                            {/* Upload button */}
                            <label
                              htmlFor="survey-image"
                              className="ml-2 cursor-pointer rounded-md p-1 hover:bg-sc-primary/10 transition"
                            >
                              <FileImage className="  text-sc-primary size-5" />
                              <input
                                id="survey-image"
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={handleImageChange}
                              />
                            </label>
                          </div>

                          {/* Error message */}
                          {errors.surveyQuestion && (
                            <span className="text-red-400 text-sm">
                              This field is required
                            </span>
                          )}

                          {/* Image preview */}
                          {preview && (
                            <div className="mt-3 w-32 h-32 relative rounded border overflow-hidden">
                              <Image
                                src={preview}
                                alt="Uploaded preview"
                                width={128}
                                height={128}
                                className="object-cover"
                              />
                            </div>
                          )}
                        </div>

                        <QuestionType
                          register={register}
                          errors={errors}
                          control={control}
                          options={options}
                          setOptions={setOptions}
                        />

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
                                  <Select
                                    value={field.value}
                                    onValueChange={field.onChange}
                                  >
                                    <SelectTrigger className="py-6 bg-sc-primary/5 border-none shadow-none leading-snug w-full">
                                      <SelectValue placeholder="Select Previous Question" />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectItem value="q1">
                                        Question 1
                                      </SelectItem>
                                      <SelectItem value="q2">
                                        Question 2
                                      </SelectItem>
                                    </SelectContent>
                                  </Select>
                                )}
                              />
                              {errors.previousQuestion && (
                                <p className="text-red-500 text-sm">
                                  This field is required
                                </p>
                              )}
                              <Controller
                                name="condition"
                                control={control}
                                defaultValue="equal"
                                render={({ field }) => (
                                  <Select
                                    value={field.value}
                                    onValueChange={field.onChange}
                                  >
                                    <SelectTrigger className="py-6 bg-sc-primary/5 border-none shadow-none leading-snug w-full">
                                      <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectItem value="equal">
                                        Equal
                                      </SelectItem>
                                      <SelectItem value="not-equal">
                                        Not Equal
                                      </SelectItem>
                                      <SelectItem value="greater">
                                        Greater
                                      </SelectItem>
                                      <SelectItem value="less">Less</SelectItem>
                                    </SelectContent>
                                  </Select>
                                )}
                              />
                              {errors.condition && (
                                <p className="text-red-500 text-sm">
                                  This field is required
                                </p>
                              )}
                              <NSInput
                                placeholder="Value Input"
                                className="py-6 bg-sc-primary/5 border-none shadow-none leading-snug"
                                {...register("conditionalValue", {
                                  required: true,
                                })}
                              />
                            </div>
                          </div>
                        </div>

                        {/* Required and Randomize Options */}
                        <div className="flex items-center space-x-8 pt-2">
                          <div className="flex items-center space-x-2">
                            <Trash2 className="h-4 w-4 text-red-500" />
                            <span className="text-sm text-gray-700">
                              Required
                            </span>
                            <Switch
                              checked={isRequired}
                              onCheckedChange={setIsRequired}
                              className="data-[state=checked]:bg-gray-600"
                            />
                          </div>
                          <div className="flex items-center space-x-2">
                            <Shuffle className="h-4 w-4 text-gray-500" />
                            <span className="text-sm text-gray-700">
                              Randomize Options
                            </span>
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
                              <span className="text-sm text-gray-700">
                                Choose Question Type
                              </span>
                              <Controller
                                name="answerType"
                                defaultValue={"checkbox"}
                                control={control}
                                render={({ field }) => (
                                  <Select
                                    value={field.value}
                                    onValueChange={field.onChange}
                                  >
                                    <SelectTrigger className="py-6 bg-sc-primary/5 border-none shadow-none leading-snug">
                                      <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectItem value="checkbox">
                                        Checkbox
                                      </SelectItem>
                                      <SelectItem value="radio">
                                        Radio
                                      </SelectItem>
                                      <SelectItem value="text">Text</SelectItem>
                                      <SelectItem value="dropdown">
                                        Dropdown
                                      </SelectItem>
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
                              <span className="text-red-400 text-sm">
                                This field is required
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      {/*  ------ Add new question */}
                      <section>
                        {question.length > 0 && (
                          <div>
                            {question.map((qs, idx) => (
                              <div key={`${idx + 1}`}>
                                <QuestionType
                                  register={register}
                                  errors={errors}
                                  control={control}
                                  options={options}
                                  setOptions={setOptions}
                                />
                              </div>
                            ))}
                          </div>
                        )}
                      </section>
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
            Cancel
            <ArrowRight className="w-6 h-6" />
          </NSButton>
        </section>
      </form>
    </div>
  );
};

export default AddDSQ;
