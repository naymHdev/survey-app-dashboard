import { useState } from "react";
import Image from "next/image";
import NSButton from "@/components/ui/core/NSButton";
import { Upload, X } from "lucide-react";

const ImageUpload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;

    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile));
  };

  const removeImage = () => {
    setFile(null);
    setPreview(null);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      {!preview ? (
        <label className=" flex items-center justify-center gap-2 cursor-pointer px-5 py-3 bg-sc-primary text-white rounded-lg hover:bg-sc-primary/90 transition">
          Upload Image <Upload />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />
        </label>
      ) : (
        <div className="flex flex-col items-center gap-2 relative">
          <Image
            src={preview}
            alt="Preview"
            width={150}
            height={150}
            className="rounded-lg object-cover w-full"
          />
          <NSButton
            onClick={removeImage}
            className="bg-white/80 hover:bg-white absolute top-1 right-1 rounded-full p-1 shadow-md"
          >
            <X className="text-red-700 size-5" />
          </NSButton>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
