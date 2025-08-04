import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import {
  Control,
  Controller,
  FieldErrors,
  FieldValues,
  UseFormRegister,
  useWatch,
} from "react-hook-form";
import AddOptionSection from "../../SurveyManagement/AddOptionSection";
import NSInput from "@/components/ui/core/NSInput";

interface QuestionTypeProps {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  control: Control;
  options: string[];
  setOptions: React.Dispatch<React.SetStateAction<string[]>>;
}
const QuestionType = ({
  control,
  register,
  errors,
  options,
  setOptions,
}: QuestionTypeProps) => {
  // ✅ Watch the currently selected question type
  const questionType = useWatch({ control, name: "questionType" });

  return (
    <>
      <div className=" mt-2">
        <Label className="text-[16px] text-sc-dark-gray font-normal mb-2">
          Choose Question Type
        </Label>
        <Controller
          name="questionType"
          control={control}
          rules={{ required: "Please select a type" }}
          render={({ field }) => (
            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger className="py-6 bg-sc-primary/5 border-none shadow-none leading-snug w-full">
                <SelectValue placeholder="Open-Ended (Text Response)" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="textResponse">
                  Open-Ended (Text Response)
                </SelectItem>
                <SelectItem value="multipleChoice">Multiple Choice</SelectItem>
                <SelectItem value="checkbox">Checkboxes</SelectItem>
                <SelectItem value="dropdown">Dropdown</SelectItem>
                <SelectItem value="ranking">Ranking</SelectItem>
                <SelectItem value="scaleRating">Scale / Rating</SelectItem>
                <SelectItem value="imageUpload">Image Upload</SelectItem>
              </SelectContent>
            </Select>
          )}
        />
      </div>

      {/* ✅ Conditionally render based on selected type */}
      <div className="mt-4 space-y-4">
        {questionType === "textResponse" && (
          <NSInput
            placeholder="Open-Ended (Text Response)"
            {...register("TextResponse", { required: true })}
          />
        )}

        {["multipleChoice", "checkbox", "dropdown"].includes(questionType) && (
          <AddOptionSection options={options} setOptions={setOptions} />
        )}
      </div>
    </>
  );
};

export default QuestionType;
