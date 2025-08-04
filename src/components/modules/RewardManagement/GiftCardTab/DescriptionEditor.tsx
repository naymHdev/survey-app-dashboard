"use client";

import React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const DescriptionEditor: React.FC = () => {
  // Initialize the editor
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Hello from Tiptap!</p>",
  });

  return (
    <div className="border rounded p-4">
      {/* Toolbar */}
      <div className="mb-2 space-x-2">
        <button
          onClick={() => editor?.chain().focus().toggleBold().run()}
          disabled={!editor?.can().toggleBold()}
          type="button"
          className={editor?.isActive("bold") ? "font-bold" : ""}
        >
          Bold
        </button>
        <button
          onClick={() => editor?.chain().focus().toggleItalic().run()}
          disabled={!editor?.can().toggleItalic()}
          type="button"
          className={editor?.isActive("italic") ? "italic" : ""}
        >
          Italic
        </button>
        <button
          onClick={() => editor?.chain().focus().toggleStrike().run()}
          disabled={!editor?.can().toggleStrike()}
          type="button"
          className={editor?.isActive("strike") ? "line-through" : ""}
        >
          Strike
        </button>
        <button
          onClick={() => editor?.chain().focus().toggleBulletList().run()}
          type="button"
          className={editor?.isActive("bulletList") ? "font-bold" : ""}
        >
          Bullet List
        </button>
        <button
          onClick={() => editor?.chain().focus().toggleOrderedList().run()}
          type="button"
          className={editor?.isActive("orderedList") ? "font-bold" : ""}
        >
          Ordered List
        </button>
      </div>

      {/* Editor content */}
      <EditorContent editor={editor} className="min-h-[150px] border p-2 rounded" />
    </div>
  );
};

export default DescriptionEditor;
