"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { X, Plus, Send, Eye } from "lucide-react";
import { toast } from "sonner";
import NSInput from "@/components/ui/core/NSInput";
import NSButton from "@/components/ui/core/NSButton";

interface SurveyFormData {
  title: string;
  promotionalMessage: string;
  date: string;
  time: string;
  emails: string[];
}

export default function PromotionalMessageModal() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState<SurveyFormData>({
    title: "",
    promotionalMessage: "",
    date: "",
    time: "",
    emails: [],
  });
  const [newEmail, setNewEmail] = useState("");
  const [errors, setErrors] = useState<Partial<SurveyFormData>>({});

  const handleInputChange = (field: keyof SurveyFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<SurveyFormData> = {};
    const { title, promotionalMessage, date, time, emails } = formData;

    if (!title.trim()) newErrors.title = "Survey title is required";
    if (!promotionalMessage.trim())
      newErrors.promotionalMessage = "Promotional message is required";
    if (!date) newErrors.date = "Date is required";
    if (!time) newErrors.time = "Time is required";
    // if (emails.length === 0) newErrors.emails = "At least one email is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const addEmail = () => {
    const email = newEmail.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) return;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }
    if (formData.emails.includes(email)) {
      toast.error("Email already added");
      return;
    }

    setFormData((prev) => ({
      ...prev,
      emails: [...prev.emails, email],
    }));
    setNewEmail("");
    if (errors.emails) {
      setErrors((prev) => ({ ...prev, emails: undefined }));
    }
  };

  const removeEmail = (emailToRemove: string) => {
    setFormData((prev) => ({
      ...prev,
      emails: prev.emails.filter((email) => email !== emailToRemove),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    // Simulate API submission
    console.log("Survey Submitted:", formData);
    toast.success("Your survey has been successfully created and scheduled.");

    setFormData({
      title: "",
      promotionalMessage: "",
      date: "",
      time: "",
      emails: [],
    });
    setErrors({});
    setOpen(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addEmail();
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild className="cursor-pointer">
        <Eye className="text-sc-primary size-5" />
      </DialogTrigger>

      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">
            Create New Survey
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div className="space-y-2">
            <Label htmlFor="title">Survey Title</Label>
            <NSInput
              id="title"
              value={formData.title}
              onChange={(e) => handleInputChange("title", e.target.value)}
              className={errors.title ? "border-red-500" : ""}
              placeholder="Enter survey title"
              autoComplete="off"
            />
            {errors.title && (
              <p className="text-sm text-red-500">{errors.title}</p>
            )}
          </div>

          {/* Message */}
          <div className="space-y-2">
            <Label htmlFor="promotionalMessage">Promotional Message</Label>
            <Textarea
              id="promotionalMessage"
              value={formData.promotionalMessage}
              onChange={(e) =>
                handleInputChange("promotionalMessage", e.target.value)
              }
              className={errors.promotionalMessage ? "border-red-500" : ""}
              placeholder="Write your promotional message here..."
              rows={5}
            />
            {errors.promotionalMessage && (
              <p className="text-sm text-red-500">
                {errors.promotionalMessage}
              </p>
            )}
          </div>

          {/* Date & Time */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="date">Select Date</Label>
              <NSInput
                id="date"
                type="date"
                value={formData.date}
                onChange={(e) => handleInputChange("date", e.target.value)}
                className={errors.date ? "border-red-500" : ""}
              />
              {errors.date && (
                <p className="text-sm text-red-500">{errors.date}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="time">Select Time</Label>
              <NSInput
                id="time"
                type="time"
                value={formData.time}
                onChange={(e) => handleInputChange("time", e.target.value)}
                className={errors.time ? "border-red-500" : ""}
              />
              {errors.time && (
                <p className="text-sm text-red-500">{errors.time}</p>
              )}
            </div>
          </div>

          {/* Emails */}
          <div className="space-y-2">
            <Label htmlFor="email">Sending Email</Label>
            <div className="flex gap-2">
              <NSInput
                id="email"
                placeholder="Enter email address"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
                onKeyDown={handleKeyPress}
                className="flex-1"
              />
              <Button
                type="button"
                onClick={addEmail}
                size="icon"
                variant="outline"
                className=" py-5"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>

            {formData.emails.length > 0 && (
              <div className="flex flex-wrap gap-2 p-3 bg-muted rounded-md">
                {formData.emails.map((email) => (
                  <Badge
                    key={email}
                    variant="secondary"
                    className="flex items-center gap-1"
                  >
                    {email}
                    <button
                      type="button"
                      onClick={() => removeEmail(email)}
                      className="ml-1 hover:bg-gray-300 rounded-full p-0.5"
                      aria-label="Remove email"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
              </div>
            )}

            {errors.emails && (
              <p className="text-sm text-red-500">{errors.emails}</p>
            )}
          </div>

          {/* Submit */}
          <NSButton
            type="submit"
            className="w-full rounded-lg py-3  flex items-center justify-center gap-3"
          >
            <Send className="h-4 w-4" />
            Submit
          </NSButton>
        </form>
      </DialogContent>
    </Dialog>
  );
}
