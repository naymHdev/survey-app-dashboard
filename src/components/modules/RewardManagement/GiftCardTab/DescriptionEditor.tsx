"use client";

import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  List,
  ListOrdered,
  ImageIcon,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function DescriptionEditor() {
  const editorRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isEmpty, setIsEmpty] = useState(true);

  const format = (command: string, value?: string) => {
    document.execCommand(command, false, value);
    editorRef.current?.focus();
  };

  const handleInput = () => {
    const text = editorRef.current?.innerText || "";
    setIsEmpty(text.trim() === "");
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = function (event) {
        const img = document.createElement("img");
        img.src = event.target?.result as string;
        img.alt = file.name;
        img.style.maxWidth = "100%";
        img.style.margin = "8px 0";

        const range = window.getSelection()?.getRangeAt(0);
        if (range) {
          range.insertNode(img);
          range.collapse(false);
        } else {
          editorRef.current?.appendChild(img);
        }

        editorRef.current?.focus();
        setIsEmpty(false);
      };
      reader.readAsDataURL(file);
    }
    e.target.value = ""; // reset input so the same image can be reselected
  };

  return (
    <div className="w-full">
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
        {/* Header */}
        <div className="px-4 py-3 border-b border-gray-200">
          <h3 className="text-sm font-medium text-gray-900">Description</h3>
        </div>

        {/* Toolbar */}
        <div className="px-4 py-2 border-b border-gray-200 bg-gray-50">
          <div className="flex items-center gap-1">
            {/* Hidden file input */}
            <input
              type="file"
              accept="image/*"
              ref={inputRef}
              onChange={handleImageChange}
              style={{ display: "none" }}
            />

            {/* Image Button */}
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0"
              onClick={() => inputRef.current?.click()}
            >
              <ImageIcon className="h-4 w-4" />
            </Button>

            {/* Font Size Selector */}
            <Select
              defaultValue="3"
              onValueChange={(value) => format("fontSize", value)}
            >
              <SelectTrigger className="w-16 h-8 text-xs">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">10</SelectItem>
                <SelectItem value="2">13</SelectItem>
                <SelectItem value="3">16</SelectItem>
                <SelectItem value="4">18</SelectItem>
                <SelectItem value="5">24</SelectItem>
              </SelectContent>
            </Select>

            <div className="w-px h-6 bg-gray-300 mx-1" />

            {/* Formatting */}
            <Button
              type="button"
              onClick={() => format("bold")}
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0"
            >
              <Bold className="h-4 w-4" />
            </Button>
            <Button
              type="button"
              onClick={() => format("italic")}
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0"
            >
              <Italic className="h-4 w-4" />
            </Button>
            <Button
              type="button"
              onClick={() => format("underline")}
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0"
            >
              <Underline className="h-4 w-4" />
            </Button>

            <div className="w-px h-6 bg-gray-300 mx-1" />

            {/* Alignment */}
            <Button
              type="button"
              onClick={() => format("justifyLeft")}
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0"
            >
              <AlignLeft className="h-4 w-4" />
            </Button>
            <Button
              type="button"
              onClick={() => format("justifyCenter")}
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0"
            >
              <AlignCenter className="h-4 w-4" />
            </Button>
            <Button
              type="button"
              onClick={() => format("justifyRight")}
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0"
            >
              <AlignRight className="h-4 w-4" />
            </Button>
            <Button
              type="button"
              onClick={() => format("justifyFull")}
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0"
            >
              <AlignJustify className="h-4 w-4" />
            </Button>

            <div className="w-px h-6 bg-gray-300 mx-1" />

            {/* Lists */}
            <Button
              type="button"
              onClick={() => format("insertUnorderedList")}
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0"
            >
              <List className="h-4 w-4" />
            </Button>
            <Button
              type="button"
              onClick={() => format("insertOrderedList")}
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0"
            >
              <ListOrdered className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Editable Content Area */}
        <div className="p-4 relative">
          {isEmpty && (
            <div className="absolute text-sm text-gray-400 pointer-events-none select-none">
              Write description here...
            </div>
          )}
          <div
            ref={editorRef}
            contentEditable
            suppressContentEditableWarning
            onInput={handleInput}
            className="min-h-[200px] border-0 outline-none resize-none focus-visible:ring-0 focus-visible:ring-offset-0 text-sm"
            style={{
              whiteSpace: "pre-wrap",
              wordWrap: "break-word",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
