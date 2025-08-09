import NSInput from "@/components/ui/core/NSInput";
import { Plus, Trash2 } from "lucide-react";
import { useState } from "react";

const MultipleChoice = () => {
  const [options, setOptions] = useState<string[]>([]);
  const [optionName, setOptionName] = useState<string>("");

  const addedOptions = () => {
    const trimmed = optionName.trim();
    if (!trimmed) return;

    setOptions([...options, trimmed]);
    setOptionName(""); // clear input
  };

  const removeOption = (index: number) => {
    setOptions(options.filter((_, i) => i !== index));
  };

  return (
    <>
      <section className="flex items-center justify-between mt-4">
        <h2 className="text-lg font-semibold text-sc-dark-gray">Add Option</h2>

        <Plus
          onClick={addedOptions}
          className="text-sc-charcoal-logic size-6 cursor-pointer hover:text-sc-primary"
        />
      </section>

      <div>
        <NSInput
          className="py-6 w-full bg-sc-primary/5 border-none shadow-none"
          placeholder="Other Option Name"
          value={optionName}
          onChange={(e) => setOptionName(e.target.value)}
        />
      </div>

      <div className="mt-2 grid grid-cols-1 lg:grid-cols-3 gap-4">
        {options.map((itm, idx) => (
          <div key={idx} className=" rounded-lg bg-sc-primary/5 py-6 px-4">
            <div className="flex items-center justify-between">
              <p>{itm}</p>
              <Trash2
                onClick={() => removeOption(idx)}
                className="size-5 cursor-pointer text-red-600"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MultipleChoice;
