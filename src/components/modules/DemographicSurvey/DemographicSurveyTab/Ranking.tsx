import NSInput from "@/components/ui/core/NSInput";
import { FileImage, Plus, Trash2 } from "lucide-react";
import { useState, ChangeEvent } from "react";
import Image from "next/image";

interface Option {
  label: string;
  image?: File;
  preview?: string;
}

const Ranking = () => {
  const [options, setOptions] = useState<Option[]>([]);
  const [optionName, setOptionName] = useState<string>("");

  const addedOptions = () => {
    const trimmed = optionName.trim();
    if (!trimmed) return;

    setOptions([...options, { label: trimmed }]);
    setOptionName("");
  };

  const removeOption = (index: number) => {
    setOptions(options.filter((_, i) => i !== index));
  };

  const imageUploadHandler = (
    e: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    if (!e.target.files || e.target.files.length === 0) return;

    const file = e.target.files[0];
    const previewUrl = URL.createObjectURL(file);

    setOptions((prev) =>
      prev.map((opt, i) =>
        i === index ? { ...opt, image: file, preview: previewUrl } : opt
      )
    );
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

      <div className="mt-2 grid grid-cols-1 lg:grid-cols-2 gap-4">
        {options.map((itm, idx) => (
          <div
            key={idx}
            className="rounded-lg bg-sc-primary/5 py-6 px-4"
            draggable
            onDragStart={(e) => {
              e.dataTransfer.setData("dragIndex", idx.toString());
            }}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
              const fromIndex = parseInt(
                e.dataTransfer.getData("dragIndex"),
                10
              );
              const toIndex = idx;

              if (fromIndex === toIndex) return;

              setOptions((prev) => {
                const updated = [...prev];
                const [moved] = updated.splice(fromIndex, 1);
                updated.splice(toIndex, 0, moved);
                return updated;
              });
            }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 cursor-move">
                <p>{itm.label}</p>
              </div>
              <div className="flex items-center gap-2">
                {/* Hidden file input */}
                <label
                  htmlFor={`file-upload-${idx}`}
                  className="cursor-pointer"
                >
                  <FileImage className="size-5 text-sc-primary" />
                </label>
                <input
                  id={`file-upload-${idx}`}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => imageUploadHandler(e, idx)}
                />

                {itm.preview && (
                  <Image
                    src={itm.preview}
                    alt={itm.label}
                    width={100}
                    height={100}
                    className="w-12 h-12 object-cover rounded"
                  />
                )}

                <Trash2
                  onClick={() => removeOption(idx)}
                  className="size-5 cursor-pointer text-red-600"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Ranking;
