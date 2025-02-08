"use client";
import React, { useCallback } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextAlign from "@tiptap/extension-text-align";
import Heading from "@tiptap/extension-heading";
import Highlight from "@tiptap/extension-highlight";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import BulletList from "@tiptap/extension-bullet-list";
import OrderedList from "@tiptap/extension-ordered-list";
import Toolbar from "./Toolbar";

interface EditorProps {
  onChange?: (html: string) => void;
}

const TextEditor: React.FC<EditorProps> = ({ onChange }) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure(),
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      Heading.configure(),
      Highlight.configure({ levels: [1, 2, 3] }),
      Image.configure(),
      Link.configure(),
      BulletList.configure(),
      OrderedList.configure({
        HTMLAttributes: { class: "list-decimal ml-3" },
      }),
    ],
    content: "", // Initial content set to empty
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      console.log(html);
      if (onChange) {
        onChange(html);
      }
    },
    editorProps: {
      attributes: {
        class: "min-h-[156px] border rounded-md bg-slate-50 py-2 p-3 text-black",
      },
    },
  });

  return (
    <div>
      <Toolbar editor={editor} />
      {editor ? <EditorContent editor={editor} /> : <p>Loading editor...</p>}
    </div>
  );
};

export default TextEditor;
