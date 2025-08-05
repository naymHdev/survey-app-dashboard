"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowRight, Eye, X } from "lucide-react";
import NSButton from "@/components/ui/core/NSButton";

const CustomerDetailsModal = () => {
  return (
    <>
      <Dialog>
        <DialogTrigger className="cursor-pointer">
          <Eye className="text-sc-primary size-6" />
        </DialogTrigger>
        <DialogContent className="max-w-md p-0 gap-0">
          <DialogHeader className="p-6 pb-4">
            <DialogTitle className="sr-only">Customer Details</DialogTitle>
          </DialogHeader>

          <div className="px-6 pb-6 space-y-4">
            <div className="space-y-2">
              <Label
                htmlFor="name"
                className="text-sm font-medium text-gray-700"
              >
                Name
              </Label>
              <Input
                id="name"
                value="Aria Tabassum"
                readOnly
                className="border-0 border-b border-gray-200 rounded-none px-0 focus-visible:ring-0 focus-visible:border-gray-400"
              />
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="email"
                className="text-sm font-medium text-gray-700"
              >
                Email
              </Label>
              <Input
                id="email"
                value="aria1234@gmail.com"
                readOnly
                className="border-0 border-b border-gray-200 rounded-none px-0 focus-visible:ring-0 focus-visible:border-gray-400"
              />
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="message"
                className="text-sm font-medium text-gray-700"
              >
                Message
              </Label>
              <Textarea
                id="message"
                value="I am experiencing multiple issues with the app. First, I am unable to log in to my account despite entering the correct credentials. I have tried resetting my password several times but never received the password reset email. Additionally, some surveys that I should be eligible for are not appearing in my survey list. After completing a few surveys, my points have not been credited to my account, which is quite frustrating as I rely on these rewards. Furthermore, I attempted to redeem my points for a gift card, but the redemption process failed with an error message. On top of that, the app occasionally crashes when I try to start a survey, and I am not receiving any notifications about new surveys. I also tried updating my profile information, but the changes do not seem to save. Please assist me in resolving these issues as soon as possible."
                readOnly
                className="min-h-[200px] border-0 border-b border-gray-200 rounded-none px-0 resize-none focus-visible:ring-0 focus-visible:border-gray-400 text-sm"
              />
            </div>

            <div>
              <Textarea
                className="max-h-14 w-full rounded-lg focus:outline-none focus-visible:ring-0 focus-visible:border-neutral-200"
                placeholder="Add Reply"
              />
            </div>
            <NSButton className="w-full  text-white py-3 rounded-lg flex items-center gap-3 justify-center">
              Submit
              <ArrowRight className=" size-6" />
            </NSButton>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CustomerDetailsModal;
