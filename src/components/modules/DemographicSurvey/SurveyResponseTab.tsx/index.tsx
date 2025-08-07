import NSButton from "@/components/ui/core/NSButton";
import { Download } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SurveyResponseTab = () => {
  return (
    <>
      <div className="mt-4 flex flex-col lg:flex-row gap-4 items-center justify-between">
        <div className=" w-full">
          <Select>
            <SelectTrigger className="w-full py-9.5 shadow-sm">
              <SelectValue placeholder="Section" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Personal Information</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className=" w-full border shadow-sm rounded-lg py-2 px-3">
          <p className=" text-lg font-normal text-sc-dark-gray">
            Number of Surveys Participants
          </p>
          <h2 className=" mt-2 font-semibold text-sc-charcoal-logic">20</h2>
        </div>
        <NSButton className=" flex items-center justify-center gap-2 w-full rounded-lg py-6">
          Export <Download className=" size-3.5 text-sc-white" />
        </NSButton>
      </div>
    </>
  );
};

export default SurveyResponseTab;
